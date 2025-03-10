import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {i18n} from "./i18n/i18n.js";
import {createRouter, createWebHashHistory} from "vue-router";
import {routes} from "./router/routes.js";
import {store} from "./store/store.js";

const app = createApp(App)

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
app.use(router)
app.use(store)
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')
