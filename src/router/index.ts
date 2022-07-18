import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/views/Index.vue'),
    },
  ],
})
