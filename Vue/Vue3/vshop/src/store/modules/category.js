import { topCategory } from '@/api/constants'
import { findHeadCategory } from '@/api/category'

export default {
  namespaced: true,
  state: () => {
    // return  data
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // register mutatioms
  mutations: {
    /**
     *
     * @param {*} state   the state should be first param
     * @param {*} headCategory      the second param payload
     */
    setCategory (state, res) {
      state.list = res
    },
    show (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },
    hide (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }
  },
  // register action
  actions: {
    /**
     *
     * @param {*} param
     */
    async getCategory ({ commit }) {
      const { results } = await findHeadCategory()
      results.forEach(item => {
        item.open = false
      })

      commit('setCategory', results)
    }
  }
}
