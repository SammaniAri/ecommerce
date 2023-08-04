<!-- @format -->

<template>
	<v-app>
		<v-main>
			<NavBar />
			<HomeSection />
			<ProductsSection />
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import HomeSection from "./components/HomeSection.vue";
import ProductsSection from "./components/ProductsSection.vue";

export default {
	name: "App",

	components: {
		NavBar,
		HomeSection,
		ProductsSection,
		HelloWorld,
	},

	data: () => ({
		//
	}),
};
</script>
