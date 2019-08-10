import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install() {
    if (this.installed) return
    this.installed = true

    Object.defineProperty(Vue.prototype, '$axios', {
      value: axios.create({
        baseURL: process.env.VUE_APP_API_PREFIX,
      }),
    })
  },
})
