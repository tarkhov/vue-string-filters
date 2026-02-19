import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import { VueStringFilters } from './../../dist/vue-string-filters'
import App from './App.vue'

createApp(App).use(VueStringFilters).mount('#app')