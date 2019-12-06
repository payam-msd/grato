<template>
	<div>
		<template v-if="$device.isDesktop">
			<Hero />
		</template>
		<template v-if="$device.isMobileOrTablet">
			<HeroMobile />
		</template>
		<ProdcutsNav :products="products" />
		<Present />
		<Slider />
		<Instagram />
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Hero from '~/components/Desktop/Hero'
import HeroMobile from '~/components/Mobile/Hero'
import ProdcutsNav from '~/components/ProductsNav'
import Present from '~/components/Present'
import Slider from '~/components/Slider'
import Instagram from '~/components/FollowInsta'

export default {
	name: 'Home',
	layout: ctx => (ctx.isDesktop ? 'desktop' : 'mobile'),
	meta: {
		title: 'فروشگاه اینترنتی گراتو',
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

	components: {
		Hero,
		HeroMobile,
		ProdcutsNav,
		Present,
		Slider,
		Instagram,
	},

	computed: {
		...mapGetters(['isAuthenticated']),
	},

	async asyncData({app}) {
		return {
			products: await app.$FETCH_PRODUCTS.index(),
			shopSuggestions: await app.$FETCH_SHOP_SUGGESTIONS.index(),
			instantSuggestions: await app.$FETCH_INSTANT_SUGGESTIONS.index(),
		}
	},

	async fetch({app, store}) {
		await app.$FETCH_CATEGORIES
			.index()
			.then(res => store.commit('CATEGORIES_DATA', res))

		if (store.getters.isAuthenticated) await store.dispatch('GET_CART_DATA')
	},
}
</script>

<style></style>
