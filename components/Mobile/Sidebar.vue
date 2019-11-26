<template>
	<div class="fixed w-4/5 bg-red-500 h-screen z-50">
		<component :is="sidebar.sidebarContent" />
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	computed: {
		...mapState(['sidebar']),
	},

	watch: {
		'sidebar.isActive'(isActive) {
			const tl = gsap
			const direction = isActive ? 0 : this.$el.offsetWidth
			tl.to(this.$el, {
				duration: 0.75,
				x: direction,
				ease: 'power2.In',
			})
		},
	},

	mounted() {
		gsap.set(this.$el, {
			x: this.$el.offsetWidth,
		})
	},
}
</script>

<style scoped></style>
