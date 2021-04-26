import { createStore } from 'vuex'
// import user module data
import user from './modules/user'
// import cart module data
import cart from './modules/cart'
// import module of persistedstate
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    cart
  },
  // config vuex-persistedstate plugin
  plugins: [
    createPersistedstate({
      key: 'vshop-client',
      paths: ['user', 'cart']
    })
  ]
})
