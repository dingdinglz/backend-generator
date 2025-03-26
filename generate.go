package main

import (
	"backend-generator/generator/common"
	"backend-generator/generator/gin"
	"backend-generator/generator/gorm"
	"backend-generator/global"
	"backend-generator/tool"
	"path/filepath"
	"strings"
)

func (app *App) GenerateCode(t string) string {
	var Generator common.Generator
	switch t {
	case "gin":
		Generator = &gin.Generator{
			WorkPath: global.WorkSpace,
			ModName:  strings.ToLower(global.WorkSpaceConfig.Name),
		}
	default:
		return "err"
	}
	tool.CMDRun(global.WorkSpace, "go", "mod", "init", strings.ToLower(global.WorkSpaceConfig.Name))
	Generator.Config()
	Generator.Middleware()
	Generator.Tool()
	Generator.ServiceContext()
	Generator.Types()
	Generator.Route(filepath.Join(global.WorkSpace, "route"), global.WorkSpaceConfig.Methods)
	Generator.Bind()
	Generator.Main()
	tool.CMDRun(global.WorkSpace, "go", "mod", "tidy")
	return ""
}

func (app *App) GenerateDatabaseCode(t string) string {
	switch t {
	case "gorm":
		gorm.Generate()
	default:
		return "err"
	}
	return ""
}
