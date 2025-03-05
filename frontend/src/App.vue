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
</template>
<script>
import {House, Setting} from "@element-plus/icons-vue";
import {SettingGet} from "../wailsjs/go/main/App.js";

export default {
  components: {House, Setting},
  mounted() {
    const that = this;
    SettingGet().then(res => {
      const settingObject = JSON.parse(res);
      if (res !== "{}") {
        that.$i18n.locale = settingObject.language.locale;
      }
    })
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

      }
    }
  }
}
</script>