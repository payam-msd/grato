<template>
	<header
		class="px-3 bg-white flex flex-wrap justify-between items-center py-3"
	>
		<a tabindex="0" role="button" class="p-1  ">
			<Menu
				class="w-8 focus:outline-none focus:shadow-outline"
				@click="$store.commit('TOGGLE_SIDEBAR', {component: menuContent})"
			/>
		</a>

		<nuxt-link
			tag="a"
			class="p-1 text-2xl text-green-800 font-dana-bold
             "
			to="/"
		>
			{{ 'گراتو' }}
		</nuxt-link>

		<a
			role="button"
			tabindex="0"
			class="relative  "
			@click="$store.commit('TOGGLE_SIDEBAR', {component: cartContent})"
		>
			<BagIcon class="w-7 m-1" transform="scale(-1,1)" />
			<span
				v-if="cart.inCart"
				class="cart-prop-m w-6 h-6 bg-teal-500 text-white text-xs
                rounded-full flex justify-center items-center"
			>
				{{ cart.inCart }}
			</span>
		</a>
	</header>
</template>

<script>
import {mapState} from 'vuex'
import BagIcon from '~/assets/svg/icons/icon-shopping-bag.svg'
import Menu from '~/assets/svg/icons/icon-menu.svg'
export default {
	components: {
		Menu,
		BagIcon,
	},

	props: {
		menuContent: {
			type: Object,
			default: () => {},
		},
		cartContent: {
			type: Object,
			default: () => {},
		},
	},

	computed: {
		...mapState(['cart']),
	},
}
</script>

<style scoped></style>
