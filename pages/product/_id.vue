<template>
	<div class="bg-gray-100">
		<div
			class="container mx-auto px-4 w-full h-auto lg:px-8 flex flex-col-reverse lg:flex-row lg:justify-between py-10 lg:py-16"
		>
			<div class="w-full lg:w-2/5 lg:pl-32">
				<div class="my-4">
					<h3 class="text-xl pb-1">{{ product.title }}</h3>
					<span class="block text-gray-600">{{ 'قرمز' }}</span>
					<span class="block text-gray-800 pt-3">
						{{
						userSelectedGuaranty === undefined
						? product.minimum_price
						: userSelectedGuaranty.price | currency
						}}
					</span>
				</div>

				<div class="bg-gray-400 h-px"></div>

				<Guaranty :guaranties="items" @updatedGuaranty="userSelectedGuaranty = {...$event}" />

				<div class="my-8 text-center">
					<button
						:disabled="userSelectedGuaranty == undefined ? true : false"
						:class="{
							'cursor-not-allowed': userSelectedGuaranty == undefined,
						}"
						class="btn w-full p-4 hover:bg-gray-900 mb-2"
						@click.prevent="handleAddToCart"
					>
						{{ 'اضافه به سبد خرید' }}
						<IconAdd class="w-7" />
					</button>
					<span v-if="userSelectedGuaranty" class="text-red-600">
						{{ userSelectedGuaranty.quantity }}
						{{ 'عدد باقی مانده' }}
					</span>
				</div>

				<p class="text-gray-800 text-sm pb-6">{{ product.description }}</p>

				<div class="thin-line"></div>

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
import ProductCarousel from '~/components/product/ProductCarousel'
import ChevronBottomIcon from '~/assets/svg/icons/icon-cheveron-down.svg'
import CheckmarkIcon from '~/assets/svg/icons/icon-check.svg'
import IconAdd from '~/assets/svg/icons/icon-add.svg'

import Guaranty from '~/components/product/productDetail/Guaranty'
import ProductExtraDetail from '~/components/product/productDetail/ProductExtraDetail'

export default {
	/* eslint-disable camelcase */
	layout: ctx => (ctx.isDesktop ? 'desktop' : 'mobile'),
	name: 'ProductID',
	meta: {
		title: '',
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

	components: {
		Guaranty,
		ProductExtraDetail,
		CheckmarkIcon,
		ChevronBottomIcon,
		IconAdd,
		ProductCarousel,
	},

	data() {
		return {
			id: this.$route.params.id,
			userSelectedGuaranty: undefined,

			images: [
				'https://images.unsplash.com/photo-1575446508869-cfde746c0239?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
				'https://images.unsplash.com/photo-1573073749310-1d5d9a5431b6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
				'https://images.unsplash.com/photo-1573156899216-52624965d7b1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
				'https://images.unsplash.com/photo-1573715397262-adf477ba73e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
				'https://images.unsplash.com/photo-1573715397262-adf477ba73e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
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
			// if (!this.isAuthenticated) {
			// 	this.$router.push({
			// 		name: 'auth-register',
			// 		query: {redirect: `/product/${this.id}`},
			// 	})
			// }
			new Promise((resolve, reject) => {
				this.$store.dispatch('ADD_TO_CART', {
					itemID: this.userSelectedGuaranty.id,
					quantity: 1,
				})
				resolve()
			}).then(() => {
				this.$store.commit('TOGGLE_SIDEBAR', {
					component: undefined,
				})
			})
		},
	},
}
</script>

<style scoped></style>
