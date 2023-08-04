<!-- @format -->

<template>
	<div class="home">
		<div class="text-container">
			<div class="text-h1 pa-15">
				Make milestones memorable</div
			>
			<div class="text-h4 pa-15"
				>Celebrate with handmade custom
				jewelry
			</div>
		</div>
		<div class="image-container">
			<img
				class="image1"
				v-bind:src="
					require('../assets/1.svg')
				" />
		</div>
	</div>
</template>
<script></script>
<style>
.home {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

.text-container {
	background-color: #9b9484;
	flex: 50%;
	height: 40rem;
}
.image-container {
	background-color: #ece6d6;

	flex: 50%;
	height: 40rem;
}
.image1 {
	display: flex;
	height: 40rem;
}
/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
	.flex-container,
	.image-container {
		flex: 100%;
	}
}
</style>
