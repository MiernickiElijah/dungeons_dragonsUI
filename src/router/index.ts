import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PlayerView from '../views/PlayerView.vue'
import CharacterView from '../views/CharacterView.vue'
import { componentsPlugin } from 'bootstrap-vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'player',
    component: PlayerView
  },
  {
    path: '/Character',
    name: 'Character',
    component: CharacterView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
