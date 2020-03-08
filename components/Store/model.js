import {  action } from 'easy-peasy';

export default {
  /** Application State  */
  isDark : false,
  isLoggedin : false,
  toggle: action((state) => {
		state.isDark = !state.isDark
	})
}