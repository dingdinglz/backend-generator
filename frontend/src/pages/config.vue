<template>
  <el-card>
    <template #header>
      {{ $t("app.menu.config") }}
    </template>
    {{ $t("configs.introduce.i") }}
  </el-card>
  <br/>
  <el-button type="primary" @click="AddConfig">{{ $t("configs.add") }}</el-button>
  <el-table :data="$store.state.workspaceConfig.configs">
    <el-table-column :label="$t('configs.name')">
      <template #default="scope">
        <el-input v-model="scope.row.name"></el-input>
      </template>
    </el-table-column>
    <el-table-column :label="$t('configs.type')">
      <template #default="scope">
        <el-input v-model="scope.row.type"></el-input>
      </template>
    </el-table-column>
    <el-table-column :label="$t('common.operation')">
      <template #default="scope">
        <el-button type="danger" @click="DeleteConfig(scope.row.name)">{{ $t("common.delete") }}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  methods: {
    AddConfig() {
      this.$store.commit("newConfig")
    },
    DeleteConfig(name) {
      this.$store.commit("deleteConfig", name)
    }
  }
}
</script>