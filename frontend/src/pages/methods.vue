<template>
  <el-card>
    <template #header>
      {{ $t("app.menu.methods") }}
    </template>
    {{ $t("methods.introduce.i") }}
  </el-card>
  <br/>
  <el-button type="primary" @click="AddMethod">{{ $t("methods.addMethod") }}</el-button>
  <el-button type="primary" @click="AddGroup">{{ $t("methods.addGroup") }}</el-button>
  <div v-for="item in $store.state.workspaceConfig.methods">
    <div v-if="item.type === 'group'">
      <GroupDescription :group="item" :before="[]"/>
    </div>
    <div v-if="item.type === 'method'">
      <MethodDescription :method="item" :before="[]"/>
    </div>
  </div>
</template>
<script>
import GroupDescription from "./method/GroupDescription.vue";
import MethodDescription from "./method/MethodDescription.vue";
import {WorkSpaceConfigGet} from "../../wailsjs/go/main/App.js";

export default {
  components: {MethodDescription, GroupDescription},
  methods: {
    AddMethod() {
      if (this.$store.state.workspaceConfig.methods === null) {
        this.$store.state.workspaceConfig.methods = []
      }
      this.$store.state.workspaceConfig.methods.push(
          {
            "type": "method",
            "path": "",
            "method": "GET",
            "req": [],
            "resp": []
          }
      );
    },
    AddGroup() {
      if (this.$store.state.workspaceConfig.methods === null) {
        this.$store.state.workspaceConfig.methods = []
      }
      this.$store.state.workspaceConfig.methods.push(
          {
            "type": "group",
            "name": "",
            "path": "",
            "children": [],
            "middlewares": []
          }
      );
    }
  }
}
</script>