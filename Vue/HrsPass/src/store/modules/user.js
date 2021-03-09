import { login, getUserInfo, getUserDetailById } from '@/api/user'
import { getToken, removeToken, setToken, setTimeStamp } from '@/utils/auth'
const state = {
  // 初始化从缓存中读取token
  token: getToken(),
  // 用户数据信息
  userInfo: {}
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
  },
  // 设置用户信息
  setUserInfo(state, res) {
    state.userInfo = { ...res }
  },
  // 删除用户数据
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    // 调用登录api接口
    const res = await login(data)
    // 为true 登录成功
    context.commit('setToken', res)
    // set timestamp
    setTimeStamp()
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    // 获取用户信息后，再获取详情
    const baseInfo = await getUserDetailById(result.userId)
    const res = { ...result, ...baseInfo }
    context.commit('setUserInfo', res)
    return result // 以后做权限使用
  },
  // 退出功能
  logout(context) {
    // delete token
    context.commit('removeToken')
    // delete userinfo
    context.commit('removeUserInfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
