<template>
  <el-dialog v-model="addMiddlewareDialogVisible" :title="$t('middleware.add')">
    <el-input v-model="addMiddleware" :placeholder="$t('middleware.input')"></el-input>
    <template #footer>
      <el-button type="primary" @click="AddMiddlewareHandle">{{ $t("common.add") }}</el-button>
    </template>
  </el-dialog>
  <el-card>
    <template #header>
      {{ $t('app.menu.middleware') }}
    </template>
    {{ $t("middleware.introduce.i") }}
  </el-card>
  <br/>
  <el-button type="primary" @click="addMiddlewareDialogVisible = true">{{ $t("middleware.add") }}</el-button>
  <el-table :data="$store.state.workspaceConfig.middlewares">
    <el-table-column :label="$t('middleware.name')">
      <template #default="scope">
        <span>{{ scope.row }}</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t('common.operation')">
      <template #default="scope">
        <el-button type="danger" size="small" @click="$store.commit('deleteMiddleware' , scope.row )">
          {{ $t("common.delete") }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      addMiddlewareDialogVisible: false,
      addMiddleware: "",
    }
  },
  methods: {
    AddMiddlewareHandle() {
      this.$store.commit("addMiddleware", this.addMiddleware)
      this.addMiddleware = ""
      this.addMiddlewareDialogVisible = false
    }
  }
}
</script>