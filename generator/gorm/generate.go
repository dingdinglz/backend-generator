package gorm

import (
	"backend-generator/global"
	"backend-generator/tool"
	"os"
	"path/filepath"
	"strings"
)

func Generate() {
	workPath := filepath.Join(global.WorkSpace, "database")
	if !tool.FileExist(workPath) {
		os.Mkdir(workPath, os.ModePerm)
	}
	migrateThings := ""
	for _, item := range global.WorkSpaceConfig.Database {
		tableName := item.Name
		modelName := tool.StringFirstUpper(tableName) + "Model"
		migrateThings += "&" + modelName + "{},"
		types := "ID uint\n"
		for _, item_type := range item.Fields {
			columnName := item_type.Name
			fieldName := tool.StringFirstUpper(columnName)
			types += fieldName + " " + item_type.Type + "\n"
		}

		source := `package database

type {{modelName}} struct {
	{{database_types}}
}

func New{{modelName}}() *{{modelName}} {
	return &{{modelName}}{}
}

func (*{{modelName}}) Get(id uint) (res {{modelName}}, err error) {
	err = database.Model(&{{modelName}}{}).First(&res, id).Error
	return
}
func (*{{modelName}}) Create(item *{{modelName}}) error {
	return database.Model(&{{modelName}}{}).Create(item).Error
}

func (*{{modelName}}) Delete(id uint) error {
	return database.Delete(&{{modelName}}{}, id).Error
}

func (*{{modelName}}) Update(item *{{modelName}}) error {
	return database.Save(item).Error
}

func ({{modelName}}) TableName() string {
	return "{{tableName}}"
}
`
		source = strings.ReplaceAll(source, "{{modelName}}", modelName)
		source = strings.ReplaceAll(source, "{{tableName}}", tableName)
		source = strings.ReplaceAll(source, "{{database_types}}", types)
		if !tool.FileExist(filepath.Join(workPath, tableName+".go")) {
			os.WriteFile(filepath.Join(workPath, tableName+".go"), []byte(source), os.ModePerm)
		}
	}
	if migrateThings != "" {
		migrateThings = migrateThings[:len(migrateThings)-1]
	}

	// database.go
	database := `package database

import (
	"errors"

	"gorm.io/driver/mysql"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var (
	database *gorm.DB
)

func Open(driver string, source string) error {
	var e error
	switch driver {
	case "sqlite":
		database, e = gorm.Open(sqlite.Open(source))
	case "mysql":
		database, e = gorm.Open(mysql.Open(source))
	default:
		return errors.New("unsupported database")
	}
	if e != nil {
		return e
	}
	e = database.AutoMigrate({{migrateThings}})
	return e
}`
	database = strings.ReplaceAll(database, "{{migrateThings}}", migrateThings)
	os.WriteFile(filepath.Join(workPath, "database.go"), []byte(database), os.ModePerm)
	tool.CMDRun(workPath, "go", "fmt", ".")
	tool.CMDRun(workPath, "go", "mod", "tidy")
}
