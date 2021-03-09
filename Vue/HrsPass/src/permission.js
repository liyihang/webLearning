import router from './router'
import store from './store'
import nprogress from 'nprogress'
import 'nprogress/nprogress'

// 设置白名单
const whiteList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  nprogress.start()
  // 判断是否有
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 如果不存在userId  重新获取数据
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
      }
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
