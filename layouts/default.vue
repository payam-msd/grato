<template>
	<div>
		<!-- <Notification /> -->
		<!-- <Navigation /> -->
		<nuxt />
		<!-- <Footer /> -->
	</div>
</template>

<script>
import Footer from '~/components/Footer'
import Notification from '~/components/Notification'
import Navigation from '~/components/Desktop/Navbar'
export default {
	components: {
		Footer,
		Notification,
		Navigation,
	},
}
</script>

<style scoped></style>
