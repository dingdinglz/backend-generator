package common

import (
	"backend-generator/global"
	"backend-generator/tool"
	"os"
	"path/filepath"
	"strings"

	"github.com/Xuanwo/gg"
)

func GenerateTypes(_path string) {
	workPath := filepath.Join(_path, "types")
	if !tool.FileExist(workPath) {
		os.Mkdir(workPath, os.ModePerm)
	}

	for _, i := range global.WorkSpaceConfig.Types {
		i.Name = strings.ReplaceAll(i.Name, " ", "")
		fileName := strings.ToLower(i.Name) + ".go"
		typeName := strings.ToUpper(i.Name[:1]) + i.Name[1:]

		g := gg.NewGroup()
		g.AddPackage("types")
		s := g.NewStruct(typeName)

		for _, j := range i.Fields {
			FieldName := strings.ToUpper(j.Name[:1]) + j.Name[1:]
			s.AddField(FieldName, j.Type+" `json:\""+j.Name+"\"`")
		}

		os.WriteFile(filepath.Join(workPath, fileName), []byte(g.String()), os.ModePerm)
	}

	tool.CMDRun(workPath, "go", "fmt", ".")
}
