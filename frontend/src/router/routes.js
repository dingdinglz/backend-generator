export const routes = [
    {path: '/', name: 'index', component: () => import('../pages/index.vue')},
    {path: '/setting', name: 'setting', component: () => import('../pages/setting.vue')},
    {path: '/middleware', name: 'middleware', component: () => import('../pages/middleware.vue')},
    {path: '/types', name: 'types', component: () => import('../pages/types.vue')},
    {path: '/methods', name: 'methods', component: () => import('../pages/methods.vue')},
]