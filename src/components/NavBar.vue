<!-- @format -->

<template>
	<v-container>
		<v-app-bar :elevation="8">
			<v-app-bar-nav-icon class="pl-15"
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
	</v-container>
</template>
<script></script>
<style>
a {
	text-decoration: none;
	color: black;
}
</style>
