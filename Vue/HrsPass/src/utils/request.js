import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
import { getTimeStamp } from '@/utils/auth'
// timeout
const timeout = 3600
const service = axios.create({
  // 执行 yarn dev -->env.development->/api -->触发vue.config.js的Proxy
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      if (isCheckTimeout()) {
        // 如果它为true表示 过期了
        // token没用了 因为超时了
        store.dispatch('user/logout') // 登出操作
        // 跳转到登录页
        router.push('/login')
        return Promise.reject(new Error('token超时了'))
      }
      config.headers['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config
  },
  (error) => {}
) // 请求拦截器
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 成功 返回数据
    if (success) {
      return data
    } else {
      // 返回错误信息，返回promise.reject
      Message.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // error 信息 里面 response的对象
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 10002
    ) {
      // 当等于10002的时候 表示 后端告诉我token超时了
      store.dispatch('user/logout') // 登出action 删除token
      router.push('/login')
    } else {
      Message.error(error.message) // 提示错误信息
    }
    return Promise.reject(error)
  }
)

// set check whether timeout function
export function isCheckTimeout() {
  var currentTime = Date.now()
  var timestamp = getTimeStamp()
  return (currentTime - timestamp) / 1000 > timeout
}
export default service // 导出axios实例
