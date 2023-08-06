<!-- @format -->

<template>
	<v-app>
		<v-main>
			<NavBar />
			<HomeSection />
			<AboutSection />
			<ProductsSection />
			<GetInTouch />
		</v-main>
	</v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HomeSection from "./components/HomeSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProductsSection from "./components/ProductsSection.vue";
import GetInTouch from "./components/GetInTouch.vue";

export default {
	name: "App",

	components: {
		NavBar,
		HomeSection,
		AboutSection,
		ProductsSection,
		GetInTouch,
	},

	data: () => ({
		//
	}),
};
</script>
