// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppRoot from './AppRoot'
import router from './router'

Vue.config.productionTip = false

const user = {logged_in: false}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: user,
  template: '<AppRoot/>',
  components: { AppRoot }
})
