import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    num: 9527,
  },
  mutations: {
    add(state) {
      state.num + 1;
    },
  },
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
