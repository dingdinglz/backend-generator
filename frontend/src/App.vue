<template>
  <el-container>
    <el-container>
      <el-aside width="200px">
        <el-menu @select="handleMenuChange">
          <el-menu-item index="1">
            <el-icon>
              <House/>
            </el-icon>
            <span>{{ $t("app.menu.index") }}</span>
          </el-menu-item>
          <div v-if="$store.state.workspaceConfig.name!==''">
            <el-menu-item index="2">
              <el-icon>
                <Link/>
              </el-icon>
              <span>{{ $t("app.menu.middleware") }}</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon>
                <MessageBox/>
              </el-icon>
              <span>{{ $t("app.menu.types") }}</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Grid/>
              </el-icon>
              <span>{{ $t("app.menu.methods") }}</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon>
                <Document/>
              </el-icon>
              <span>{{ $t("app.menu.config") }}</span>
            </el-menu-item>
          </div>
          <el-menu-item index="6">
            <el-icon>
              <DataAnalysis/>
            </el-icon>
            <span>{{ $t("app.menu.database") }}</span>
          </el-menu-item>
          <el-menu-item index="0">
            <el-icon>
              <Setting/>
            </el-icon>
            <span>{{ $t("app.menu.setting") }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <RouterView/>
        </el-main>
        <el-footer>
          <div style="text-align: center;color: grey">
            backend-generator copyright &copy; dinglz 2025
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
  <el-dialog v-model="initProjectModalVisible" :title="$t('app.initProject')" :show-close="false"
             :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form :model="initProjectForm" label-width="auto">
      <el-form-item :label="$t('app.projectName')">
        <el-input v-model="initProjectForm.name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('app.author')">
        <el-input v-model="initProjectForm.author"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="initProject">
        {{ $t("app.init") }}
      </el-button>
    </template>
  </el-dialog>
</template>
<script>
import {House, Setting, Link, MessageBox, Grid, Document, DataAnalysis} from "@element-plus/icons-vue";
import {SettingGet, Version, WorkSpaceConfigGet, WorkSpaceGet, WorkSpaceInit} from "../wailsjs/go/main/App.js";
import {EventsOn} from "../wailsjs/runtime/runtime.js";
import {reactive} from "vue";
import {ElMessage} from "element-plus";

export default {
  components: {DataAnalysis, Document, Grid, MessageBox, House, Setting, Link},
  data() {
    return {
      initProjectModalVisible: false,
      initProjectForm: reactive({
        name: "",
        bg_version: "",
        author: ""
      })
    }
  },
  async mounted() {
    const that = this
    SettingGet().then(res => {
      const settingObject = JSON.parse(res);
      if (res !== "{}") {
        that.$i18n.locale = settingObject.language.locale;
      }
    })
    EventsOn("initProject", function (data) {
      that.initProjectModalVisible = true;
    })
    const workspace = await WorkSpaceGet()
    if (workspace !== "") {
      this.$store.commit('changeWorkspaceConfig', await WorkSpaceConfigGet())
    }
  },
  methods: {
    handleMenuChange(key, keypath) {
      switch (key) {
        case "0":
          window.location.href = "/#/setting"
          break
        case "1":
          window.location.href = "/#/"
          break
        case "2":
          window.location.href = "/#/middleware"
          break
        case "3":
          window.location.href = '/#/types'
          break
        case "4":
          window.location.href = "/#/methods"
          break
        case "5":
          window.location.href = "/#/configs"
          break
        case "6":
          window.location.href = "/#/database"
          break
      }
    },
    async initProject() {
      if (this.initProjectForm.name === "" || this.initProjectForm.author === "") {
        ElMessage.error(this.$t("app.fieldMust"))
        return
      }
      const that = this
      this.initProjectForm.bg_version = await Version()
      WorkSpaceInit(JSON.stringify(this.initProjectForm)).then(async () => {
        ElMessage.success(this.$t("app.initOK"))
        that.initProjectModalVisible = false
        that.$store.commit("changeWorkspaceConfig", await WorkSpaceConfigGet())
      })
    }
  }
}
</script>