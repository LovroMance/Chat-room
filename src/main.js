import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import pinia from '@/stores/index'
import '@/assets/styles/common.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

