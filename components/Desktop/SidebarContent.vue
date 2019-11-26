<template>
	<div>
		<div class="pt-6 text-center">
			<h1 class="text-black text-2xl">سبد خرید</h1>
		</div>
		<div v-for="(order, index) in ordersList" :key="index">
			<div class="mt-6">
				<div class="w-full flex flex-row-reverse justify-start">
					<div>
						<img
							:src="order.product.media.images[0].path"
							class="object-scale-down rounded h-24"
						/>
					</div>
					<div class="flex flex-col ml-auto">
						<h1 class="text-sm -mt-1 tracking-wide text-gray-900">
							{{ order.product.title }}
						</h1>
						<div class="self-end ml-3 mt-2 pt-8">
							<button
								class="h-8 w-8 -m-1 rounded-r border border-gray-400"
								@click="handleAddItem(order.quantity, order.id, order.item.id)"
							>
								+
							</button>
							<input
								:key="order.id"
								v-model="order.quantity"
								type="number"
								class="w-8 pr-3 py-1 border border-gray-400 focus:border-2 focus:outline-none focus:border-black"
							/>
							<button
								class="h-8 w-8 -m-1 border rounded-l border-gray-400"
								@click="
									handleRemoveItem(order.quantity, order.id, order.item.id)
								"
							>
								-
							</button>
						</div>
					</div>
				</div>
				<span
					class="float-right my-3 bg-green-100 text-green-800 px-4 py-2 rounded font-bold text-xs"
				>
					{{ order.item.presets[0].value.value }}
				</span>
			</div>
			<div class="flex h-px w-full bg-gray-400"></div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	data() {
		return {
			updatedProduct: {},
			ObjectFactory(quantity, productID, itemID) {
				this.UpdatedQuantity = quantity
				this.ProducID = productID
				this.ItemID = itemID
			},
		}
	},
	computed: {
		...mapState(['orderDetails', 'ordersList']),
	},
	methods: {
		handleAddItem(quantity, productID, itemID) {
			/* eslint-disable no-console */
			const setUpdatedProduct = new this.ObjectFactory(
				quantity,
				productID,
				itemID,
			)
			this.updatedProduct = setUpdatedProduct
			this.$store.dispatch('UpdateCart', {itemID, quantity: 1})
		},
		handleRemoveItem(quantity, productID, itemID) {
			if (quantity === 1 || quantity < 2) {
				this.$store.dispatch('RemoveFromCart', {productID, itemID})
			}
			const setUpdatedProduct = new this.ObjectFactory(
				quantity,
				productID,
				itemID,
			)
			this.updatedProduct = setUpdatedProduct
			this.$store.dispatch('UpdateCart', {itemID, quantity: -1})
		},
	},
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input[type='number'] {
	-moz-appearance: textfield; /* Firefox */
}
</style>
