import axios from 'axios'
export default {
  namespaced: true,
  state: {
    allData: {}
  },
  mutations: {
    updateList(state, { currentCategory, list }) {
      state.allData = { ...state.allData, [currentCategory]: list }
    }
  },
  actions: {
    // 获取新闻列表数据
    // 分类id只能通过传递的方式传进来
    async getNewList(context, catId) {
      const {
        data: {
          data: { results }
        }
      } = await axios.get(
        `http://ttapi.research.itcast.cn/app/v1_1/articles?channel_id=${catId}&timestamp=${Date.now()}&with_top=1`
      )
      // results是新闻列表
      context.commit('updateList', { currentCategory: catId, list: results })
    }
  }
}
