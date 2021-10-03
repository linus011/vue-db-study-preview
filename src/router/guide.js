export default [
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
