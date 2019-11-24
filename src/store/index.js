import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: [
      [
        {
          width: 2,
          color: "grey",
          content: "C"
        },
        {
          width: 1,
          color: "darkgrey",
          content: "CE"
        },
        {
          width: 1,
          color: "pink darken-1",
          content: "/"
        }
      ],
      [
        {
          width: 1,
          color: "amber darken-1",
          content: "7"
        },
        {
          width: 1,
          color: "amber darken-1",
          content: "8"
        },
        {
          width: 1,
          color: "amber darken-1",
          content: "9"
        },
        {
          width: 1,
          color: "pink darken-1",
          content: "*"
        }
      ],
      [
        {
          width: 1,
          color: "amber darken-1",
          content: "4"
        },
        {
          width: 1,
          color: "amber darken-1",
          content: "5"
        },
        {
          width: 1,
          color: "amber darken-1",
          content: "6"
        },
        {
          width: 1,
          color: "pink darken-1",
          content: "-"
        }
      ],
      [
        {
          width: 1,
          color: "amber darken-1",
          content: "1"
        },
        {
          width: 1,
          color: "amber darken-1",
          content: "2"
        },
        {
          width: 1,
          color: "amber darken-1",
          content: "3"
        },
        {
          width: 1,
          color: "pink darken-1",
          content: "+"
        }
      ],
      [
        {
          width: 2,
          color: "amber darken-1",
          content: "0"
        },
        {
          width: 1,
          color: "amber darken-1",
          content: "."
        },

        {
          width: 1,
          color: "pink darken-1",
          content: "="
        }
      ]
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
