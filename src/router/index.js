// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Idealogy from '../components/Gallery/Idealogy.vue'
import Videojs from '../components/Gallery/Videojs.vue'
import Home from '../Home.vue'
import Privacypolicy from '../components/Resources/Privacypolicy.vue'
import TermsOfService from '../components/Resources/TermsOfService.vue'
import Careers from '../components/Company/Careers.vue'
import IdealogyGallery from '../components/Ideology/IdealogyGallery.vue'

const routes = [
    { path: '/', component: Home },
  { path: '/idealogytry', component: Idealogy },
  { path: '/idealogygallery', component: IdealogyGallery },
  { path: '/Videojs', component: Videojs },
  { path: '/privacy_policy', component: Privacypolicy },
  { path: '/careers', component: Careers },
  { path: '/terms_of_service', component: TermsOfService },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
