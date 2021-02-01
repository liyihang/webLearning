import axios from "axios";
export default {
  namespaced: true,
  state: {
    category: [],
    currentCategory: ""
  },
  mutations: {
    updateCategory(state, payload) {
      state.category = payload;
    },
    updateCurrentCategory(state, payload) {
      state.currentCategory = payload;
    }
  },
  actions: {
    async getCategory(context) {
      const {
        data: {
          data: { channels }
        }
      } = await axios.get("http://ttapi.research.itcast.cn/app/v1_0/channels");
      context.commit("updateCategory", channels);
      context.commit("updateCurrentCategory", channels[0].id);
    }
  }
};
