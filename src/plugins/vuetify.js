/** @format */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "vuetify/styles";
import {
	aliases,
	fa,
} from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
	icons: {
		defaultSet: "fa",
		aliases,
		sets: { fa, mdi },
	},
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
