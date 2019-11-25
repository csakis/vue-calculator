import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// const expression = new RegExp(/$\*|\/|\+|-/);
// const endsWithNumber = new RegExp(/$\d/);
export default new Vuex.Store({
  state: {
    result: "0",
    display: "10"
  },
  mutations: {
    clickAction(state, { value }) {
      switch (value) {
        case "0":
          state.result === "0" ? state.result : (state.result += "0");
          break;
        case "C":
          state.result = "0";
          state.display = "0";
          break;
        case "CE":
          if (state.result !== "0" && state.result.length >= 1) {
            if (state.result.length === 1) {
              //  if only one number left
              state.result = "0";
              break;
            }
            state.result = state.result.substr(0, state.result.length - 1);
          }
          break;
        case ".":
          if (state.result.includes(".")) {
            break; //if we already have a decimal point don't do anytihng
          }
          state.result === "0" ? (state.result = "0.") : (state.result += ".");
          break;
        case "=":
          try {
            state.display = eval(state.result);
          } catch {
            state.display = "ERR";
          }
          state.result = "0";
          break;

        default:
          state.result === "0"
            ? (state.result = value)
            : (state.result += value);
          break;
      }
      // return state.result;
    }
  },
  actions: {
    clickAction: ({ commit }, payload) => {
      commit("clickAction", payload);
    }
  },
  modules: {}
});
