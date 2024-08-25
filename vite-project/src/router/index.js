import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '@/views/TeamView.vue'
import SocialView from '@/views/SocialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TeamView
    },
    {
      path: '/social',
      name: 'social',
      component: SocialView
    },
  ]
})

export default router
