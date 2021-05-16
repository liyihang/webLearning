import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// if (process.env.NODE_ENV === 'development') {
//   // if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) { // window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
//   // }
//   App.config.devtools = true
// }
import 'normalize.css'
import '@/assets/styles/common.less'
createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
