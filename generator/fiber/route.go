package fiber

import (
	"backend-generator/tool"
	"os"
	"path/filepath"
	"strings"

	"github.com/Xuanwo/gg"
)

func (generator *Generator) Route(nowPath string, workGroup []interface{}) {
	if !tool.FileExist(nowPath) {
		os.Mkdir(nowPath, os.ModePerm)
	}

	for _, item := range workGroup {
		nowItem := item.(map[string]interface{})
		if nowItem["type"].(string) == "method" {
			packageName := filepath.Base(nowPath)
			varName := tool.Path2String(nowItem["path"].(string))
			fileName := strings.ToLower(varName) + ".go"
			g := gg.NewGroup()
			g.AddPackage(packageName)
			importMessage := g.NewImport().AddPath(generator.ModName + "/servicecontext").AddPath(generator.ModName + "/tool").AddPath("github.com/gofiber/fiber/v2")
			typeFlag := false
			reqStruct := g.NewStruct(varName + "Req")
			reqMap, ok := nowItem["req"].([]interface{})
			if ok {
				for _, reqFieldun := range reqMap {
					reqField := reqFieldun.(map[string]interface{})
					fieldName := reqField["name"].(string)
					if fieldName == "_" {
						fieldName = ""
					}
					sfieldName := fieldName
					if len(fieldName) > 1 {
						sfieldName = strings.ToUpper(fieldName[:1]) + fieldName[1:]
					} else {
						sfieldName = strings.ToUpper(sfieldName)
					}
					tag := " `json:\"" + fieldName + "\""
					if fieldName == "" {
						tag = ""
					} else {
						if !reqField["optional"].(bool) {
							tag += " bg:\"must\""
						}
						tag += "`"
					}
					typeName := reqField["type"].(string)
					if tool.HaveType(typeName) {
						typeName = "types." + typeName
						typeFlag = true
					}
					reqStruct.AddField(sfieldName, typeName+tag)
				}
			}
			respStruct := g.NewStruct(varName + "Resp")
			respMap, ok := nowItem["resp"].([]interface{})
			if ok {
				for _, respFieldun := range respMap {
					respField := respFieldun.(map[string]interface{})
					fieldName := respField["name"].(string)
					if fieldName == "_" {
						fieldName = ""
					}
					sfieldName := fieldName
					if len(fieldName) > 1 {
						sfieldName = strings.ToUpper(fieldName[:1]) + fieldName[1:]
					} else {
						sfieldName = strings.ToUpper(sfieldName)
					}
					tag := " `json:\"" + fieldName + "\"`"
					if respField["omitempty"].(bool) {
						tag = " `json:\"" + fieldName + ",omitempty" + "\"`"
					}
					if fieldName == "" {
						tag = ""
					}
					typeName := respField["type"].(string)
					if tool.HaveType(typeName) {
						typeName = "types." + typeName
						typeFlag = true
					}
					respStruct.AddField(sfieldName, typeName+tag)
				}
			}

			if typeFlag {
				importMessage.AddPath(generator.ModName + "/types")
			}

			newFunction := g.NewFunction("New"+varName+"Route").AddParameter("sctx", "*servicecontext.ServiceContext").AddResult("", "fiber.Handler")
			newFuctionBody := `return func(ctx *fiber.Ctx) error {
		req := &{{VarName}}Req{}
		e := tool.ParseForm(req, ctx)
		if e != nil {
			return ctx.JSON(map[string]interface{}{"code": 400, "message": e.Error()})
		}
		resp, e := {{VarName}}(sctx, req)
		if e != nil {
			return ctx.JSON(map[string]interface{}{"code": 400, "message": e.Error()})

		}
		return ctx.JSON(resp)
	}`
			newFuctionBody = strings.ReplaceAll(newFuctionBody, "{{ParseMethod}}", "ParseForm")
			newFuctionBody = strings.ReplaceAll(newFuctionBody, "{{VarName}}", varName)
			newFunction.AddBody(newFuctionBody)

			g.NewFunction(varName).AddParameter("sctx", "*servicecontext.ServiceContext").AddParameter("req", "*"+varName+"Req").AddResult("resp", "*"+varName+"Resp").AddResult("e", "error").AddBody("return")
			if !tool.FileExist(filepath.Join(nowPath, fileName)) {
				os.WriteFile(filepath.Join(nowPath, fileName), []byte(g.String()), os.ModePerm)
			}
			tool.CMDRun(nowPath, "go", "fmt", ".")
		}
		if nowItem["type"].(string) == "group" {
			fileGroupName := nowItem["name"].(string)
			generator.Route(filepath.Join(nowPath, fileGroupName), nowItem["children"].([]interface{}))
		}
	}
}
