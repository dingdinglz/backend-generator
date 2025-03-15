package tool

func ItemInSlice(item string, arr []string) bool {
	for _, i := range arr {
		if i == item {
			return true
		}
	}
	return false
}
