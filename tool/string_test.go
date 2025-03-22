package tool

import (
	"fmt"
	"testing"
)

func TestFirstUpper(t *testing.T) {
	fmt.Println(StringFirstUpper("a"))
	fmt.Println(StringFirstUpper("about"))
	fmt.Println(StringFirstUpper("C"))
	fmt.Println(StringFirstUpper("About"))
}
