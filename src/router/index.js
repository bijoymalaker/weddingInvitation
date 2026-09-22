import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../pages/FrontPage.vue'
import PorinoyPage from '../pages/PorinoyPage.vue'
import MainPage from '../pages/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPage
    },
    {
      path: '/porinoy',
      name: 'porinoy',
      component: PorinoyPage
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage
    }
  ]
})

export default router
