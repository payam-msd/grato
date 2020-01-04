<template>
	<div class="container mx-auto px-4 lg:px-6">
		<ul
			class="overflow-auto scrolling-touch lg:overflow-hidden lg:w-1/2 flex flex-no-wrap lg:justify-around items-center lg:mx-auto py-8"
		>
			<li
				v-for="(list, i) in lists"
				:key="i"
				:class="{
					'border-b border-black': link.isActive && link.id === i,
				}"
				class="py-4 mx-4"
			>
				<a
					class="text-base lg:text-lg cursor-pointer whitespace-no-wrap"
					@click="handleClick(i, list.name)"
				>
					{{ list.name }}
				</a>
			</li>
		</ul>

		<Product :data="selectedData" :list-detail="selectedCategory" />
	</div>
</template>

<script>
import Product from '~/components/product/Product'

export default {
	components: {
		Product,
	},

	props: {
		products: {
			type: Object,
			default: () => {
				return []
			},
		},
	},

	data() {
		return {
			selectedData: this.products.data,
			selectedCategory: {
				id: 0,
				listName: 'محصولات',
			},
			link: {
				isActive: true,
				id: 0,
			},
			lists: [
				{name: 'تخفیف های استثنایی'},
				{name: 'پرفروش ترین ها'},
				{name: 'تازه رسیده ها'},
				{name: 'متفرقه'},
				{name: 'متفرقه'},
				{name: 'متفرقه'},
			],
		}
	},

	watch: {
		async selectedCategory(newValue) {
			var id = newValue.id

			if (id === 0) {
				await this.$FETCH_SPECIAL_OFFERS.index().then(res => {
					this.selectedData = res.products
				})
			} else if (id === 1) {
				this.selectedData = await this.$FETCH_BESTSELLERS.index()
			} else if (id === 2) {
				this.selectedData = await this.$FETCH_LATEST_PRODUCTS.index()
			}
		},
	},

	methods: {
		handleClick(i, list) {
			this.selectedCategory = {id: i, listName: list}
			this.link = {
				isActive: true,
				id: i,
			}
		},
	},
}
</script>

<style scoped>
.active-class {
	@apply border-b py-4;
}
</style>
