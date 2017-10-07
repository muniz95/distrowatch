import Vue from 'vue'
import Router from 'vue-router'
import Distro from '@/views/Distro'
import Headlines from '@/views/Headlines'
import Home from '@/views/Home'
import Weekly from '@/views/Weekly'
import Packages from '@/views/Packages'

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
    },
    {
      path: '/headlines',
      name: 'Headlines',
      component: Headlines
    },
    {
      path: '/weekly',
      name: 'Weekly',
      component: Weekly
    },
    {
      path: '/packages',
      name: 'Packages',
      component: Packages
    }
  ]
})
