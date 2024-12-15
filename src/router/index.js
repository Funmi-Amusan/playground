import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import ListMeals from '@/views/ListMeals.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/letter/:letter',
    name: 'byletter',
    component: ListMeals
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router