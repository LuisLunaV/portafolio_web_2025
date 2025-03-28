import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//Este es el orden correcto de manejar los servicios
app.use(router)
app.use(createPinia())
app.mount('#app')
