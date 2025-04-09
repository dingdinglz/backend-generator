package fiber

import "backend-generator/generator/common"

func (g *Generator) Config() {
	common.GenerateConfig(g.WorkPath)
}
