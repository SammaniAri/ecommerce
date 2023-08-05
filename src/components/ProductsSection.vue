<!-- @format -->

<template>
	<div
		class="d-flex justify-center flex-row"
		id="products">
		<v-sheet
			class="section-height left-left w-50">
			<img
				class="image1 pl-15"
				v-bind:src="
					require('../assets/3.svg')
				" />
		</v-sheet>
		<v-sheet
			class="section-height d-flex flex-column justify-center w-50"
			><p
				class="text-h4 py-1 d-flex justify-center"
				>From me to me</p
			>
			<p
				class="text-h6 py-1 d-flex justify-center"
				>Jewelry to give yourself for
				reaching a personal goal</p
			>
			<div
				class="py-1 d-flex justify-center">
				<v-btn variant="outlined"
					>Shop Now</v-btn
				>
			</div>
		</v-sheet>
	</div>
</template>
<style scoped>
.section-height {
	height: 40rem;
	background-color: #9b9484;
}
.left-left {
	background-color: #ece6d6;
}
</style>
