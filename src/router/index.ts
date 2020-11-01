import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductDetails from "@/views/ProductDetails.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/Products',
    name: 'Products',
    component: Home
  },
  {
    path: '/Products/:idMeal',
    name: 'ProductDetails',
    component: ProductDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
