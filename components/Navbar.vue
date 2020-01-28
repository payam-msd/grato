<template>
	<div class="relative">
		<nav id="navbar" class="flex flex-wrap items-center bg-white w-screen h-32">
			<div
				class="flex justify-between items-center container mx-auto px-4 lg:px-6"
			>
				<!-- DROWDOWN  -->
				<NavCategories />
				<!-- /DROWDOWN	  -->

				<nuxt-link
					class="lg:hidden text-3xl self-end text-green-800 font-dana-bold "
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
		</nav>
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
			isProtected: false,
		}
	},

	computed: {
		...mapGetters(['isAuthenticated']),
		...mapState(['cart']),
	},

	watch: {
		isNavbarFixed(isFixed) {
			const nav = document.querySelector('#navbar')
			const isMobile = this.$breakpoint === 'sm'

			isFixed && !this.isProtected
				? gsap.to('#navbar', {
						duration: 0.25,
						ease: 'circ',
						height: isMobile ? '5rem' : '6rem',
						onStart() {
							nav.parentNode.style.height = nav.offsetHeight + 'px'
							nav.classList.add(
								'fixed',
								'shadow-lg',
								'rounded-b',
								'inset-x-0',
								'top-0',
								'z-20',
							)
						},
				  })
				: gsap.to('#navbar', {
						duration: 0.25,
						ease: 'circ',
						height: isMobile ? '6rem' : '9rem',
						onStart() {
							nav.parentNode.style.height = 'auto'
							nav.classList.remove(
								'fixed',
								'shadow-lg',
								'rounded-b',
								'inset-x-0',
								'top-0',
								'z-20',
							)
						},
				  })
		},
	},

	mounted() {
		window.addEventListener('scroll', this.fixNavbar)
		this.$on('hook:beforeDestroy', () => {
			window.removeEventListener('scroll', this.fixNavbar)
		})
	},

	methods: {
		fixNavbar() {
			const currentRoute = this.$route.name
			const notif = document.querySelector('#notif')
			this.isProtected = false

			if (
				['auth-register', 'auth-login', 'product-id'].includes(currentRoute)
			) {
				this.isProtected = true
			}

			window.scrollY >= notif.offsetHeight
				? (this.isNavbarFixed = true)
				: (this.isNavbarFixed = false)
		},
		onCartClick() {
			this.$store.commit('TOGGLE_SIDEBAR')
		},
	},
}
</script>

<style scope></style>
