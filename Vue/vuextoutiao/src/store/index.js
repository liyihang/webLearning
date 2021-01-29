import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header'
import content from './modules/content'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    header,
    content
  },
  getters: {
    category: state => state.header.category,
    currentCategory: state => state.header.currentCategory
  }
})
