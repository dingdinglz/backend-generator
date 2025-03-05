package main

import (
	"os"
)

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
