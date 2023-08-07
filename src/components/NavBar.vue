<!-- @format -->

<template>
	<v-container>
		<v-app-bar :elevation="8">
			<v-app-bar-nav-icon
				class="pl-15"
				@click="drawer = !drawer"
				><v-icon icon="mdi:mdi-menu"
			/></v-app-bar-nav-icon>
			<v-app-bar-title>
				STUDIO MOONE</v-app-bar-title
			>

			<v-btn variant="plain">
				<a href="#home">Home</a>
			</v-btn>
			<v-btn variant="plain">
				<a href="#about">About</a>
			</v-btn>
			<v-btn variant="plain">
				<a href="#products">Products</a>
			</v-btn>

			<v-btn
				variant="plain"
				class="pr-15">
				<a href="#contact"
					>Get In Touch</a
				>
			</v-btn>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			app
			class="red">
			<v-card
				class="mx-auto"
				max-width="300">
				<v-list density="compact">
					<v-list-item variant="tonal"
						><a href="#home"
							>Home</a
						></v-list-item
					>
					<v-list-item variant="tonal"
						><a href="#about"
							>About</a
						></v-list-item
					>
					<v-list-item variant="tonal"
						><a href="#products"
							>Products</a
						></v-list-item
					>
					<v-list-item variant="tonal"
						><a href="#contact"
							>Contact</a
						></v-list-item
					>
				</v-list>
			</v-card></v-navigation-drawer
		>
	</v-container>
</template>
<script>
export default {
	data: () => ({
		drawer: false,
	}),
};
</script>
<style>
a {
	text-decoration: none;
	color: black;
}
</style>
