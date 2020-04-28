import { action } from "easy-peasy";

export default {
  /** Application State  */
  isDark: false,
  isLoggedin: false,
  User: {
    firstNmae: "",
    lastName: "",
    email: "",
    password: "",
  },
  toggle: action((state) => {
    state.isDark = !state.isDark;
  }),
  login: action((state) => {
    state.isLoggedin = true;
  }),
  setUser: action((state, payload) => {
    state.User = payload;
  }),
};
