<!-- @format -->

<template>
	<v-container
		class="container"
		id="products">
		<v-row class="d-flex align-center">
			<v-col
				cols="12"
				md="6">
				<v-img
					class="d-none d-sm-flex ml-16"
					:max-width="640"
					aspect-ratio="1/1"
					cover
					src="../assets/3.svg"></v-img>
			</v-col>
			<v-col
				cols="12"
				md="6"
				v-motion-slide-visible-bottom>
				<p
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
						><a href="/productview"
							>Products</a
						></v-btn
					>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>
<style scoped>
.container {
	max-width: 2000px;
	background-color: #ece6d6;
}
</style>
