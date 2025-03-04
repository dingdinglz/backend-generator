
export const routes = [
  {path: '/' , name: 'home' , component: ()=>import('../pages/index.vue')},
  {path: '/setting', name: 'setting', component: ()=>import('../pages/setting.vue')},
]