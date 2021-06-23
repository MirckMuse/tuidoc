import {createApp} from 'vue'
import App from './App.vue'
import TUI from '../packages/index'
import './styles/tailwindcss.scss'

createApp(App)
  .use(TUI)
  .mount('#app')
