/** @format */

import {
	createRouter,
	createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import ShoppingCartView from "../views/ShoppingCartView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/productview",
		name: "productview",
		component: ProductView,
	},
	{
		path: "/shoppingcartview",
		name: "shoppingcartview",
		component: ShoppingCartView,
	},
];

const router = createRouter({
	history: createWebHistory(
		process.env.BASE_URL
	),
	routes,
});

export default router;
