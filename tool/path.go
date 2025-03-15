package tool

import "strings"

func Path2String(_path string) string {
	res := ""
	for i := 0; i < (len(_path) - 1); i++ {
		if _path[i] == '/' {
			if _path[i+1] >= 'a' && _path[i+1] <= 'z' {
				res += string(_path[i+1] - 'a' + 'A')
			} else {
				res += string(_path[i+1])
			}
			i++
		} else {
			res += string(_path[i])

		}
	}
	res += string(_path[len(_path)-1])
	res = strings.ReplaceAll(res, "/", "")
	return res
}
