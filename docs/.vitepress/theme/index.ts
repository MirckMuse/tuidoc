// .vitepress/theme/index.js
import 'tailwindcss/tailwind.css'
import '../../../src/styles/tailwindcss.scss'
import DefaultTheme from 'vitepress/dist/client/theme-default'
import Case from '../components/case.vue'
import {Theme} from 'vitepress'
import TUI from '../../../packages'

const theme: Theme = {

  ...DefaultTheme,

  enhanceApp({app}) {
    app.use(TUI)
    app.component(Case.name, Case)
  }
}
export default theme