import Vue from 'vue'
import './plugins'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/styles/index.scss'
import settings from './settings'
import Storage from 'vue-ls'

// 引入公用组件
import '@/components'

// 权限控制
import './permission'
Vue.use(Storage, settings.storageOptions)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
