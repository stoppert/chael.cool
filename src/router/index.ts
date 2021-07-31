import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ClipPage from '../views/ClipPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:clip',
    name: 'clippage',
    component: ClipPage,
    props: true,
  },
  {
    path: '/sitemap',
    name: 'sitemap',
    component: () => import(/* webpackChunkName: "Sitemap" */ '../views/Sitemap.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
