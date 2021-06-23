import button from './src/index.vue'

button.install = app => {
  app.component(button.name, button)
}

export default button