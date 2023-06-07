import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '@/data.json'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: () => import('../views/ThreadShowView.vue'),
      props: true,
      beforeEnter (to, from, next) {
        // check if thread exists
        const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
        // if exists continue
        if (threadExists) {
          return next()
        } else {
          next({
            name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') },
            // preserve existing query and hash
            query: to.query,
            hash: to.hash
          })
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
