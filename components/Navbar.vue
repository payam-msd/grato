<template>
	<div class="relative">
		<header
			ref="navbar"
			class="w-full z-20 bg-white shadow-lg flex flex-wrap items-center py-2 lg:py-8"
		>
			<div
				class="flex justify-between items-center container mx-auto px-4 lg:px-6"
			>
				<!-- <nuxt-link
					class="text-3xl font-dana-bold text-green-700 tracking-wider ml-3"
					tag="a"
					to="/"
				>
					گراتو
				</nuxt-link> -->
				<!-- <BrandCategories /> -->
				<!-- SUBSEQUENT NAVBAR  -->
				<SubNav :isFixed="isNavbarFixed" />
				<!-- /SUBSEQUENT NAVBAR	  -->

				<div class="w-full lg:w-auto flex lg:items-center justify-end">
					<div
						class="items-center justify-between text-base text-gray-700 lg:flex"
					>
						<profile v-if="isAuthenticated" />

						<nuxt-link
							v-else
							class="text-sm text-gray-800 py-3 rounded border border-gray-600 block lg:px-5 focus:border-black"
							to="/auth/login"
							tag="a"
						>
							{{ 'ورود به حساب کاربری' }}
						</nuxt-link>
					</div>

					<thinLine
						class="w-7 lg:mx-1"
						transform="rotate( 90, 0, 0 ) scale(1.5,1)"
					/>

					<a
						@click="$store.commit('TOGGLE_SIDEBAR', {component: undefined})"
						role="button"
						class="flex items-center"
						tabindex="0"
					>
						<BagIcon class="w-7 m-1" transform="scale(-1, 1)" />

						<div
							v-if="cart.inCart"
							class="flex justify-center w-5 h-5 border mt-1 border-black text-xs rounded-full"
						>
							<span class="text-black self-end">{{ cart.inCart }}</span>
						</div>
					</a>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
// import BrandCategories from '~/components/navigation/hoverDrop/BrandCategories'
import SubNav from '~/components/SubNav'
import profile from '~/components/navigation/profile/Dropdown'
import BagIcon from '~/assets/svg/icons/icon-shopping-bag.svg'
import thinLine from '~/assets/svg/icons/icon-remove.svg'
export default {
	components: {
		profile,
		SubNav,
		// BrandCategories,
		BagIcon,
		thinLine,
	},

	data() {
		return {
			isNavbarFixed: false,
			lastScrollPosition: 55,
		}
	},

	computed: {
		...mapGetters(['isAuthenticated']),
		...mapState(['cart']),
		isProductDetail() {
			return this.$store.state.navbar.rmFixedNav
		},
	},

	watch: {
		isNavbarFixed(newValue) {
			var {navbar} = this.$refs

			if (newValue) {
				gsap.set(navbar, {
					css: {
						classList:
							'+=fixed top-0 w-full z-20 shadow-lg rounded-b bg-white flex flex-wrap items-center py-2 lg:py-4',
					},
				})
				// gsap.set('#subNav', {
				// 	classList: '+=fixed bg-white shadow-lg w-full z-20',
				// 	top: '4.6rem',
				// })
			} else {
				gsap.set(navbar, {
					css: {
						classList:
							'-=w-full z-20 bg-white flex flex-wrap items-center py-2 lg:py-8',
					},
				})
				// gsap.set('#subNav', {
				// 	classList: '',
				// 	top: 0,
				// })
			}
		},
	},

	mounted() {
		window.addEventListener('scroll', this.onscroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onscroll)
	},
	methods: {
		onscroll() {
			const currentScrollPosition =
				window.pageYOffset || document.documentElement.scrollTop

			// ? Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
			if (currentScrollPosition < 0) {
				return
			}

			if (this.isProductDetail) {
				this.isNavbarFixed = false
			} else {
				// Here we determine whether we need to show or hide the navbar
				this.isNavbarFixed = currentScrollPosition > this.lastScrollPosition
			}

			// if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
			// 	return
			// }
			// // Set the current scroll position as the last scroll position
			// this.lastScrollPosition = currentScrollPosition
		},
	},
}
</script>

<style scope>
#menu-toggle:checked + #menu {
	display: hidden;
}
</style>
