package gin

import (
	"backend-generator/generator/common"
	"fmt"
)

func (g *Generator) Config() {
	fmt.Println("I am running", g.WorkPath)
	common.GenerateConfig(g.WorkPath)
}
