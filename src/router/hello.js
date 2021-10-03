export default [
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
]
