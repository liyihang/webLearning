import skeleton from './skeleton.vue'
export default {
  install (app) {
    app.component(skeleton.name, skeleton)
  }
}
