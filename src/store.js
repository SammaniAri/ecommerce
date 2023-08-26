/** @format */

import { createStore } from "vuex";

const store = createStore({
	state: {
		cart: [],
	},
	mutations: {
		addItem(state, item) {
			state.cart.push(item);
			console.log(state);
		},
	},
});

export default store;
