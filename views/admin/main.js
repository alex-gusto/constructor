import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
// import './plugins/element-ui'
import store from './store'
import router from './router'
import './filters'
import './assets/scss/main.scss'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
