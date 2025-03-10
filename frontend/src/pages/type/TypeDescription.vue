<template>
  <br/>
  <el-card>
    <template #header>
      <div class="header-container">
        {{ props.type.name }}
        <el-button type="danger" @click="deleteType">{{ $t("common.delete") }}</el-button>
      </div>
    </template>
    <el-button type="primary" @click="addField">{{ $t("types.addField") }}</el-button>
    <br/>
    <el-table :data="props.type.fields">
      <el-table-column :label="$t('types.field.name')">
        <template #default="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column :label="$t('types.field.type')">
        <template #default="scope">
          <el-input v-model="scope.row.type"></el-input>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <el-tooltip placement="top" :content="$t('types.tips.optional')">
            {{ $t("types.field.optional") }}
          </el-tooltip>
        </template>
        <template #default="scope">
          <el-switch v-model="scope.row.optional"></el-switch>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <el-tooltip placement="top" :content="$t('types.tips.omitempty')">
            {{ $t("types.field.omitempty") }}
          </el-tooltip>
        </template>
        <template #default="scope">
          <el-switch v-model="scope.row.omitempty"></el-switch>
        </template>
      </el-table-column>
      <el-table-column :label="$t('types.field.delete')">
        <template #default="scope">
          <el-button size="small" type="danger" @click="deleteField(scope.row.name)">{{
              $t("common.delete")
            }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script setup>
import {useStore} from "vuex";

const props = defineProps(["type"])
const store = useStore();

console.log(props.type)

function deleteType() {
  store.commit("deleteType", props.type.name)
}

function addField() {
  if (props.type.fields === null) {
    props.type.fields = []
  }
  props.type.fields.push({
    name: "",
    type: "",
    optional: false,
    omitempty: false
  })
}

function deleteField(name) {
  for (let i = 0; i < props.type.fields.length; i++) {
    if (props.type.fields[i].name === name) {
      props.type.fields.splice(i, 1)
      return
    }
  }
}
</script>
<style>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>