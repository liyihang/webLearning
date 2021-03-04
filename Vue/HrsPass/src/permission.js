import router from './router'
import store from './store'
import nprogress from 'nprogress'
import 'nprogress/nprogress'

// 设置白名单
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  nprogress.start()
  // 判断是否有
  if (store.getters.token) {
    console.log('123123123')

    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  nprogress.done()
})
router.afterEach(() => {
  nprogress.done()
})
