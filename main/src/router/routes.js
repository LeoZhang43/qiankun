const routes = [
    {
      path: '',
      redirect: { name: 'home' },
      meta: { title: '首页' },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/home/index.vue')
        },
        {
          path: '/app/app-vue3/',
          name: 'app-vue3',
          meta: {},
          component: () => import('../components/SubContainer.vue')
        },
        {
          path: '/app/app-vue2/',
          name: 'app-vue2',
          meta: {},
          component: () => import('../components/SubContainer.vue')
        }
      ]
    }
]

export default routes
  