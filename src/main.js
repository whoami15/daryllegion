import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Now from '@/views/Now.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/now', name: 'Now', component: Now},
  ]
})

createApp(App)
.use(router)
.mount('#app')
