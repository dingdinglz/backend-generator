<template>
  <div v-loading="loading">
    <el-form :model="settingForm" label-width="auto">
      <el-divider content-position="left">
        {{ $t("setting.languageSetting") }}
      </el-divider>
      <el-form-item :label="$t('setting.language')">
        <el-select v-model="settingForm.language.locale" @change="LanguageChange"
                   :placeholder="$t('setting.languageTip')">
          <el-option label="简体中文" value="zh"></el-option>
          <el-option label="English" value="en"></el-option>
          <el-option label="日本語" value="ja"></el-option>
        </el-select>
      </el-form-item>
      <el-divider content-position="left">
        {{ $t("setting.developEnvironment") }}
      </el-divider>
      <el-form-item label="go version">
        <el-tag v-if="goVersion === ''" size="large" type="danger" effect="dark">{{ $t('setting.goInstall') }}</el-tag>
        <span>{{ goVersion }}</span>
      </el-form-item>
      <el-divider content-position="left">
        {{ $t("setting.about") }}
      </el-divider>
      <el-form-item :label="$t('app.author')">
        <el-button type="text" @click="Dinglz">dinglz</el-button>
      </el-form-item>
      <el-form-item :label="$t('setting.about')">
        <el-button type="primary" @click="OpenDetail">{{ $t('setting.aboutText') }}</el-button>
      </el-form-item>
      <el-form-item :label="$t('setting.version')">
        <el-tag size="large">{{ version }}</el-tag>
      </el-form-item>
    </el-form>
    <div style="text-align: right">
      <el-button type="primary" @click="SaveSetting">{{ $t("setting.save") }}</el-button>
    </div>
  </div>
</template>
<script>
import {reactive} from "vue";
import {GolangVersion, SettingGet, SettingSet, Version} from "../../wailsjs/go/main/App.js";
import {ElMessage} from "element-plus";
import {BrowserOpenURL} from "../../wailsjs/runtime/runtime.js";

export default {
  async mounted() {
    SettingGet().then(res => {
      if (res !== "{}") {
        this.settingForm = JSON.parse(res)
      }
      this.loading = false
    })
    this.version = await Version()
    this.goVersion = await GolangVersion()
  },
  data() {
    return {
      loading: true,
      settingForm: reactive({
        language: {
          locale: "",
        },
      }),
      version: "",
      goVersion: ""
    }
  },
  methods: {
    LanguageChange(lang) {
      this.$i18n.locale = this.settingForm.language.locale;
    },
    SaveSetting() {
      const that = this;
      SettingSet(JSON.stringify(this.settingForm))
          .then(() => {
            ElMessage.success(that.$t("setting.saveOk"));
          })
    },
    OpenDetail() {
      BrowserOpenURL("https://github.com/dingdinglz/backend-generator")
    },
    Dinglz() {
      BrowserOpenURL("https://github.com/dingdinglz")
    }
  }
}
</script>