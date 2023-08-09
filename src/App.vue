<!-- @format -->

<template>
	<nav>
		<router-link to="/"
			>Home</router-link
		>
		|
		<router-link to="/productview"
			>Products</router-link
		>
		<router-link to="/shoppingcartview"
			>Shopping Cart</router-link
		>
	</nav>
	<router-view />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial,
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #232320;
	background-color: #f6f3eb;
}

nav {
	padding: 30px;
	display: flex;
}

nav a {
	font-weight: bold;
	color: #232320;
	font-size: x-large;
}

nav a.router-link-exact-active {
	color: #634a37;
}
</style>
