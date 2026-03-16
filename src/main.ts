import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './app/i18n'
import { vuetify } from './app/vuetify'
import './styles/global.scss'

createApp(App).use(i18n).use(vuetify).mount('#app')
