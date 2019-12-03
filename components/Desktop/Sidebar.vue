<template>
	<div
		id="sidebar"
		class="fixed inset-y-0 w-11/12 lg:w-sidebar z-50 bg-white shadow-2xl"
	>
		<Notification class="shadow-inner" />

		<div
			class="w-full h-full overflow-y-auto flex flex-col justify-start
            items-stretch px-6 lg:px-16 pb-16"
		>
			<SidebarContent />

			<div class="flex justify-between py-8">
				<p>جمع کل :</p>
				<span>{{ cart.sum | currency }}</span>
			</div>
			<nuxt-link class="btn btn--lg" to="payment/checkout">
				{{ 'بررسی خرید' }}
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import SidebarContent from '~/components/Desktop/SidebarContent'
import Notification from '~/components/Desktop/notification/SidebarNotif'

export default {
	components: {
		Notification,
		SidebarContent,
	},

	computed: {
		...mapState(['sidebar', 'cart']),
	},
	watch: {
		'$route'(to, from) {
			document.body.classList.remove('overflow-y-hidden')
		},
		'sidebar.isActive'(isActive) {
			const direction = isActive ? 0 : this.$el.offsetWidth
			const _vm = this

			if (isActive && this.cart.cartItems === undefined) {
				this.$store.dispatch('GET_CART_DATA')
			}

			gsap.delayedCall(0.25, () => {
				isActive
					? document.body.classList.add('overflow-y-hidden')
					: document.body.classList.remove('overflow-y-hidden')
			})

			gsap.to(this.$el, {
				duration: 0.75,
				x: direction,
				ease: 'power1.out',
				onComplete() {
					isActive
						? document.body.addEventListener('click', _vm.closeEvent)
						: document.body.removeEventListener('click', _vm.closeEvent)
				},
			})
		},
	},
	beforeRouteLeave(from, to, next) {
		this.$store.commit('TOGGLE_SIDEBAR', {component: undefined})
		next()
	},
	mounted() {
		gsap.set(this.$el, {
			x: this.$el.offsetWidth,
		})
	},

	methods: {
		closeEvent(e) {
			const clickedOutside = !e.target.closest('#sidebar')
			if (clickedOutside) {
				this.$store.commit('TOGGLE_SIDEBAR', {
					component: undefined,
				})
			}
		},
	},
}
</script>

<style></style>
