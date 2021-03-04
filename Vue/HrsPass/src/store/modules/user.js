import { login } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
const state = {
  // 初始化从缓存中读取token
  token: getToken()
}
const mutations = {
  setToken(state, token) {
    // state 设置token  同时同步给缓存
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    // 移除token，同时把缓存中的token也给清除
    state.token = null
    removeToken()
  }
}
const actions = {
  async login(context, data) {
    // 调用登录api接口
    const res = await login(data)
    // 为true 登录成功
    if (res.data.success) {
      context.commit('setToken', res.data.data)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
