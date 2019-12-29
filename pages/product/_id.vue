<template>
	<div class="relative bg-gray-100">
		<div
			class="container mx-auto px-4 w-full h-auto lg:px-8 flex flex-col-reverse lg:flex-row lg:justify-between py-10 lg:py-10"
		>
			<div class="w-full lg:w-2/5 lg:pl-32">
				<div class="my-4">
					<h3 class=" pb-1">{{ product.title }}</h3>
					<span class="block text-gray-600">{{ 'قرمز' }}</span>
					<span class="block text-gray-800 pt-3">
						{{
							userSelectedGuaranty === undefined
								? product.minimum_price
								: userSelectedGuaranty.price | currency
						}}
					</span>
				</div>

				<div class="bg-gray-400 h-px" />

				<Guaranty
					:guaranties="items"
					@updatedGuaranty="userSelectedGuaranty = {...$event}"
				/>

				<div class="fixed lg:static bottom-0 inset-x-0 lg:my-8 text-center">
					<button
						:class="{
							'cursor-not-allowed': userSelectedGuaranty == undefined,
						}"
						:disabled="userSelectedGuaranty == undefined ? true : false"
						class="btn w-full p-4 hover:bg-gray-900"
						@click.prevent="handleAddToCart"
					>
						{{ 'اضافه به سبد خرید' }}
						<IconAdd class="inline w-7" />
					</button>
					<span v-if="userSelectedGuaranty" class="text-red-600">
						{{ userSelectedGuaranty.quantity }}
						{{ 'عدد باقی مانده' }}
					</span>
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
	meta: {
		title: '',
	},

	components: {
		Guaranty,
		ProductExtraDetail,
		// CheckmarkIcon,
		// ChevronBottomIcon,
		IconAdd,
		ProductCarousel,
	},

	data() {
		return {
			id: this.$route.params.id,
			userSelectedGuaranty: undefined,

			images: [
				'https://source.unsplash.com/Pvx24X1uiq4',
				'https://images.unsplash.com/photo-1526854497059-89ac894e3168?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
				'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
				'https://images.unsplash.com/photo-1517439270744-8d9287c2f8f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
				'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
				'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
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

	asyncData({params, app, error}) {
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

	mounted() {
		this.$store.commit('RM_FIXED_NAV')
	},

	beforeDestroy() {
		this.$store.commit('RM_FIXED_NAV')
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
