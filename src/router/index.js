import { createRouter, createWebHistory } from 'vue-router'
import header from '../components/Home/Header.vue'
import home from '../components/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/header',
    name: 'header',
    component: header
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
