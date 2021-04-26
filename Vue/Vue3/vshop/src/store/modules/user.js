export default {
  namespaced: true,
  state: () => {
    return {
      profile: {
        id: '',
        nickname: '',
        avatar: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    // update user info when login
    setUser (state, profile) {
      state.profile = profile
    }
  }
}
