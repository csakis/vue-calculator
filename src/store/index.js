import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: "0",
    display: "0"
  },
  mutations: {
    clickAction(state, payload) {
      return (state.result += payload.value);
    }
  },
  actions: {
    clickAction: ({ commit }, payload) => {
      commit("clickAction", payload);
    }
  },
  modules: {}
});
