<template>
	<div>
		<Hero />
		<ProdcutsNav :products="products" />
		<Present />
		<Slider />
		<Instagram />
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Hero from '~/components/Hero'
import ProdcutsNav from '~/components/ProductsNav'
import Present from '~/components/Present'
import Slider from '~/components/Slider'
import Instagram from '~/components/FollowInsta'

export default {
	name: 'Home',

	meta: {
		title: 'فروشگاه اینترنتی گراتو',
	},

	components: {
		Hero,
		ProdcutsNav,
		Present,
		Slider,
		Instagram,
	},
	head() {
		return {
			title: 'فروشگاه اینترنتی گراتو',
			meta: [
				{
					hid: 'Home',
					name: 'فروشگاه اینترنتی گراتو',
					content: 'فروشگاه اینترنتی گراتو',
				},
			],
		}
	},

	computed: {
		...mapGetters(['isAuthenticated']),
	},

	async fetch({app, store, env}) {
		await app.$FETCH_CATEGORIES
			.index()
			.then(res => store.commit('CATEGORIES_DATA', res))

		if (store.getters.isAuthenticated) await store.dispatch('GET_CART_DATA')
	},

	async asyncData({app}) {
		return {
			products: await app.$FETCH_PRODUCTS.index(),
			shopSuggestions: await app.$FETCH_SHOP_SUGGESTIONS.index(),
			instantSuggestions: await app.$FETCH_INSTANT_SUGGESTIONS.index(),
		}
	},
}
</script>

<style></style>
