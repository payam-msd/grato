<template>
	<div id="sidebar" class="fixed inset-y-0 w-sidebar z-50 bg-white shadow-2xl">
		<Notification class="shadow-inner" />

		<div
			class="w-full h-full overflow-y-auto flex flex-col justify-start items-stretch px-16"
		>
			<SidebarContent />

			<div class="flex pt-8 justify-between">
				<p>جمع کل :</p>
				<span>{{ sumOfList | numeral('0,0') }}</span>
			</div>

			<a
				role="button"
				tabindex="0"
				class="btn w-full py-4 mx-auto text-center"
				@click="
					$router.push({
						name: 'checkout',
						query: {
							redirect: `/product/${$route.params.id}`,
						},
					})
				"
			>
				{{ 'بررسی خرید' }}
			</a>
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
	data() {
		return {
			price: null,
		}
	},
	computed: {
		...mapState(['sidebar']),
	},
	watch: {
		'sidebar.isActive'(isActive) {
			const direction = isActive ? 0 : this.$el.offsetWidth
			const _vm = this

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
	beforeDestroy() {
		this.$store.commit('TOGGLE_SIDEBAR', {component: undefined})
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
