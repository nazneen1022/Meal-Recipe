import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductDetails from "@/views/ProductDetails.vue"
import Random from "@/views/Random.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  
  {
    path: '/Products/:category',
    name: 'Products',
    component: Home
  },
  {
    path: '/Products',
    name: 'Products',
    component: Home
  },
  {
    path: '/Products/:category/:idMeal',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/Random',
    name: 'Random',
    component: Random
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
