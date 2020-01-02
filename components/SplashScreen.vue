<template>
	<div v-show="loader" class="fixed inset-0 z-50 w-screen h-screen bg-gray-100">
		<div class="w-full h-full flex items-center justify-center">
			<svg
				id="circles"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				class="w-24 h-24 text-center fill-current text-gray-900"
				viewBox="0 0 100 100"
				enable-background="new 0 0 0 0"
				xml:space="preserve"
			>
				<circle stroke="none" cx="65" cy="50" r="6" />
				<circle stroke="none" cx="50" cy="50" r="6" />
				<circle stroke="none" cx="35" cy="50" r="6" />
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		loader: {
			type: Boolean,
			default: true,
		},
	},

	mounted() {
		var _vm = this
		var tl = gsap.timeline().to('#circles circle', {
			opacity: 0,
			immediateRender: true,
			repeat: 3,
			yoyo: true,
			stagger: 0.1,
			onComplete() {
				tl.to(_vm.$el, {autoAlpha: 0})
			},
		})
	},
}
</script>

<style scoped></style>
