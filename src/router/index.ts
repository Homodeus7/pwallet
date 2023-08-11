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
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        layout: 'landing'
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/RegistrationView.vue'),
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
      path: '/project',
      name: 'project',
      component: () => import('@/views/ProjectOverview.vue'),
      meta: {
        layout: 'dashboard'
      }
    }
  ]
})

export default router
