<template>
	<div>
		<div ref="cover" />
		<Sidebar />
		<Notification />
		<Navigation :menu-content="MenuContent" :cart-content="CartContent" />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Navigation from '~/components/__mobile-components__/Navbar'
import Sidebar from '~/components/__mobile-components__/Sidebar'
import Footer from '~/components/Footer'
import Notification from '~/components/Notification'
import MenuContent from '~/components/__mobile-components__/MenuContent'
import CartContent from '~/components/__mobile-components__/CartContent'

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
