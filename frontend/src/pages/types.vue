<template>
  <el-dialog :title="$t('types.add')" v-model="addTypeDialogVisible">
    <el-input v-model="addType" :placeholder="$t('types.input')"></el-input>
    <template #footer>
      <el-button type="primary" @click="addTypeHandle">{{ $t("common.add") }}</el-button>
    </template>
  </el-dialog>
  <el-card>
    <template #header>
      {{ $t("app.menu.types") }}
    </template>
    {{ $t("types.introduce.i") }}
  </el-card>
  <br/>
  <el-button type="primary" @click="addTypeDialogVisible = true">{{ $t("types.add") }}</el-button>
  <br/>
  <TypeDescription v-for="item in $store.state.workspaceConfig.types" :type="item"/>
</template>
<script>
import TypeDescription from "./type/TypeDescription.vue";

export default {
  components: {TypeDescription},
  data() {
    return {
      addTypeDialogVisible: false,
      addType: ""
    }
  },
  methods: {
    addTypeHandle() {
      this.$store.commit("addType", this.addType)
      this.addType = ""
      this.addTypeDialogVisible = false
    }
  }
}
</script>