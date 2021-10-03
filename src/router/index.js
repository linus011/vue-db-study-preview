import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from './hello'
import guide from './guide'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/hello/home',
  },
  {
    path: '*',
    component: () => import('@/views/404.vue'),
  },
  ...hello,
  ...guide,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
