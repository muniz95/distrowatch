import Vue from 'vue'
import Router from 'vue-router'
import Distro from '@/views/Distro'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/distro',
      name: 'Distro',
      component: Distro
    }
  ]
})
