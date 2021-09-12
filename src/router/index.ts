import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/webpayment',
    name: 'WebPayment',
    //component: WebPayment
    component: () => import(/* webpackChunkName: "about" */ '../views/WebPayment.vue')
  },
  {
    path: '/useraccount',
    name: 'UserAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserAccount.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
