<template>
  <br/>
  <el-card>
    <template #header>
      <div class="header-container">
        {{ props.group.name }}
        <el-button type="danger" @click="DeleteGroup(props.group.name)">{{ $t("common.delete") }}</el-button>
      </div>
    </template>
    <el-form label-width="auto">
      <el-form-item label="name">
        <el-input v-model="props.group.name"></el-input>
      </el-form-item>
      <el-form-item label="path">
        <el-input v-model="props.group.path"></el-input>
      </el-form-item>
      <el-form-item :label="$t('app.menu.middleware')">
        <el-select v-model="props.group.middlewares" multiple :placeholder="$t('methods.selectMiddleware')">
          <el-option v-for="item in store.state.workspaceConfig.middlewares" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="AddMethod">{{ $t("methods.addMethod") }}</el-button>
    <el-button type="primary" @click="AddGroup">{{ $t("methods.addGroup") }}</el-button>
    <br/>
    <br/>
    <el-collapse>
      <div v-for="item in props.group.children">
        <div v-if="item.type === 'method'">
          <el-collapse-item :title="item.path">
            <MethodDescription :method="item" :before="nextBefore"/>
          </el-collapse-item>
        </div>
        <div v-if="item.type === 'group'">
          <el-collapse-item :title="item.name">
            <GroupDescription :group="item" :before="nextBefore"/>
          </el-collapse-item>
        </div>
      </div>
    </el-collapse>
  </el-card>
</template>
<script setup>
import MethodDescription from "./MethodDescription.vue";
import {useStore} from "vuex";

const props = defineProps(["group", "before"])
const store = useStore()

var nextBefore = Object.assign([], props.before)
nextBefore.push(props.group.name)

function AddMethod() {
  props.group.children.push(
      {
        type: "method",
        path: "",
        method: "GET",
        req: [],
        resp: []
      }
  )
}

function AddGroup() {
  props.group.children.push({
    type: "group",
    name: "",
    path: "",
    children: [],
    middlewares: []
  })
}

function DeleteGroup(name) {
  let current = store.state.workspaceConfig.methods;
  let pathIndex = 0;
  if (props.before.length >= 1) {
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
  }
  for (let i = 0; i < current.length; i++) {
    if (current[i].type === "group") {
      if (current[i].name === name) {
        current.splice(i, 1);
        break;
      }
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