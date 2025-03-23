<template>
  <br/>
  <el-card>
    <template #header>
      <div class="header-container">
        {{ props.table.name }}
        <el-button type="danger" @click="DeleteTable(props.table.name)">{{ $t("common.delete") }}</el-button>
      </div>
    </template>
    <el-form-item :label="$t('database.tableName')">
      <el-input v-model="props.table.name" :placeholder="$t('database.inputTable')"></el-input>
    </el-form-item>
    <el-button type="primary" @click="AddField">{{ $t("database.addColumn") }}</el-button>
    <el-table :data="props.table.fields">
      <el-table-column :label="$t('database.columnName')">
        <template #default="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column :label="$t('common.type')">
        <template #default="scope">
          <el-input v-model="scope.row.type"></el-input>
        </template>
      </el-table-column>
      <el-table-column :label="$t('common.operation')">
        <template #default="scope">
          <el-button type="danger" @click="DeleteField(scope.row.name)">{{ $t("common.delete") }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script setup>
import {useStore} from "vuex";

const props = defineProps(["table"])
const store = useStore()

function AddField() {
  props.table.fields.push({name: "", type: ""})
}

function DeleteField(name) {
  if (props.table.fields === null) {
    return
  }
  for (let i = 0; i < props.table.fields.length; i++) {
    if (props.table.fields[i].name === name) {
      props.table.fields.splice(i, 1)
      break
    }
  }
}

function DeleteTable(name) {
  store.commit("deleteTable", name)
}
</script>
<style>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>