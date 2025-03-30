package main

import (
	"os"
)

type Setting struct {
	Language struct {
		Locale string `json:"locale"`
	} `json:"language"`
	Ai struct {
		Base  string `json:"base"`
		Key   string `json:"key"`
		Model string `json:"model"`
	} `json:"ai"`
}

func (*App) SettingSet(s string) {
	os.WriteFile("setting.json", []byte(s), os.ModePerm)
}

func (*App) SettingGet() string {
	res, e := os.ReadFile("setting.json")
	if e == nil {
		return string(res)
	}
	return "{}"
}
