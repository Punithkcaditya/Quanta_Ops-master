// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Idealogy from '../components/Gallery/Idealogy.vue'
import Videojs from '../components/Gallery/Videojs.vue'
import Home from '../Home.vue'

const routes = [
    { path: '/', component: Home },
  { path: '/idealogy', component: Idealogy },
  { path: '/Videojs', component: Videojs },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
