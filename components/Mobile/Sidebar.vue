<template>
	<div id="sidebar" class="fixed w-4/5 bg-white h-screen shadow-2xl z-50">
		<Notification class="shadow-inner" />
		<component :is="sidebar.sidebarContent" />
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Notification from '~/components/Desktop/notification/SidebarNotif'
export default {
	components: {
		Notification,
	},

	computed: {
		...mapState(['sidebar']),
	},

	watch: {
		'sidebar.isActive'(isActive) {
			const tl = gsap
			const _vm = this
			const direction = isActive ? 0 : this.$el.offsetWidth
			tl.to(this.$el, {
				duration: 0.75,
				x: direction,
				ease: 'power2.In',
				onComplete() {
					isActive
						? document.body.addEventListener('click', _vm.closeEvent)
						: document.body.removeEventListener('click', _vm.closeEvent)
				},
			})
		},
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

<style scoped></style>
