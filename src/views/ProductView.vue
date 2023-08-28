<!-- @format -->

<template>
	<div
		class="productview"
		id="productview">
		<v-toolbar
			:elevation="8"
			title="MOONE STUDIO">
			<v-btn icon>
				<v-icon
					class="mdi mdi-heart-outline"></v-icon>
			</v-btn>

			<v-btn icon>
				<router-link
					to="/shoppingcartview">
					<v-icon
						class="mdi mdi-cart-outline">
					</v-icon>
					({{
						$store.state.cart.length
					}})
				</router-link>
			</v-btn>

			<v-btn icon>
				<v-icon
					class="mdi mdi-account-outline"></v-icon>
			</v-btn>
		</v-toolbar>

		<v-container class="d-flex">
			<v-row>
				<v-col
					class="d-flex flex-wrap px-6 w-25 my-6">
					<v-card
						v-for="item in items"
						:key="item.id"
						class="mx-auto my-2"
						max-width="344"
						variant="outlined">
						<v-card-item
							class="d-flex justify-center">
							<div
								class="text-overline mb-1">
								New
							</div>
							<v-img
								class="image"
								:max-width="200"
								aspect-ratio="1/1"
								cover
								:src="
									getImgUrl(
										item.picture
									)
								"></v-img>
							<div class="text-caption">
								{{ item.description }}
							</div>
						</v-card-item>

						<v-card-actions
							class="d-flex justify-center">
							<v-btn
								variant="outlined"
								@click="
									addItemToCart(item)
								">
								{{ item.price }} Add to
								Cart
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	data() {
		return {
			items: [
				{
					description:
						" description one",
					id: 1,
					price: "140$",
					picture: "j1.svg",
				},
				{
					description:
						"description two",
					id: 2,
					price: "180$",
					picture: "j2.svg",
				},
				{
					description:
						"description three",
					id: 3,
					price: "120$",
					picture: "j3.svg",
				},
				{
					description:
						"description four",
					id: 4,
					price: "100$",
					picture: "j4.svg",
				},
				{
					description:
						"description five",
					id: 5,
					price: "200$",
					picture: "j5.svg",
					hover: false,
				},
				{
					description:
						"description six",
					id: 6,
					price: "120$",
					picture: "j6.svg",
				},
				{
					description:
						"description seven",
					id: 7,
					price: "300$",
					picture: "j7.svg",
					hover: false,
				},
				{
					description:
						"description eight",
					id: 8,
					price: "220$",
					picture: "j8.svg",
				},
			],
		};
	},
	methods: {
		getImgUrl: function (pic) {
			return require("../assets/" +
				pic);
		},
		addItemToCart(item) {
			//this.cart.push(item);
			this.$store.commit(
				"addItem",
				item
			);
			//console.log(store.cart);
		},
	},
};
</script>
<style scoped>
.image {
	width: 200px;
	height: 200px;
}
</style>
