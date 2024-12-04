// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由器
import './assets/styles/global.css'; // 引入全局样式文件

const app = createApp(App);
app.use(router); // 使用路由器
app.mount('#app');