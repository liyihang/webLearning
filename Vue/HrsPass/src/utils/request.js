import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  // 执行 yarn dev -->env.development->/api -->触发vue.config.js的Proxy
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use() // 请求拦截器
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log(response)
    const { success, message, data } = response.data
    // 成功 返回数据
    if (success) {
      return data
    } else {
      // 返回错误信息，返回promise.reject
      Message.error(message)
      console.log('到这了')
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 提示错误
    Message.error(error.message)
    // 返回执行错误，进入catch
    return Promise.reject(error)
  }
)
export default service // 导出axios实例
