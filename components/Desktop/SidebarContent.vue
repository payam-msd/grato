<template>
	<div>
		<div class="pt-6 text-center">
			<h1 class="text-black text-2xl">{{ 'سبد خرید' }}</h1>
		</div>

		<div v-for="(item, index) in cart.cartItems" :key="index">
			<div class="mt-6">
				<div class="w-full flex flex-row-reverse justify-start">
					<div>
						<img
							:src="item.product.media.images[0].path"
							class="object-scale-down rounded h-24 bg-rose-100"
						/>
					</div>
					<div class="flex flex-col ml-auto">
						<h1 class="text-sm -mt-1 tracking-wide text-gray-900">
							{{ item.product.title }}
						</h1>
						<div class="self-end ml-3 mt-2 pt-8">
							<button
								class="h-8 w-8 -m-1 rounded-r border border-gray-400"
								@click="handleAddItem(item.quantity, item.id, item.item.id)"
							>
								+
							</button>
							<input
								:key="item.id"
								v-model="item.quantity"
								type="number"
								class="w-8 pr-3 py-1 border border-gray-400 focus:border-2 focus:outline-none focus:border-black"
							/>
							<button
								class="h-8 w-8 -m-1 border rounded-l border-gray-400"
								@click="handleRemoveItem(item.quantity, item.id, item.item.id)"
							>
								-
							</button>
						</div>
					</div>
				</div>
				<div class="flex justify-between text-xs pb-3">
					<span class="bg-green-100 text-green-800 px-4 py-2 rounded-lg ">
						{{ item.item.presets[0].value.value }}
					</span>

					<span class="tracking-wider">
						{{ item.item.price | currency }}
					</span>
				</div>
			</div>
			<div class="flex h-px w-full bg-gray-400"></div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	computed: {
		...mapState(['cart']),
	},

	methods: {
		handleAddItem(quantity, productID, itemID) {
			this.$store.dispatch('ADD_TO_CART', {
				itemID,
				quantity: 1,
			})
		},
		handleRemoveItem(quantity, productID, itemID) {
			if (quantity === 1 || quantity < 2) {
				this.$store.dispatch('REMOVE_FROM_CART', {productID, itemID})
			}
			// by using add_to_cart and quantity of -1 we delete item from product
			this.$store.dispatch('ADD_TO_CART', {itemID, quantity: -1})
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
