import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    num: 9527,
  },
  mutations: {
    add(state, payload) {
      state.num += payload;
    },
  },
  actions: {
    getAsync(ctx) {
      ctx.commit("add", 100);
    },
  },
  getters: {
    token: (state) => state.user.token,
    title: (state) => state.settings.title
  },
  modules: {
    user: {
      state: {
        token: "mkqwe123",
      },
      mutations:{
        updateToken(state){
          state.token="Sayhi"
        }
      }
    },
    settings: {
      state: {
        title: "Vuex modules usage",
      },
    },
  },
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
