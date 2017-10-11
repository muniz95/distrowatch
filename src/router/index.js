import Vue from 'vue'
import Router from 'vue-router'

import Distro from '@/views/Distro'
import FAQ from '@/views/FAQ'
import Glossary from '@/views/Glossary'
import Headlines from '@/views/Headlines'
import Home from '@/views/Home'
import Packages from '@/views/Packages'
import PackageManagement from '@/views/PackageManagement'
import Weekly from '@/views/Weekly'

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
    },
    {
      path: '/package-management',
      name: 'PackageManagement',
      component: PackageManagement
    },
    {
      path: '/glossary',
      name: 'Glossary',
      component: Glossary
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    }
  ]
})
