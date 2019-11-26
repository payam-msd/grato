<template>
	<div>
		<!-- <div class="makeBGAnimated h-screen w-full fixed inset-0 z-20"></div> -->
		<Notification />
		<Sidebar />
		<Navigation :cart-content="CartContent" />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Navigation from '~/components/Desktop/Navbar'
import Footer from '~/components/Footer'
import Notification from '~/components/Notification'
import Sidebar from '~/components/Desktop/Sidebar'
import CartContent from '~/components/Desktop/SidebarContent'

export default {
	/* eslint-disable no-undef */
	components: {
		Navigation,
		Sidebar,
		Notification,
		Footer,
	},

	data() {
		return {
			CartContent,
		}
	},

	watch: {
		//     sidebarOpen(newValue) {
		//         const tl = gsap
		//         const autoAlpha = newValue ? 1 : 0
		//         tl.to(".makeBGAnimated", 0.75, {autoAlpha})
		//     },
		// },
		// mounted() {
		//     gsap.set(".makeBGAnimated", {autoAlpha: 0})
	},
}
</script>

<style></style>
