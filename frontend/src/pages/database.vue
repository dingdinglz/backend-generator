<template>
  <el-card>
    <template #header>
      {{ $t("app.menu.database") }}
    </template>
    {{ $t("database.introduce.i") }}
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
      <el-button type="primary">{{ $t("index.generate") }}</el-button>
    </el-col>
  </el-row>
  <br/>
  <el-button type="primary" @click="AddTable">{{ $t("database.addTable") }}</el-button>
  <br/>
  <TableDescription v-for="item in $store.state.workspaceConfig.database" :table="item"/>
</template>
<script>
import TableDescription from "./database/TableDescription.vue";

export default {
  components: {TableDescription},
  data() {
    return {
      generateFramework: ""
    }
  },
  methods: {
    AddTable() {
      this.$store.commit("addTable")
    }
  }
}
</script>