package godo

import "os/exec"

func Version() string {
	cmd := exec.Command("go", "version")
	res, e := cmd.CombinedOutput()
	if e != nil {
		return ""
	}
	return string(res)
}
