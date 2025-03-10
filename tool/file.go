package tool

import "os"

func FileExist(_path string) bool {
	_, e := os.Stat(_path)
	return e == nil
}
