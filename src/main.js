/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import store from "./store.js";
import { MotionPlugin } from "@vueuse/motion";

loadFonts();

createApp(App)
	.use(store)
	.use(router)
	.use(vuetify)
	.use(MotionPlugin)
	.mount("#app");
