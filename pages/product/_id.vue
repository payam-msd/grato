<template>
	<div class="relative bg-gray-100">
		<div
			class="container mx-auto px-4 w-full h-auto lg:px-8 flex flex-col-reverse lg:flex-row lg:justify-between py-10 lg:py-16"
		>
			<div class="w-full lg:w-2/5 lg:pl-32">
				<div class="mb-4">
					<h3 class=" pb-1">{{ product.title }}</h3>
					<span class="block text-gray-600">{{ 'قرمز' }}</span>
					<span class="block text-gray-800 pt-8">
						{{
							userSelectedGuaranty === undefined
								? product.minimum_price
								: userSelectedGuaranty.price | currency
						}}
					</span>
				</div>

				<div class="thin-line" />

				<Guaranty
					style="height: 30vh"
					:guaranties="items"
					@updatedGuaranty="userSelectedGuaranty = {...$event}"
				/>

				<div
					class="fixed z-30 lg:static bottom-0 inset-x-0 lg:my-8 text-center"
				>
					<button class="btn btn-lg w-full" @click.prevent="handleAddToCart">
						{{ 'اضافه به سبد خرید' }}
						<IconAdd class="inline w-7" />
					</button>
					<p v-if="userSelectedGuaranty" class="text-red-600 my-2">
						{{ userSelectedGuaranty.quantity }}
						{{ 'عدد باقی مانده' }}
					</p>
				</div>

				<p class="text-gray-800 pb-6">{{ product.description }}</p>

				<div class="thin-line" />

				<ProductExtraDetail :data="titles" />
			</div>

			<div class="w-full lg:w-3/5">
				<ProductCarousel :images="images" />
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductCarousel from '~/components/product/productDetail/ProductCarousel'
// import ChevronBottomIcon from '~/assets/svg/icons/icon-cheveron-down.svg'
// import CheckmarkIcon from '~/assets/svg/icons/icon-check.svg'
import IconAdd from '~/assets/svg/icons/icon-add.svg'

import Guaranty from '~/components/product/productDetail/Guaranty'
import ProductExtraDetail from '~/components/product/productDetail/ProductExtraDetail'

export default {
	/* eslint-disable camelcase */

	name: 'ProductID',

	components: {
		Guaranty,
		ProductExtraDetail,
		// CheckmarkIcon,
		// ChevronBottomIcon,
		IconAdd,
		ProductCarousel,
	},
	meta: {
		name: 'محصول',
		path: `/product/id`,
	},

	data() {
		return {
			id: this.$route.params.id,
			userSelectedGuaranty: undefined,

			images: [
				'https://source.unsplash.com/collection/4585094/1600x900',
				'https://source.unsplash.com/collection/962362/1600x900',
				'https://source.unsplash.com/collection/795176/1600x900',
				'https://source.unsplash.com/collection/4408389/1600x900',
			],

			titles: [
				{
					name: 'جزییات',
				},
				{
					name: 'جزییات',
				},
				{
					name: 'جزییات',
				},
				{
					name: 'جزییات',
				},
			],
		}
	},

	head() {
		return {
			title: this.product.title,
			meta: [
				{
					hid: 'product',
					name: this.product.title,
					content: this.product.description,
				},
			],
		}
	},

	validate({params}) {
		return /^\d+$/.test(params.id)
	},

	computed: {
		...mapGetters(['isAuthenticated']),
	},

	asyncData({params, app, error, route}) {
		try {
			return app.$SHOW_PRODUCT_DETAIL.show(params.id).then(data => {
				let guaranties = []
				data.items.map(guaranty => {
					return guaranties.push(guaranty)
				})
				return {
					items: guaranties,
					product: data,
				}
			})
		} catch (e) {
			//   Error 😨
			error({statusCode: e.code, message: e.message})
		}
	},
	methods: {
		handleAddToCart() {
			if (this.isAuthenticated) {
				this.$store.dispatch('ADD_TO_CART', {
					itemID: this.userSelectedGuaranty.id,
					quantity: 1,
				})
				this.$store.commit('TOGGLE_SIDEBAR', {
					component: undefined,
				})
			}
		},
	},
}
</script>

<style scoped></style>
