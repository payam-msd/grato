<template>
	<div class="relative h-24 lg:h-32">
		<header
			class="z-20 bg-white flex flex-wrap items-center"
			:class="[
				isNavbarFixed
					? 'fixed inset-auto w-full h-24 top-0 shadow-lg rounded-b'
					: 'relative h-32 ',
			]"
		>
			<div
				class="relative flex justify-between items-center container mx-auto px-4 lg:px-6"
			>
				<!-- SUBSEQUENT NAVBAR  -->
				<NavCategories :is-fixed="isNavbarFixed" />
				<!-- /SUBSEQUENT NAVBAR	  -->

				<div class="w-full lg:w-auto flex lg:items-center justify-end">
					<div
						class="items-center justify-between text-base text-gray-700 lg:flex"
					>
						<profile v-if="isAuthenticated" :is-fixed="isNavbarFixed" />

						<nuxt-link
							v-else
							class="text-gray-800 py-3 lg:py-4 rounded block px-3 lg:px-6 lg:border lg:border-gray-500 lg:hover:border-black "
							to="/auth/login"
						>
							<a class=" hidden lg:block">
								{{ 'ورود به حساب کاربری' }}
							</a>
							<IconUser class="w-2.2 lg:hidden" />
						</nuxt-link>
					</div>

					<thinLine
						class="w-8 lg:mx-1"
						transform="rotate( 90, 0, 0 ) scale(1.5,1)"
					/>

					<button
						id="bagButton"
						class="cursor-pointer flex items-center"
						@click="onCartClick"
					>
						<div class="w-2.2 lg:w-10">
							<BagIcon />
						</div>

						<div v-if="cart.inCart" class="relative">
							<span
								class="absolute w-6 h-6 border border-black text-black  rounded-full flex items-center text-sm font-dana-bold justify-center"
								style="left: -20px;
								top: -8px;
								line-height: 1.4rem;
							"
							>
								{{ cart.inCart }}
							</span>
						</div>
					</button>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import NavCategories from '~/components/NavCategories'
import profile from '~/components/navigation/profile/Dropdown'
import BagIcon from '~/assets/svg/icons/icon-shopping-bag.svg'
import IconUser from '~/assets/svg/icons/icon-user.svg'
import thinLine from '~/assets/svg/icons/icon-remove.svg'
export default {
	components: {
		profile,
		NavCategories,
		BagIcon,
		thinLine,
		IconUser,
	},

	data() {
		return {
			isNavbarFixed: false,
			lastScrollPosition: 850,
		}
	},

	computed: {
		...mapGetters(['isAuthenticated']),
		...mapState(['cart']),
	},

	// watch: {
	// 	isNavbarFixed(newValue) {
	// 		var {navbar} = this.$refs

	// 		if (newValue) {
	// 			gsap.set(navbar, {
	// 				css: {
	// 					classList:
	// 						'+=',
	// 				},
	// 			})
	// 		} else {
	// 			gsap.set(navbar, {
	// 				css: {
	// 					classList:
	// 						'-=w-full z-20 bg-white flex flex-wrap items-center py-6 lg:py-8',
	// 				},
	// 			})
	// 		}
	// },

	mounted() {
		window.addEventListener('scroll', this.onscroll)
		this.$on('hook:beforeDestroy', () => {
			window.removeEventListener('scroll', this.onscroll)
		})
	},
	methods: {
		onscroll() {
			const route = this.$route.name
			const currentScrollPosition =
				window.pageYOffset || document.documentElement.scrollTop

			// ? Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
			if (currentScrollPosition < 0) {
				return
			}

			if (
				route === 'auth-register' ||
				route === 'auth-login' ||
				route === 'product-id'
			) {
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

		onCartClick() {
			this.$store.commit('TOGGLE_SIDEBAR', {component: undefined})
		},
	},
}
</script>

<style scope>
#menu-toggle:checked + #menu {
	display: hidden;
}
</style>
