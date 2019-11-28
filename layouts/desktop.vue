<template>
	<div>
		<div ref="cover"></div>
		<Notification />
		<Sidebar />
		<Navigation />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Navigation from '~/components/Desktop/Navbar'
import Footer from '~/components/Footer'
import Notification from '~/components/Notification'
import Sidebar from '~/components/Desktop/Sidebar'

export default {
	components: {
		Navigation,
		Sidebar,
		Notification,
		Footer,
	},

	computed: {
		sidebarOpen() {
			return this.$store.state.sidebar.isActive
		},
	},

	watch: {
		sidebarOpen(newValue) {
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
