import Skeleton from './skeleton.vue'
import More from './more.vue'
import Bread from './bread.vue'
export default {
  install (app) {
    app.component(Skeleton.name, Skeleton)
    app.component(More.name, More)
    app.component(Bread.name, Bread)
  }
}
