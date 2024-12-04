<script>
import { registerMicroApps, start } from 'qiankun'

export default {
    mounted() {
        const apps = [
            {
                name: 'micro-app-goods',
                entry: '//localhost:7001',
                container: '#micro-app',
                activeRule: '#/micro-app-goods'
            },
            {
                name: 'micro-app-order',
                entry: '//localhost:7002',
                container: '#micro-app',
                activeRule: '#/micro-app-order'
            }
        ]
        registerMicroApps(apps) // 注册
        start() // 启动
    }
}
</script>