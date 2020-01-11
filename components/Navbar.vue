<template>
	<div class="relative h-24 lg:h-32">
		<header
			class="z-20 bg-white flex flex-wrap items-center"
			:class="[
				isNavbarFixed
					? 'fixed inset-auto w-full h-20 lg:h-24 top-0 shadow-lg rounded-b'
					: 'relative h-24 lg:h-32 ',
			]"
		>
			<div
				class="flex justify-between items-center container mx-auto px-4 lg:px-6"
			>
				<!-- DROWDOWN  -->
				<NavCategories />
				<!-- /DROWDOWN	  -->

				<nuxt-link
					class="lg:hidden text-3xl self-end text-green-800 font-dana-bold"
					to="/"
				>
					{{ 'گراتو' }}
				</nuxt-link>

				<div class="w-auto flex items-center justify-end">
					<!-- <profile v-if="isAuthenticated" /> -->

					<nuxt-link
						v-if="isAuthenticated"
						class="hidden lg:block secondary-btn mt-1 text-gray-900 word-space-relaxed"
						to="/auth/profile"
					>
						{{ 'حساب کاربری' }}
					</nuxt-link>
					<nuxt-link
						v-else
						class="text-gray-800 py-3 lg:py-4 rounded block px-3 lg:px-6 lg:border lg:border-gray-500 lg:hover:border-black "
						to="/auth/login"
					>
						<a class="hidden lg:block">
							{{ 'ورود به حساب کاربری' }}
						</a>
					</nuxt-link>

					<thinLine
						class="w-8 h-full lg:mx-1 mt-1 hidden lg:block"
						transform="rotate( 90, 0, 0 ) scale(1.5,1)"
					/>

					<button
						id="bagButton"
						class="relative flex items-end"
						@click="onCartClick"
					>
						<div class="w-2.2">
							<BagIcon />
						</div>

						<div
							v-show="cart.inCart"
							class="absolute inset-x-center w-6 h-6 text-white rounded-full text-sm font-dana-bold justify-center leading-extreme"
						>
							{{ cart.inCart }}
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
// import profile from '~/components/navigation/profile/Dropdown'
import BagIcon from '~/assets/svg/icons/icon-shopping-bag.svg'
// import IconUser from '~/assets/svg/icons/icon-user.svg'
import thinLine from '~/assets/svg/icons/icon-remove.svg'
export default {
	components: {
		// profile,
		NavCategories,
		BagIcon,
		thinLine,
		// IconUser,
	},

	data() {
		return {
			isNavbarFixed: false,
			lastScrollPosition: 700,
		}
	},

	computed: {
		...mapGetters(['isAuthenticated']),
		...mapState(['cart']),
	},

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
			this.$store.commit('TOGGLE_SIDEBAR')
		},
	},
}
</script>

<style scope></style>
