// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Idealogy from '../components/Gallery/Idealogy.vue'
import Videojs from '../components/Gallery/Videojs.vue'
import Home from '../Home.vue'
import Privacypolicy from '../components/Resources/Privacypolicy.vue'
import Careers from '../components/Company/Careers.vue'

const routes = [
    { path: '/', component: Home },
  { path: '/idealogy', component: Idealogy },
  { path: '/Videojs', component: Videojs },
  { path: '/privacy_policy', component: Privacypolicy },
  { path: '/careers', component: Careers },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
