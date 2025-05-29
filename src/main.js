import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the main CSS file
import './assets/css/styles.css'

// Create and mount the Vue app
const app = createApp(App)

// Use Vue Router
app.use(router)

// Mount the app
app.mount('#app')

console.log('Dark mode is the default and only theme')
