import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routerArray } from './routerArray'

const routes: Array<RouteRecordRaw> = routerArray

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
