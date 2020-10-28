<<<<<<< HEAD
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
=======
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
>>>>>>> master

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
