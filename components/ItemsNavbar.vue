<template>
	<div>
		<nav class="flex justify-center items-center flex-wrap h-32 mx-auto">
			<ul class="flex flex-row">
				<li class="mx-8">
					<button
						ref="brands"
						class="text-gray-600 focus:text-black cursor-pointer h-8 border-b focus:outline-none focus:border-black"
						@click="setDataProducts"
					>
						برندها
					</button>
				</li>
				<li class="px-4">
					<button
						class="text-gray-600 focus:text-black h-8 border-b focus:outline-none focus:border-black cursor-pointer"
						@click="setDataLatestProducts"
					>
						جدیدترین برندها
					</button>
				</li>
				<li class="px-8">
					<button
						class="text-gray-600 focus:text-black h-8 border-b
                        focus:outline-none focus:border-black cursor-pointer"
						@click="currentData = bestsellerProducts"
					>
						پرفروش ها
					</button>
				</li>
			</ul>
		</nav>
		<product :data="currentData" />
	</div>
</template>

<script>
import product from '~/components/product/Product'
export default {
	components: {
		product,
	},
	data() {
		return {
			currentData: null,
		}
	},
	computed: {
		products() {
			return this.$store.state.productData.data.slice(0, 12)
		},
		latestProducts() {
			return this.$store.state.latestProductData.slice(0, 12)
		},
		bestsellerProducts() {
			return this.$store.state.bestsellerProductData
		},
	},
	mounted() {
		this.$refs.brands.focus()
		this.currentData = this.products
	},
	methods: {
		setDataProducts() {
			this.currentData = this.products
		},
		setDataLatestProducts() {
			this.currentData = this.latestProducts
		},
		setBestsellerProducts() {
			this.currentData = this.bestsellerProducts
		},
	},
}
</script>

<style scoped></style>
