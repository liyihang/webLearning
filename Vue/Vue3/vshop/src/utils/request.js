// 1、 init axios
// 2、request interception take with token
// 3、response interception  get data
// 4、define a function to sent axios request

import axios from 'axios'
import store from '@/store'
import router from '@/router'
// axios instance
const instance = axios.create({
  // baseURL: 'http://pcapi-xiaotuxian-front.itheima.net/',
  timeout: 5000
})
// request interception
instance.interceptors.request.use(
  config => {
    // 1、get token
    const { token } = store.state.user.profile
    // 2、set request token
    if (config) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  //   error catch
  e => Promise.reject(e)
)
// response interception
instance.interceptors.response.use(
  res => res.data,
  e => {
    if (e.response && e.response.status === 401) {
      // get url params
      const redirectUrl = encodeURIComponent(router.currentRoute.value.fullPath)
      // redirect
      router.push({ path: '/login?redirectUrl=' + redirectUrl })
    }
    return Promise.reject(e)
  }
)
export default (url, method, data) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}
