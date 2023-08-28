<!-- @format -->

<template>
	<v-container
		class="container"
		id="home">
		<v-row
			no-gutters
			class="d-flex align-center">
			<v-col
				cols="12"
				md="6">
				<v-img
					class="ml-16"
					:max-width="640"
					aspect-ratio="1/1"
					cover
					src="../assets/1.svg"></v-img>
			</v-col>
			<v-col
				cols="12"
				md="6"
				v-motion-slide-visible-top>
				<div
					class="text-h2 pa-12 d-flex justify-center">
					Make milestones memorable</div
				>
				<div
					class="text-h4 px-12 py-6 d-flex justify-center"
					>Celebrate with handmade
					custom jewelry
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>
<script></script>
<style scoped>
.container {
	max-width: 2000px;
	background-color: #ece6d6;
}
</style>
