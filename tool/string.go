package tool

import "strings"

func StringFirstUpper(s string) string {
	if len(s) <= 1 {
		return strings.ToUpper(s)
	}
	ans := strings.ToUpper(s[:1]) + s[1:]
	return ans
}
