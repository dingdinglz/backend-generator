package types

type Field struct {
	Name      string `json:"name"`
	Type      string `json:"type"`
	Optional  bool   `json:"optional"`
	Omitempty bool   `json:"omitempty"`
}

type OpenType struct {
	Name   string  `json:"name"`
	Fields []Field `json:"fields"`
}

type ConfigField struct {
	Name string `json:"name"`
	Type string `json:"type"`
}
