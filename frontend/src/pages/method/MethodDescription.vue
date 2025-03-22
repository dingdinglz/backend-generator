<template>
  <br/>
  <el-card>
    <template #header>
      <div class="header-container">
        {{ props.method.path }}
        <el-button type="danger" @click="DeleteMethod(props.method.path)">{{ $t("common.delete") }}</el-button>
      </div>
    </template>
    <el-form label-width="auto">
      <el-form-item label="path">
        <el-input v-model="props.method.path"></el-input>
      </el-form-item>
      <el-form-item label="method">
        <el-select v-model="props.method.method">
          <el-option label="GET" value="GET"></el-option>
          <el-option label="POST" value="POST"></el-option>
          <el-option label="PUT" value="PUT"></el-option>
          <el-option label="DELETE" value="DELETE"></el-option>
          <el-option label="PATCH" value="PATCH"></el-option>
          <el-option label="HEAD" value="HEAD"></el-option>
          <el-option label="OPTIONS" value="OPTIONS"></el-option>
          <el-option label="TRACE" value="TRACE"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-collapse>
      <el-collapse-item :title="$t('methods.req')">
        <FieldDescription :fields="props.method.req"/>
      </el-collapse-item>
      <el-collapse-item :title="$t('methods.resp')">
        <FieldDescription :fields="props.method.resp"/>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>
<script setup>
import FieldDescription from "./FieldDescription.vue";
import {useStore} from "vuex";

const props = defineProps(["method", "before"])
const store = useStore()

function DeleteMethod(path) {
  let current = store.state.workspaceConfig.methods;
  let pathIndex = 0;
  while (pathIndex < props.before.length) {
    const targetGroupName = props.before[pathIndex];
    let foundGroup = null;
    for (let j = 0; j < current.length; j++) {
      if (current[j].type === "group" && current[j].name === targetGroupName) {
        foundGroup = current[j];
        break;
      }
    }
    if (!foundGroup) {
      return;
    }
    current = foundGroup.children || [];
    pathIndex++;
  }
  for (let i = 0; i < current.length; i++) {
    if (current[i].path === path && current[i].type === "method") {
      current.splice(i, 1);
      break;
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