<template>
  <div v-if="workspace === ''">
    <el-button type="primary" size="large" @click="OpenProject">{{ $t("index.openProject") }}</el-button>
  </div>
  <div v-if="workspace!==''">
    <el-alert type="success" effect="dark" :closable="false">{{ $t("index.saveIntroduce") }}</el-alert>
    <br/>
    <span>{{ $t("index.project") }} : {{ $store.state.workspaceConfig.name }} &nbsp; </span>
    <el-button type="primary" @click="SaveProject">{{ $t("index.save") }}</el-button>
    <el-button type="danger" @click="CloseProject">{{ $t("index.closeProject") }}</el-button>
    <br/>
    <br/>
    <el-row>
      <el-col :span="18">
        <el-select :placeholder="$t('index.generatorTip')" v-model="generator">
          <el-option label="Gin" value="gin"></el-option>
          <el-option label="GoFiber" value="fiber"></el-option>
          <el-option label="GoZero" value="zero"></el-option>
        </el-select>
      </el-col>
      <el-col :span="1">
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="Generate">{{ $t("index.generate") }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {
  GenerateCode,
  WorkSpaceConfigGet,
  WorkSpaceConfigSave,
  WorkSpaceGet,
  WorkSpaceSet
} from "../../wailsjs/go/main/App.js";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      workspace: "",
      generator: "",
    }
  },
  async mounted() {
    this.workspace = await WorkSpaceGet()
  },
  methods: {
    OpenProject() {
      const that = this
      WorkSpaceSet(this.$t("index.openProjectTitle")).then(async res => {
        that.workspace = res
        if (res !== "") {
          that.$store.commit('changeWorkspaceConfig', await WorkSpaceConfigGet())
        }
      })
    },
    CloseProject() {
      this.workspace = ""
    },
    SaveProject() {
      const that = this
      WorkSpaceConfigSave(JSON.stringify(this.$store.state.workspaceConfig))
          .then(() => {
            ElMessage.success(that.$t('common.saveOK'))
          })
    },
    Generate() {
      if (this.generator === "") {
        ElMessage.error(this.$t("index.generateNone"))
        return
      }
      const that = this
      GenerateCode(this.generator)
          .then(res => {
            if (res === "err") {
              ElMessage.error(that.$t("index.generatorUn"))
            }
            if (res === "") {
              ElMessage.success(that.$t("index.generateOK"))
            }
          })
    }
  },
}
</script>