<template>
    <div id="sub-container"></div>
</template>

<script>
import { start } from 'qiankun'
import { loadApp } from '../utils/qiankun'
export default {
    mounted() {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true
        loadApp()
        start({
          sandbox: {
            experimentalStyleIsolation: true // 样式隔离
          }
        })
      }
    }
}
</script>
  