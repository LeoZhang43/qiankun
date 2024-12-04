<template>
    <div id="sub-container"></div>
</template>

<script>
import { start } from 'qiankun'
import { registerApps } from '../utils/qiankun'
export default {
    mounted() {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true
        registerApps()
        start({
          sandbox: {
            strictStyleIsolation: true, // 样式隔离
            experimentalStyleIsolation: true, // 实验性样式隔离（可选）
            sandbox: true, // 启用沙箱
          }
        })
      }
    }
}
</script>
  