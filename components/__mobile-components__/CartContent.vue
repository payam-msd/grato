<template>
	<div
		class="w-full h-full overflow-y-auto flex flex-col justify-start items-stretch px-4"
	>
		<SidebarContent />

		<div class="flex py-8 justify-between">
			<p>جمع کل :</p>
			<span>{{ sumOfList | currency }}</span>
		</div>

		<nuxt-link class="btn btn-lg" to="/payment/checkout">
			{{ 'بررسی خرید' }}
		</nuxt-link>
	</div>
</template>

<script>
import SidebarContent from '~/components/SidebarContent'
export default {
	components: {
		SidebarContent,
	},
	computed: {
		sumOfList() {
			return this.$store.state.cart.sum
		},
	},
}
</script>

<style scoped></style>
