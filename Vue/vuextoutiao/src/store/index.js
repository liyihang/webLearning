import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header'
import news from './modules/news'
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
    news
  },
  getters: {
    category: state => state.header.category,
    currentCategory: state => state.header.currentCategory,
    currentList: (state) =>
      state.news.allData[state.header.currentCategory] || []
  }
})
