export const routes = [
    {path: '/', name: 'index', component: () => import('../pages/index.vue')},
    {path: '/setting', name: 'setting', component: () => import('../pages/setting.vue')},
]