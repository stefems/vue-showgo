// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppRoot from './AppRoot'
import router from './router'

Vue.config.productionTip = false

const state = {logged_in: false, user: {}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: state,
  template: '<AppRoot/>',
  components: { AppRoot }
})
