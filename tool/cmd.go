package tool

import (
	"fmt"
	"os/exec"
)

func CMDRun(path string, name string, arg ...string) {
	cmd := exec.Command(name, arg...)
	cmd.Dir = path
	res, e := cmd.CombinedOutput()
	if e != nil {
		fmt.Println(e.Error())
		fmt.Println(string(res))
	}
}
