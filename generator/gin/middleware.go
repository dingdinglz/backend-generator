package gin

import (
	"backend-generator/global"
	"backend-generator/tool"
	"os"
	"path/filepath"
	"strings"

	"github.com/Xuanwo/gg"
)

func (g *Generator) Middleware() {
	middlewarePath := filepath.Join(g.WorkPath, "middleware")
	if !tool.FileExist(middlewarePath) {
		os.Mkdir(middlewarePath, os.ModePerm)
	}
	for _, i := range global.WorkSpaceConfig.Middlewares {
		fileName := strings.ToLower(i) + ".go"
		funcName := strings.ToUpper(i[:1]) + i[1:]
		f := gg.NewGroup()
		f.AddPackage("middleware")
		f.NewImport().AddPath("github.com/gin-gonic/gin")
		f.NewFunction(funcName).AddResult("", "gin.HandlerFunc").AddBody(
			"return func(ctx *gin.Context) {}",
		)
		if !tool.FileExist(filepath.Join(middlewarePath, fileName)) {
			os.WriteFile(filepath.Join(middlewarePath, fileName), []byte(f.String()), os.ModePerm)
		}
	}
	tool.CMDRun(middlewarePath, "go", "fmt", ".")
}
