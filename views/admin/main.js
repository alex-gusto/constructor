import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import './plugins/element-ui'
import store from './store'
import router from './router'
import './filters'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
