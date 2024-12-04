//router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes = [
    {
        path: '/app/app-vue2/counter',
        name: 'counter',
        component: () => import('../components/CounterPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(
      qiankunWindow.__POWERED_BY_QIANKUN__
        ? '/app/app-vue2/'
        : '/'
    ),
    routes
})

export default router;
