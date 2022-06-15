import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PlayerView from '../views/PlayerView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'player',
    component: PlayerView
  },
  {
    path: '/characters',
    name: 'characters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CharactersView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
