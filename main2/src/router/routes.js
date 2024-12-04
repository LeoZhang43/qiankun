export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/layout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home.vue')
      }
    ]
  },
  {
    path: '/micro-app-*',
    component: () => import('../views/layout.vue')
  },
  {
    path: '/micro-app-goods/list',
    name: 'GoodsList',
    component: () => import('../views/goods/list.vue')
  }
]
