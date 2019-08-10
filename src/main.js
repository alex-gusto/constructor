import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './plugins/axios';
import store from './store'
import router from './router'
import './filters'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app');
