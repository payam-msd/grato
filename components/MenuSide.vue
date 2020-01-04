<template>
	<div
		id="menu"
		class="fixed z-40 inset-y-0 right-0 w-11/12 h-screen bg-white shadow-2xl"
	>
		<div class="w-full p-6 ">
			<Close class="w-12" @click="$store.commit('TOGGLE_MENU')" />
		</div>

		<div
			class="w-full h-full overflow-y-scroll overflow-x-hidden flex flex-col items-stretch justify-start px-6"
		>
			<nuxt-link
				v-for="item in items"
				:key="item.id"
				class="py-3 text-lg text-black"
				:to="item.route"
			>
				{{ item.name }}
			</nuxt-link>

			<div class="thin-line my-3" />

			<div class="my-3">
				<nuxt-link
					v-for="item in items2"
					:key="item.id"
					class="py-3 text-gray-800 block"
					:to="item.route"
				>
					{{ item.name }}
				</nuxt-link>
			</div>

			<div class="thin-line my-3" />

			<nuxt-link
				v-for="item in items3"
				:key="item.id"
				class="py-3 text-gray-800"
				:to="item.route"
			>
				{{ item.name }}
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Close from '~/assets/svg/icons/icon-close.svg'
export default {
	components: {
		Close,
	},
	data() {
		return {
			items: [
				{
					id: 1,
					name: 'تخفیفات استثنایی',
					route: '/special_offers',
				},
				{
					id: 2,
					name: 'پرفروش ها',
					route: '/bestsellers',
				},
				{
					id: 3,
					name: 'تازه رسیده ها',
					route: '/latest',
				},
				{
					id: 4,
					name: 'متفرقه',
					route: '/',
				},
			],
			items2: [
				{
					id: 1,
					name: 'سبد خرید',
					route: '/cart',
				},
				{
					id: 2,
					name: 'تمامی محصولات',
					route: '/products',
				},
				{
					id: 3,
					name: 'متفرقه',
					route: '/',
				},
				{
					id: 4,
					name: 'داستان ما',
					route: '/story',
				},
			],
			items3: [
				{
					id: 1,
					name: 'ورود',
					route: '/auth/login',
				},
				{
					id: 2,
					name: 'راهنمایی نیاز دارید؟',
					route: '/help',
				},
				{
					id: 3,
					name: 'تماس با ما',
					route: '/contact',
				},
			],
		}
	},
	computed: {
		...mapState(['menu']),
	},

	watch: {
		'menu.isActive'(isActive) {
			var _vm = this
			var body = document.body
			var menuButton = document.getElementById('menuButton')

			isActive
				? gsap.to(this.$el, {
						duration: 1,
						xPercent: 0,
						ease: 'power3.out',
						onStart() {
							menuButton.disabled = true
						},
						onComplete() {
							body.addEventListener('click', _vm.closeEvent)
							menuButton.disabled = false
						},
				  })
				: gsap.to(this.$el, {
						xPercent: 100,
						ease: 'power1',
						onStart() {
							body.removeEventListener('click', _vm.closeEvent)
							menuButton.disabled = true
						},
						onComplete() {
							menuButton.disabled = false
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
			const clickedOutside = !e.target.closest('#menu')
			if (clickedOutside && this.menu.isActive) {
				this.$store.commit('TOGGLE_MENU')
			}
		},
	},
}
</script>

<style scoped></style>
