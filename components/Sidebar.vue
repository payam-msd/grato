<template>
	<div
		id="sidebar"
		class="fixed inset-y-0 w-11/12 lg:w-2/5 z-40 bg-white shadow-2xl"
	>
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
				@click="$store.commit('TOGGLE_SIDEBAR', {component: undefined})"
			>
				{{ 'بررسی خرید' }}
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
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
		'sidebar.isActive'(isActive) {
			var _vm = this
			var body = document.body
			var bagButton = document.getElementById('bagButton')

			isActive
				? gsap.to(this.$el, {
						duration: 1,
						xPercent: 0,
						ease: 'power3.out',
						onStart() {
							bagButton.disabled = true
						},
						onComplete() {
							body.addEventListener('click', _vm.closeEvent)
							bagButton.disabled = false
						},
				  })
				: gsap.to(this.$el, {
						xPercent: 100,
						ease: 'power1',
						onStart() {
							body.removeEventListener('click', _vm.closeEvent)
							bagButton.disabled = true
						},
						onComplete() {
							bagButton.disabled = false
						},
				  })
		},
	},

	mounted() {
		gsap.set(this.$el, {
			immediateRender: true,
			xPercent: 100,
		})
	},

	methods: {
		closeEvent(e) {
			const clickedOutside = !e.target.closest('#sidebar')
			if (clickedOutside && this.sidebar.isActive) {
				this.$store.commit('TOGGLE_SIDEBAR', {component: undefined})
			}
		},
	},
}
</script>

<style></style>
