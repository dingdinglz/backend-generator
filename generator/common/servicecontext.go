package common

import (
	"backend-generator/tool"
	"os"
	"path/filepath"
	"strings"
)

func GenerateServiceContext(_path string, project string) {
	workPath := filepath.Join(_path, "servicecontext")
	if !tool.FileExist(workPath) {
		os.Mkdir(workPath, os.ModePerm)
	}

	// sctx.go
	sctx := `package servicecontext

import "{{projectName}}/config"

type ServiceContext struct {
	Config *config.Config
}

func NewServiceContext(c *config.Config) *ServiceContext {
	return &ServiceContext{
		Config: c,
	}
}
	`
	sctx = strings.ReplaceAll(sctx, "{{projectName}}", project)

	if !tool.FileExist(filepath.Join(workPath, "sctx.go")) {
		os.WriteFile(filepath.Join(workPath, "sctx.go"), []byte(sctx), os.ModePerm)
	}
}
