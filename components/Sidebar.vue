<template>
	<div id="sidebar" class="fixed inset-y-0 w-11/12 lg:w-2/5 z-40 bg-white ">
		<Notification class="shadow-inner" />

		<div
			class="w-full h-full overflow-y-auto flex flex-col justify-start items-stretch px-6 lg:px-16 pb-16"
		>
			<SidebarContent />

			<div class="flex justify-between py-8">
				<p>جمع کل :</p>
				<span>{{ cart.sum | currency }}</span>
			</div>
			<nuxt-link
				class="btn btn-lg"
				to="/payment/checkout"
				@click="$store.commit('TOGGLE_SIDEBAR')"
			>
				{{ 'بررسی خرید' }}
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import SidebarContent from '~/components/SidebarContent'
import Notification from '~/components/notification/SidebarNotif'

export default {
	components: {
		Notification,
		SidebarContent,
	},

	computed: {
		...mapState(['sidebar', 'cart']),
	},

	watch: {
		/* eslint-disable no-unused-vars */
		'sidebar.isActive'(isActive) {
			var isMobile = window.innerWidth < 1024

			isActive
				? isMobile
					? this.sidebarAnimMobileOpen()
					: this.sidebarAnimDesktopOpen()
				: isMobile
				? this.sidebarAnimMobileClose()
				: this.sidebarAnimDesktopClose()
		},
	},

	mounted() {
		var isMobile = window.innerWidth < 1024
		if (isMobile) {
			gsap.set(this.$el, {
				immediateRender: true,
				left: 0,
				xPercent: -100,
			})
		} else {
			gsap.set(this.$el, {
				immediateRender: true,
				right: 0,
				xPercent: 100,
			})
		}
	},

	methods: {
		sidebarAnimDesktopOpen() {
			var _vm = this
			var bagButton = document.getElementById('bagButton')
			var body = document.body

			return gsap.timeline().to(this.$el, {
				duration: 1,
				xPercent: 0,
				ease: 'power3.out',
				onStart() {
					bagButton.disabled = true
				},
				onComplete() {
					body.addEventListener('click', _vm.closeEvent)
					disableBodyScroll(body)
					bagButton.disabled = false
				},
			})
		},

		sidebarAnimDesktopClose() {
			var _vm = this
			var bagButton = document.getElementById('bagButton')
			var body = document.body

			return gsap.timeline().to(this.$el, {
				xPercent: 100,
				ease: 'power1',
				onStart() {
					body.removeEventListener('click', _vm.closeEvent)
					enableBodyScroll(body)
					bagButton.disabled = true
				},
				onComplete() {
					bagButton.disabled = false
					clearAllBodyScrollLocks(body)
				},
			})
		},

		sidebarAnimMobileOpen() {
			var _vm = this
			var bagButton = document.getElementById('bagButton')
			var body = document.body

			return gsap.timeline().to(this.$el, {
				duration: 1,
				xPercent: 0,
				ease: 'power3.out',
				onStart() {
					bagButton.disabled = true
				},
				onComplete() {
					body.addEventListener('click', _vm.closeEvent)
					disableBodyScroll(body)
					bagButton.disabled = false
				},
			})
		},

		sidebarAnimMobileClose() {
			var _vm = this
			var bagButton = document.getElementById('bagButton')
			var body = document.body

			return gsap.timeline().to(this.$el, {
				xPercent: -100,
				ease: 'power1',
				onStart() {
					body.removeEventListener('click', _vm.closeEvent)
					enableBodyScroll(body)
					bagButton.disabled = true
				},
				onComplete() {
					bagButton.disabled = false
					clearAllBodyScrollLocks(body)
				},
			})
		},

		closeEvent(e) {
			const clickedOutside = !e.target.closest('#sidebar')
			if (clickedOutside && this.sidebar.isActive) {
				this.$store.commit('TOGGLE_SIDEBAR')
			}
		},
	},
}
</script>

<style></style>
