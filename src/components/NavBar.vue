<!-- @format -->

<template>
	<v-container>
		<v-app-bar :elevation="8">
			<v-app-bar-nav-icon
				class="pl-15 d-lg-none d-xl-none"
				@click="drawer = !drawer"
				><v-icon icon="mdi:mdi-menu"
			/></v-app-bar-nav-icon>

			<v-app-bar-title>
				STUDIO MOONE</v-app-bar-title
			>

			<v-btn
				variant="plain"
				class="d-none d-lg-block">
				<a href="#home">Home</a>
			</v-btn>
			<v-btn
				variant="plain"
				class="d-none d-lg-block">
				<a href="#about">About</a>
			</v-btn>
			<v-btn
				variant="plain"
				class="d-none d-lg-block">
				<a href="#products">Products</a>
			</v-btn>

			<v-btn
				variant="plain"
				class="pr-15 d-none d-lg-block">
				<a href="#contact"
					>Get In Touch</a
				>
			</v-btn>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			app
			class="red">
			<v-hover>
				<v-card
					class="mx-auto d-lg-none d-xl-none"
					max-width="300">
					<v-list>
						<v-list-item
							class="item"
							v-for="i in items"
							:key="i.title">
							<a
								:href="'#' + i.value"
								>{{ i.title }}</a
							>
						</v-list-item>
					</v-list>
				</v-card>
			</v-hover>
		</v-navigation-drawer>
	</v-container>
</template>
<script>
export default {
	data: () => ({
		drawer: false,
		items: [
			{
				title: "Home",
				value: "home",
			},
			{
				title: "About",
				value: "about",
			},
			{
				title: "Products",
				value: "products",
			},
			{
				title: "Contact",
				value: "contact",
			},
		],
	}),
};
</script>
<style>
a {
	text-decoration: none;
	color: black;
}
.item:hover {
	background-color: #ece6d6;
}
</style>
