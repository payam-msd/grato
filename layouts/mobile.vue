<template>
	<div>
		<div ref="cover"></div>
		<Sidebar />
		<Notification />
		<Navigation :menu-content="MenuContent" :cart-content="CartContent" />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Navigation from '~/components/Mobile/Navbar'
import Sidebar from '~/components/Mobile/Sidebar'
import Footer from '~/components/Footer'
import Notification from '~/components/Notification'
import MenuContent from '~/components/Mobile/MenuContent'
import CartContent from '~/components/Mobile/CartContent'

export default {
	/* eslint-disable no-undef */
	components: {
		Sidebar,
		Notification,
		Navigation,
		Footer,
	},

	data() {
		return {
			MenuContent,
			CartContent,
		}
	},

	computed: {
		...mapState(['sidebar']),
	},

	watch: {
		'sidebar.isActive'(newValue) {
			const {cover} = this.$refs
			var setOpacity = newValue ? 1 : 0
			var setClass = newValue ? '+=z-40 fixed inset-0' : ''
			gsap.to(cover, {
				duration: 0.75,
				autoAlpha: setOpacity,
				css: {
					background: '#24344763',
					classList: setClass,
				},
			})
		},
	},
}
</script>

<style></style>
