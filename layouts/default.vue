<template>
	<div>
		<!-- <Notification /> -->
		<!-- <Navigation /> -->
		<busyOverlay />
		<nuxt />
		<!-- <Footer /> -->
	</div>
</template>

<script>
// import Footer from '~/components/Footer'
// import Notification from '~/components/Notification'
// import Navigation from '~/components/Navbar'
import busyOverlay from '~/components/busy-overlay'

export default {
	components: {
		// Footer,
		// Notification,
		// Navigation,
		busyOverlay,
	},
}
</script>

<style scoped></style>
