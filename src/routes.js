// Default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Modals from '@/pages/Modals'
import LoginReg from '@/pages/LoginReg'

// Routering
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/modals',
      name: 'modals',
      component: Modals
    },
    {
      path: '/login-reg',
      name: 'login-reg',
      component: LoginReg
    }
  ]
})