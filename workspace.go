package main

import (
	"backend-generator/global"
	"backend-generator/tool"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (*App) WorkSpaceGet() string {
	return global.WorkSpace
}

func (app *App) WorkSpaceSet(s string) string {
	res, _ := runtime.OpenDirectoryDialog(app.ctx, runtime.OpenDialogOptions{
		Title:                s,
		DefaultDirectory:     ".",
		CanCreateDirectories: true,
		ShowHiddenFiles:      true,
	})
	global.WorkSpace = res
	if res == "" {
		return ""
	}
	if !tool.FileExist(filepath.Join(res, "bg.json")) {
		runtime.EventsEmit(app.ctx, "initProject", "")
	} else {
		res, _ := os.ReadFile(filepath.Join(res, "bg.json"))
		json.Unmarshal(res, &global.WorkSpaceConfig)
	}
	return res
}

func (*App) WorkSpaceInit(s string) {
	json.Unmarshal([]byte(s), &global.WorkSpaceConfig)
	res, _ := json.Marshal(global.WorkSpaceConfig)
	os.WriteFile(filepath.Join(global.WorkSpace, "bg.json"), res, os.ModePerm)
}

func (*App) WorkSpaceConfigGet() string {
	res, _ := json.Marshal(global.WorkSpaceConfig)
	fmt.Println(global.WorkSpaceConfig.Methods)
	return string(res)
}

func (*App) WorkSpaceConfigSave(s string) {
	json.Unmarshal([]byte(s), &global.WorkSpaceConfig)
	os.WriteFile(filepath.Join(global.WorkSpace, "bg.json"), []byte(s), os.ModePerm)
}
