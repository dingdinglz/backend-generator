package fiber

import "backend-generator/generator/common"

func (g *Generator) ServiceContext() {
	common.GenerateServiceContext(g.WorkPath, g.ModName)
}
