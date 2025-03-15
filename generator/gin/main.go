package gin

import (
	"backend-generator/tool"
	"os"
	"path/filepath"
	"strings"
)

func (g *Generator) Main() {
	// main.go
	main := `package main

import (
	"flag"
	"strconv"
	"{{projectName}}/config"
	"{{projectName}}/servicecontext"

	"github.com/gin-gonic/gin"
)

var (
	etc string
)

func init() {
	flag.StringVar(&etc, "etc", "config.json", "config file path")
	flag.Parse()
}

func main() {
	config := config.Load(etc)
	scvx := servicecontext.NewServiceContext(config)
	server := gin.New()
	BindRoute(scvx, server)
	e := server.Run(config.Host + ":" + strconv.Itoa(config.Port))
	if e != nil {
		panic(e)
	}
}
`
	main = strings.ReplaceAll(main, "{{projectName}}", g.ModName)
	if !tool.FileExist(filepath.Join(g.WorkPath, "main.go")) {
		os.WriteFile(filepath.Join(g.WorkPath, "main.go"), []byte(main), os.ModePerm)
	}
}
