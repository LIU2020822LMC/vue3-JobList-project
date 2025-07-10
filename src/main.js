import { createApp } from 'vue'
import './style.css'
import router from "./router/index.js"
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(router).use(Toast);
app.mount('#app')
