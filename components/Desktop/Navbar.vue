<template>
	<div class="relative">
		<header
			ref="navbar"
			class="w-full z-20 bg-white flex flex-wrap items-center py-2 lg:py-8"
		>
			<div
				class="flex-1 flex justify-between items-center container mx-auto px-6"
			>
				<nuxt-link
					class="text-3xl font-dana-bold text-green-700 tracking-wider"
					tag="a"
					to="/"
				>
					گراتو
				</nuxt-link>

				<BrandCategories />

				<div class="w-full lg:flex lg:items-center lg:w-auto">
					<div
						class="items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 lg:flex"
					>
						<profile v-if="isAuthenticated" />

						<nuxt-link
							v-else
							class="py-3 px-0 rounded border border-gray-400 block lg:px-6 focus:border-black"
							to="/auth/login"
							tag="a"
						>
							{{ 'ورود به حساب کاربری' }}
						</nuxt-link>
					</div>

					<thinLine
						class="icon w-8 fill-current text-gray-400"
						transform="rotate( 90, 0, 0 ) scale(1.5,1)"
					/>

					<a
						role="button"
						tabindex="0"
						class="relative focus:outline-none focus:shadow-outline rounded"
						@click="
							$store.commit('TOGGLE_SIDEBAR', {
								component: undefined,
							})
						"
					>
						<BagIcon class="w-7 m-1" transform="scale(-1, 1)" />

						<!-- <span
                            v-if="cart.inCart"
                            class="cart-prop w-6 h-6 bg-teal-500 text-white text-xs
                            rounded-full flex justify-center items-center"
                            >{{ cart.inCart }}</span
                        > -->
					</a>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import BrandCategories from '~/components/Desktop/navigation/hoverDrop/BrandCategories'
import profile from '~/components/Desktop/navigation/profile/Dropdown'
import BagIcon from '~/assets/svg/icons/icon-shopping-bag.svg'
import thinLine from '~/assets/svg/icons/icon-remove.svg'
export default {
	components: {
		profile,
		BrandCategories,
		BagIcon,
		thinLine,
	},

	data() {
		return {
			isNavbarFixed: false,
			isProtected: false,
			lastScrollPosition: 55,
		}
	},

	computed: {
		...mapGetters(['isAuthenticated']),
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
							'+=fixed top-0 w-full z-20 rounded-b shadow-lg bg-white flex flex-wrap items-center py-2 lg:py-4',
					},
				})
			} else {
				gsap.set(navbar, {
					css: {
						classList:
							'-=w-full z-20 bg-white flex flex-wrap items-center py-2 lg:py-8',
					},
				})
			}
		},
		$route(route) {
			route.name === 'auth-login' || route.name === 'auth-register'
				? (this.isProtected = true)
				: (this.isProtected = false)
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

			if (this.isProtected || this.isProductDetail) {
				this.isNavbarFixed = false
			} else {
				// Here we determine whether we need to show or hide the navbar
				this.isNavbarFixed = currentScrollPosition > this.lastScrollPosition
			}

			// if (
			//     Math.abs(currentScrollPosition - this.lastScrollPosition) < 60
			// ) {
			//     return
			// }
			// Set the current scroll position as the last scroll position
			// this.lastScrollPosition = currentScrollPosition
		},
	},
}
</script>

<style></style>
