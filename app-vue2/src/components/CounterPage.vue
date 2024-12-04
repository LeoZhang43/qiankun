//components/CounterPage.vue
<template>
    <div id="app">
      <h1>计数器</h1>
      <p>当前计数: {{ count }}</p>
      <button @click="increment">增加</button>
      <button @click="decrement">减少</button>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: 'CounterPage',
    setup() {
      const count = ref(0);
  
      const increment = () => {
        count.value++;
      };
  
      const decrement = () => {
        count.value--;
      };
  
      return {
        count,
        increment,
        decrement
      };
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
  
button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
}
</style>