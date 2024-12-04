//App.vue
<template>
  <div id="app">
    <button @click="routerPush()">跳转到counter页面</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import router from '../src/router';

export default {
    name: 'App',
    setup() {
      const count = ref(0);
  
      const increment = () => {
        count.value++;
      };
  
      const decrement = () => {
        count.value--;
      };

      onMounted(() => {
        if (!window.variable) {
          window.variable = "";
        }
        window.variable = 'parameter';
        console.log('window.variable', window.variable);
      });

      const routerPush = () => {
        router.push('/counter');
      }
  
      return {
        count,
        increment,
        decrement,
        routerPush
      };
    }
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
