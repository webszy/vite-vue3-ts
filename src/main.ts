import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import './styles/main.css'
import './styles/reset.css'
const MODE = import.meta.env.MODE
if (MODE === 'development') {
  // eslint-disable-next-line no-console
  console.log('routes', routes)
}

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
