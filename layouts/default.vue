<template>
	<div>
		<div ref="cover" />
		<SplashScreen :is-loading="loader" />
		<Notification />
		<Sidebar />
		<Navigation />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Navigation from '~/components/Navbar'
import Footer from '~/components/Footer'
import Notification from '~/components/Notification'
import Sidebar from '~/components/Sidebar'
import SplashScreen from '~/components/SplashScreen'

export default {
	components: {
		Navigation,
		Sidebar,
		Notification,
		Footer,
		SplashScreen,
	},

	data() {
		return {
			loader: true,
		}
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

	mounted() {
		gsap.delayedCall(1, () => {
			this.loader = false
		})
	},
}
</script>

<style></style>
