import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'; // ✅ Import Global CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

// Initialize AOS after mounting the app
app.mount('#app');

AOS.init();
