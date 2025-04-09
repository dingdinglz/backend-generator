package fiber

import (
	"backend-generator/global"
	"backend-generator/tool"
	"os"
	"path/filepath"
	"strings"

	"github.com/Xuanwo/gg"
)

func (generator *Generator) Bind() {
	g := gg.NewGroup()
	g.AddPackage("main")
	importMessages := g.NewImport().AddPath(generator.ModName + "/servicecontext").AddPath(generator.ModName + "/middleware").AddPath("github.com/gofiber/fiber/v2")

	bodyText, importArr := generateGroupMethodBinds([]string{}, "route", generator.ModName+"/route", "", "", []string{}, global.WorkSpaceConfig.Methods)

	g.NewFunction("BindRoute").AddParameter("scvx", "*servicecontext.ServiceContext").AddParameter("server", "*fiber.App").
		AddBody(bodyText)
	for _, item := range importArr {
		importMessages.AddPath(item)
	}

	os.WriteFile(filepath.Join(generator.WorkPath, "bind.go"), []byte(g.String()), os.ModePerm)

	tool.CMDRun(generator.WorkPath, "go", "fmt", ".")
}

func generateGroupMethodBinds(iii []string, routePac string, im string, group string, path string, middlewares []string, groupInfo []interface{}) (string, []string) {
	iii = append(iii, im)
	res := "\n"
	regroup := group
	if regroup == "" {
		regroup = "server"
	} else {
		regroup = group + routePac + "group"
		res += regroup + ":= " + group + ".Group(\"" + path + "\""
		for _, i := range middlewares {
			res += ",middleware." + strings.ToUpper(i[:1]) + i[1:] + "(scvx)"
		}
		res += ")\n"
	}
	for _, item := range groupInfo {
		nowItem := item.(map[string]interface{})
		if nowItem["type"].(string) == "group" {
			middlewaresAdd := []string{}
			for _, itemM := range nowItem["middlewares"].([]interface{}) {
				middlewaresAdd = append(middlewaresAdd, itemM.(string))
			}
			bodyText, newImport := generateGroupMethodBinds(iii, nowItem["name"].(string), im+"/"+nowItem["name"].(string), regroup, nowItem["path"].(string), middlewaresAdd, nowItem["children"].([]interface{}))
			res += "\n" + bodyText + "\n"
			for _, itemIm := range newImport {
				if !tool.ItemInSlice(itemIm, iii) {
					iii = append(iii, itemIm)
				}
			}
		}
		if nowItem["type"].(string) == "method" {
			method := nowItem["method"].(string)
			res += regroup + "." + method[:1] + strings.ToLower(method[1:]) + "(\"" + nowItem["path"].(string) + "\"," + routePac + ".New" + tool.Path2String(nowItem["path"].(string)) + "Route(scvx))\n"
		}
	}
	return res, iii
}
