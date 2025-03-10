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
    <el-button type="primary" size="large"></el-button>
  </div>
</template>
<script>
import {WorkSpaceConfigGet, WorkSpaceConfigSave, WorkSpaceGet, WorkSpaceSet} from "../../wailsjs/go/main/App.js";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      workspace: "",
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
    }
  },
}
</script>