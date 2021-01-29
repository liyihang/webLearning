export default {
  namespace: true,
  state: {
    category: [],
    currentCategory: ''
  },
  mutations: {
    updateCategory (state, payload) {
      state.category = payload
    },
    updateCurrentCategory (state, payload) {
      state.currentCategory = payload
    }
  },
  actions: {}
}
