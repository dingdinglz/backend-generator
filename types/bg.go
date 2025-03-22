package types

type BackendGeneratorConfig struct {
	Name        string        `json:"name"`
	BGVersion   string        `json:"bg_version"`
	Author      string        `json:"author"`
	Types       []OpenType    `json:"types"`
	Middlewares []string      `json:"middlewares"`
	Methods     []interface{} `json:"methods"`
	Configs     []ConfigField `json:"configs"`
}
