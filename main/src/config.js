export default {
    subApps: [
      {
        name: 'app-vue3',
        entry: '//localhost:7001',
        container: '#sub-container',
        activeRule: '/app/app-vue3',
      },
      {
        name: 'app-vue2',
        entry: '//localhost:7002',
        container: '#sub-container',
        activeRule: '/app/app-vue2',
      }
    ]
}