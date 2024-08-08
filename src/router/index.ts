import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BoardRoutes from '@/board/router/BoardRoutes'
import HomeRoutes from '@/home/router/HomeRoutes'
import AccountRoutes from '@/account/router/AccountRoutes'
import AuthenticationRoutes from '@/authentication/router/AuthenticationRoutes'

const routes: Array<RouteRecordRaw> = [
  ...BoardRoutes,
  ...HomeRoutes,
  ...AccountRoutes,
  ...AuthenticationRoutes
]  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
