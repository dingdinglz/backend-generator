<template>
  <el-dialog v-model="codeUseDialog" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
    <template #header>
      {{ $t("database.code") }}
    </template>
    {{ $t("database.codeIntroduce.i") }}
    <br/>
    <br/>
    {{ $t("database.codeIntroduce.ii") }}
    <br/>
    <br/>
    {{ $t("database.codeIntroduce.iii") }}
    <br/>
    <br/>
    <CodeBlock code='testModel := database.NewTestModel()
database.Open("sqlite", "test.db")
testModel.Create(&database.TestModel{
	Text: "11",
})' language="go"/>
    <br/>
    {{ $t("database.codeIntroduce.iiii") }}
    <CodeBlock code='package servicecontext

import (
	"test/config"
	"test/database"
)

type ServiceContext struct {
	Config    *config.Config
	TestModel *database.TestModel
}

func NewServiceContext(c *config.Config) *ServiceContext {
	return &ServiceContext{
		Config:    c,
		TestModel: database.NewTestModel(),
	}
}
' language="go"/>
    <br/>
    {{ $t("database.codeIntroduce.iiiii") }}
    <template #footer>
      <el-button type="danger" @click="codeUseDialog = false">{{ $t("common.close") }}</el-button>
    </template>
  </el-dialog>
  <el-card>
    <template #header>
      {{ $t("app.menu.database") }}
    </template>
    <span>{{ $t("database.introduce.i") }}</span>
    <br/>
    <br/>
    <el-button type="primary" @click="codeUseDialog = true">{{ $t("database.showCode") }}</el-button>
  </el-card>
  <br/>
  <el-row>
    <el-col :span="18">
      <el-select :placeholder="$t('database.chooseFramework')" v-model="generateFramework">
        <el-option value="gorm" label="Gorm"></el-option>
        <el-option value="xorm" label="Xorm"></el-option>
      </el-select>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="3">
      <el-button type="primary" @click="GenerateCode">{{ $t("index.generate") }}</el-button>
    </el-col>
  </el-row>
  <br/>
  <el-button type="primary" @click="AddTable">{{ $t("database.addTable") }}</el-button>
  <br/>
  <TableDescription v-for="item in $store.state.workspaceConfig.database" :table="item"/>
</template>
<script>
import TableDescription from "./database/TableDescription.vue";
import {GenerateDatabaseCode} from "../../wailsjs/go/main/App.js";
import {ElMessage} from "element-plus";
import CodeBlock from "./code/CodeBlock.vue";

export default {
  components: {CodeBlock, TableDescription},
  data() {
    return {
      generateFramework: "",
      codeUseDialog: false,
    }
  },
  methods: {
    AddTable() {
      this.$store.commit("addTable")
    },
    GenerateCode() {
      if (this.generateFramework === "") {
        ElMessage.error(this.$t("database.chooseOne"))
        return
      }
      const that = this
      GenerateDatabaseCode(this.generateFramework).then(res => {
        if (res === "err") {
          ElMessage.error(that.$t("database.unsupport"))
          return
        }
        ElMessage.success(that.$t("common.generateOK"))
        that.codeUseDialog = true
      })
    }
  },
  mounted() {
  }
}
</script>