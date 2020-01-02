<template>
	<div>
		<div ref="cover" />
		<SplashScreen :is-loading="loader" />
		<Notification />
		<!-- <nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li v-for="(item, i) in crumbs" :key="i" :class="item.classes">
					<nuxt-link :to="item.path">
						{{ item.name }}
					</nuxt-link>
				</li>
			</ul>
		</nav> -->
		<!-- <p>{{ breadcrumbs }}</p> -->
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
		// breadcrumbs() {
		// 	return this.$options.breadcrumbs.forEach(e => {
		// 		return e.title
		// 	})
	},
	// crumbs() {
	// 	const crumbs = []
	// 	this.$route.matched.map((item, i, {length}) => {
	// 		const crumb = {}
	// 		crumb.path = item.path
	// 		crumb.name = this.$i18n.t('route.' + (item.name || item.path))

	// 		// is last item?
	// 		if (i === length - 1) {
	// 			// is param route? .../.../:id
	// 			if (item.regex.keys.length > 0) {
	// 				crumbs.push({
	// 					path: item.path.replace(/\/:[^/:]*$/, ''),
	// 					name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, '')),
	// 				})
	// 				crumb.path = this.$route.path
	// 				crumb.name = this.$i18n.t('route.' + this.$route.name, [
	// 					crumb.path.match(/[^/]*$/)[0],
	// 				])
	// 			}
	// 			crumb.classes = 'is-active'
	// 		}

	// 		crumbs.push(crumb)
	// 	})

	// 	return crumbs
	// },
	// crumbs() {
	// 	const crumbs = []
	// 	this.$route.matched.map((item, i, {length}) => {
	// 		const crumb = {}
	// 		crumb.path = item.path
	// 		crumb.name = this.$i18n.t('route.' + (item.name || item.path))

	// 		// is last item?
	// 		if (i === length - 1) {
	// 			// is param route? .../.../:id
	// 			if (item.regex.keys.length > 0) {
	// 				crumbs.push({
	// 					path: item.path.replace(/\/:[^/:]*$/, ''),
	// 					name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, '')),
	// 				})
	// 				crumb.path = this.$route.path
	// 				crumb.name = this.$i18n.t('route.' + this.$route.name, [
	// 					crumb.path.match(/[^/]*$/)[0],
	// 				])
	// 			}
	// 			crumb.classes = 'is-active'
	// 		}

	// 		crumbs.push(crumb)
	// 	})

	// 	return crumbs
	// },
	// },

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

<style>
/* ****************
 *        PAGE ANIMATION
****************/
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}

.page-enter,
.page-leave-active {
	opacity: 0;
}

.is-active {
	@apply text-xl text-black;
}
</style>
