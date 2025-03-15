package tool

import "backend-generator/global"

func HaveType(t string) bool {
	for _, i := range global.WorkSpaceConfig.Types {
		if i.Name == t {
			return true
		}
	}
	return false
}
