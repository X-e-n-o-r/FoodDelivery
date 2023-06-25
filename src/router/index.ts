import { createRouter, createWebHistory } from 'vue-router'
import FoodRestaurants from '@/views/FoodRestaurants.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FoodRestaurants,
    },
    {
      path: '/menu/:id',
      name: 'menu',
      component: () => import('@/views/FoodMenu.vue')
    },
  ]
})

export default router