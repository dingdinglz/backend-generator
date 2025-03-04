import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./route/route.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { i18n } from "./i18n/i18n.js";

const app = createApp(App)

const router = createRouter(
  {history: createWebHashHistory(),routes
  }
)

app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')