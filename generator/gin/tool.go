package gin

import "backend-generator/generator/common"

func (g *Generator) Tool() {
	common.GenerateTool(g.WorkPath)
}
