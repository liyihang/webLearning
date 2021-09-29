import skeleton from './skeleton.vue'
import more from './more.vue'
export default {
  install (app) {
    app.component(skeleton.name, skeleton)
    app.component(more.name, more)
  }
}
