<template>
  <el-button type="primary" @click="AddField">{{ $t("types.addField") }}</el-button>
  <el-table :data="props.fields">
    <el-table-column :label="$t('types.field.name')">
      <template #default="scope">
        <el-input v-model="scope.row.name"/>
      </template>
    </el-table-column>
    <el-table-column :label="$t('types.field.type')">
      <template #default="scope">
        <el-input v-model="scope.row.type"/>
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
    <el-table-column :label="$t('common.delete')">
      <template #default="scope">
        <el-button size="small" type="danger" @click="DeleteField(scope.row.name)">{{ $t("common.delete") }}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup>
const props = defineProps(["fields"])

function AddField() {
  props.fields.push({
    name: "",
    type: "",
    optional: false,
    omitempty: false,
  })
}

function DeleteField(name) {
  for (let i = 0; i < props.fields.length; i++) {
    if (props.fields[i].name === name) {
      props.fields.splice(i, 1)
      return
    }
  }
}
</script>