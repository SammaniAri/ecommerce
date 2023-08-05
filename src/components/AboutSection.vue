<!-- @format -->

<template>
	<div
		class="about d-flex justify-center flex-row"
		id="about">
		<v-sheet
			class="section-height d-flex flex-column justify-center w-50 pl-15"
			><p
				class="text-h3 py-1 d-flex justify-center my-6"
				>Our Story
			</p>

			<p
				class="text-h6 py-1 d-flex justify-center my-6 mx-15">
				Hello from Studio Moone! We are
				a small group of passionate
				jewelry makers who like making
				delicate and personalized
				jewelry for meaningful moments
				such as weddings, engagements,
				and other milestones.</p
			>
			<p
				class="text-h6 py-1 d-flex justify-center mx-15">
				Our pieces are thoughtfully
				designed and one of a kind. You
				can be assured that no two
				pieces are ever alike, making it
				even more special as it is
				passed on from generation to
				generation.</p
			>
		</v-sheet>

		<v-sheet
			class="d-flex flex-column justify-center w-50 h-50">
			<img
				v-bind:src="
					require('../assets/5.2.svg')
				" />
		</v-sheet>
	</div>
</template>
<style scoped>
.about {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.section-height {
	height: 40rem;
}
</style>
