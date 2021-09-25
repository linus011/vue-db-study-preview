import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

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
  {
    path: '/hello',
    name: 'helloIndex',
    redirect: '/hello/home',
    component: () => import('@/views/hello/index.vue'),
    children: [
      {
        path: 'home',
        name: 'helloHome',
        component: () => import('@/views/hello/Home.vue'),
      },
      {
        path: 'about',
        name: 'helloAbout',
        component: () => import('@/views/hello/About.vue'),
      },
    ],
  },
  {
    path: '/guide',
    name: 'guide',
    component: {
      render(c) { return c('router-view') },
    },
    children: [
      {
        path: 'index',
        name: 'guideIndex',
        component: () => import('@/views/guide/index.vue'),
      },
      {
        path: 'form',
        name: 'guideForm',
        component: () => import('@/views/guide/form.vue'),
      },
      {
        path: 'list',
        name: 'guideList',
        component: () => import('@/views/guide/list.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
