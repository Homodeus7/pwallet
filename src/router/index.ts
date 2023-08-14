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
      path: '/nft',
      name: 'nft',
      component: () => import('@/views/NftView.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/playw',
      name: 'playw',
      component: () => import('@/views/PlayWView.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('@/views/PlayWView.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/dashboard/LoginView.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/components/dashboard/RegistrationView.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/views/ProjectOverview.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/market-masters',
      name: 'market-masters',
      component: () => import('@/components/dashboard/MarketMasters.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/walking-mode',
      name: 'walking-mode',
      component: () => import('@/components/dashboard/WalkingMode.vue'),
      meta: {
        layout: 'dashboard'
      }
    },
    {
      path: '/event-battle',
      name: 'event-battle',
      component: () => import('@/components/dashboard/EventBattle.vue'),
      meta: {
        layout: 'dashboard'
      }
    }
  ]
})

export default router
