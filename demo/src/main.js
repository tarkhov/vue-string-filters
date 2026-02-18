import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import { VueStringFilters } from './../../dist/vue-string-filters'
import App from './App.vue'

const app = createApp(App)
app.use(VueStringFilters)
app.mount('#app')