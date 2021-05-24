import { topCategory } from '@/api/constants'
import { findHeadCategory } from '@/api/home'

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
      console.log(results)
      commit('setCategory', results)
    }
  }
}
