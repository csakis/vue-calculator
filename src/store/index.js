import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: [
      {
        width: 2,
        color: "orange",
        content: "1"
      },
      {
        width: 3,
        color: "orange",
        content: "2"
      },
      {
        width: 1,
        color: "orange",
        content: "3"
      },
      {
        width: 1,
        color: "orange",
        content: "4"
      },
      {
        width: 1,
        color: "orange",
        content: "5"
      },
      {
        width: 1,
        color: "orange",
        content: "6"
      },
      {
        width: 1,
        color: "orange",
        content: "7"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
