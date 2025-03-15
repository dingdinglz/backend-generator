package common

import (
	"backend-generator/tool"
	"os"
	"path/filepath"

	"github.com/Xuanwo/gg"
)

func GenerateConfig(_path string) {
	workPath := filepath.Join(_path, "config")
	if !tool.FileExist(workPath) {
		os.Mkdir(workPath, os.ModePerm)
	}
	// config.go
	config := gg.NewGroup()
	config.AddPackage("config")
	config.NewStruct("Config").AddField("Host", "string `json:\"host\"`").AddField("Port", "int `json:\"port\"`")
	os.WriteFile(filepath.Join(workPath, "config.go"), []byte(config.String()), os.ModePerm)

	// load.go
	load := `package config

import (
	"encoding/json"
	"os"
)

func Load(_path string) (c *Config) {
	res, e := os.ReadFile(_path)
	if e != nil {
		panic(e)
	}
	e = json.Unmarshal(res, &c)
	if e != nil {
		panic(e)
	}
	return
}`
	os.WriteFile(filepath.Join(workPath, "load.go"), []byte(load), os.ModePerm)

	if !tool.FileExist(filepath.Join(_path, "config.json")) {
		os.WriteFile(filepath.Join(_path, "config.json"), []byte(string(`{
	"host" : "localhost",
	"port" : 8080		
}`)), os.ModePerm)
	}
	tool.CMDRun(workPath, "go", "fmt", ".")
}
