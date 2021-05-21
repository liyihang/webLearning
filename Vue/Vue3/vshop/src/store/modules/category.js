import { topCategory } from '@/api/constants'
import { findHeadCategory } from '@/api/home'

export default {
  namespaced: true,
  state: {
    list: topCategory.map(item => ({ name: item }))
  },
  mutations: {
    setCategory (state, headCategory) {
      state.list = headCategory
    }
  },
  actions: {
    async getCategory ({ commit }) {
      const { result } = await findHeadCategory()
      commit('setCategory', result)
    }
  }
}
