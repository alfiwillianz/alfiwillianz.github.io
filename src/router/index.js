import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectPage from '../views/ProjectPage.vue'
import AchievementsPage from '../views/AchievementsPage.vue'
import AboutPage from '../views/AboutPage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage
  },
  {
    path: '/achievements',
    name: 'achievements',
    component: AchievementsPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
