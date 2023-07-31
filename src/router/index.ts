import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
      meta: {
        layout: 'landing'
      }
    },
    {
      path: '/dashbroad',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: {
        layout: 'dashbroad'
      }
    }
  ]
})

export default router
