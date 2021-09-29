import Skeleton from './skeleton.vue'
import More from './more.vue'
export default {
  install (app) {
    app.component(Skeleton.name, Skeleton)
    app.component(More.name, More)
  }
}
