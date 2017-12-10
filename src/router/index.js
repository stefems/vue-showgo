import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Secret from '@/components/Secret'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/secret',
      name: 'Secret',
      component: Secret
    }
  ]
})
