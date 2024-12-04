// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'; // 导入你的路由配置
 
const router = createRouter({
  history: createWebHistory(), // 使用HTML5历史记录模式
  routes, // 路由配置数组
});

export default router;