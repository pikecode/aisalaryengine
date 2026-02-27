import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectLibrary.vue')
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: () => import('@/views/Workshop.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('@/views/Community.vue')
    },
    {
      path: '/membership',
      name: 'membership',
      component: () => import('@/views/Membership.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
