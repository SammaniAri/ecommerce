<!-- @format -->

<template>
	<v-app>
		<v-main>
			<NavBar />
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";

export default {
	name: "App",

	components: {
		NavBar,
		HelloWorld,
	},

	data: () => ({
		//
	}),
};
</script>
