import './assets/main.css'

import { createApp } from 'vue'
import Tres from '@/tresjs/core'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from "aos"
import "aos/dist/aos.css"
AOS.init()
const app = createApp(App)
app.use(Tres)
app.use(createPinia())
app.use(router)

app.mount('#app')
