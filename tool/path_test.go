package tool

import (
	"fmt"
	"testing"
)

func TestPath2String(t *testing.T) {
	x := Path2String("/test/get")
	fmt.Println(x)
}
