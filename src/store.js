/** @format */

import { createStore } from "vuex";

const store = createStore({
	state: {
		cart: [],
	},
	mutations: {
		addItem(state, item) {
			const cartItem = {
				...item,
				numberOfItems: 1,
			};
			state.cart.push(cartItem);
			console.log(state);
		},
		deleteItem(state, item) {
			const index =
				state.cart.findIndex(
					(x) => x.id === item.id
				);
			state.cart.splice(index, 1);

			console.log(state);
		},
	},
});

export default store;
