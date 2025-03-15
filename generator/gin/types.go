package gin

import "backend-generator/generator/common"

func (g *Generator) Types() {
	common.GenerateTypes(g.WorkPath)
}
