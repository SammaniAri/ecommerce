<!-- @format -->

<template>
	{{ count }}
	<v-container>
		<v-row>
			<v-card
				max-width="400"
				class="mx-auto">
				<v-container>
					<v-row dense>
						<v-col cols="12">
							<v-card
								v-for="item in items"
								:key="item.id">
								<div
									class="d-flex flex-no-wrap justify-space-between">
									<v-avatar
										class="ma-3"
										size="125"
										rounded="0">
										<v-img
											src="../assets/2.svg"></v-img>
									</v-avatar>
									<div>
										<v-card-title
											class="text-h5">
											Product Name
										</v-card-title>

										<v-card-subtitle>
											{{
												item.price
											}}</v-card-subtitle
										>

										<v-card-actions>
											<v-select
												h-25
												label="Select"
												:items="[
													'1',
													'2',
													'3',
													'4',
													'5',
												]"
												variant="outlined"></v-select>
											<v-btn icon>
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
				max-width="400"
				variant="outlined">
				<v-card-item>
					<div>
						<div
							class="text-overline mb-1">
							Order Summery
						</div>

						<div class="text-caption">
							Subtotal 700 $</div
						>
						<div class="text-caption">
							Estimated Tax 50 $</div
						><div class="text-h6 mb-1">
							Total 750 $
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
		count() {
			console.log(this.$store.state);
			return this.$store.state.cart;
		},
	},
};
//console.log(store.cart);
</script>
