const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token, // 建立子模块的快捷访问
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.userInfo.username,
  userId: (state) => state.user.userInfo.userId,
  staffPhoto: (state) => state.user.userInfo.staffPhoto
}
export default getters
