<!-- @format -->

<template>
	<v-container>
		<v-row>
			<v-card
				max-width="400"
				class="mx-auto">
				<v-container>
					<v-row dense>
						<v-col cols="12">
							<v-card
								v-for="item in cart"
								:key="item.id">
								<div
									class="d-flex flex-no-wrap justify-space-between">
									<v-avatar
										class="ma-3"
										size="125"
										rounded="0">
										<v-img
											:src="
												getImgUrl(
													item.picture
												)
											"></v-img>
									</v-avatar>
									<div>
										<v-card-title
											class="text-h5">
											{{
												item.description
											}}
										</v-card-title>

										<v-card-subtitle>
											{{
												item.price
											}}</v-card-subtitle
										>

										<v-card-actions>
											<v-select
												v-model="
													item.numberOfItems
												"
												@update:modelValue="
													changeValue(
														numberOfItems,
														2
													)
												"
												h-25
												label="Select"
												:items="[
													1, 2, 3,
												]"
												variant="outlined"></v-select>
											<v-btn
												icon
												@click="
													removeItemFromCart(
														item
													)
												">
												<v-icon
													class="mdi mdi-trash-can-outline"></v-icon>
											</v-btn>
										</v-card-actions>
									</div>
								</div>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
			</v-card>
			<v-card
				class="to-checkout mx-auto"
				width="400"
				max-height="400"
				variant="outlined">
				<v-card-item>
					<div>
						<div
							class="text-overline mb-1">
							Order Summry
						</div>

						<div class="text-caption">
							Subtotal
							{{
								calculateSubTotalPrice
							}}
							$</div
						>
						<div class="text-caption">
							Estimated Tax
							{{
								calculateEstimatedTax
							}}
							$</div
						><div class="text-h6 mb-1">
							Total
							{{
								calculateSubTotalPrice +
								calculateEstimatedTax
							}}
							$
						</div>
					</div>
				</v-card-item>

				<v-card-actions
					class="d-flex justify-center">
					<v-btn variant="outlined">
						Check Out
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-row>
	</v-container>
</template>
<script>
export default {
	data() {
		return { items: [] };
	},
	computed: {
		cart() {
			console.log(this.$store.state);
			return this.$store.state.cart;
		},
		calculateSubTotalPrice() {
			let total = 0;
			this.cart.forEach((item) => {
				total +=
					item.price *
					item.numberOfItems;
			});
			return total;
		},
		calculateEstimatedTax() {
			return (
				this.calculateSubTotalPrice *
				0.05
			);
		},
	},
	methods: {
		getImgUrl: function (cart) {
			return require("../assets/" +
				cart);
		},
		removeItemFromCart(item) {
			this.$store.commit(
				"deleteItem",
				item
			);
		},
		changeValue(numberOfItems, item) {
			console.log(this.$store.state);

			return numberOfItems * item.price;
		},
	},
};
</script>
