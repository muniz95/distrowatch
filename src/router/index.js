import Vue from 'vue'
import Router from 'vue-router'

import Distro from '@/views/Distro'
import FAQ from '@/views/FAQ'
import Glossary from '@/views/Glossary'
import Headlines from '@/views/Headlines'
import Home from '@/views/Home'
import Packages from '@/views/Packages'
import MajorDistros from '@/views/MajorDistros'
import PackageManagement from '@/views/PackageManagement'
import Sitemap from '@/views/Sitemap'
import SubmitDistro from '@/views/SubmitDistro'
import Weekly from '@/views/Weekly'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/distro', name: 'Distro', component: Distro },
    { path: '/headlines', name: 'Headlines', component: Headlines },
    { path: '/weekly', name: 'Weekly', component: Weekly },
    { path: '/packages', name: 'Packages', component: Packages },
    { path: '/package-management', name: 'PackageManagement', component: PackageManagement },
    { path: '/glossary', name: 'Glossary', component: Glossary },
    { path: '/faq', name: 'FAQ', component: FAQ },
    { path: '/sitemap', name: 'Sitemap', component: Sitemap },
    { path: '/major', name: 'MajorDistros', component: MajorDistros },
    { path: '/submit', name: 'SubmitDistro', component: SubmitDistro }
  ]
})
