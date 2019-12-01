<template>
	<div
		class="w-full h-full overflow-y-auto flex flex-col justify-start items-stretch px-4"
	>
		<SidebarContent />

		<div class="flex py-8 justify-between">
			<p>جمع کل :</p>
			<span>{{ sumOfList | numeral('0,0') }}</span>
		</div>

		<nuxt-link
			tag="a"
			role="button"
			tabindex="0"
			v-if="$route.params.id === undefined"
			class="btn btn--lg"
			to="payment/checkout"
		>
			{{ 'بررسی خرید' }}
		</nuxt-link>
		<nuxt-link
			v-else
			tag="a"
			role="button"
			tabindex="0"
			class="btn btn--lg"
			:to="{
				name: 'payment-checkout',
				query: {redirect: `/product/${$route.params.id}`},
			}"
		>
			{{ 'بررسی خرید' }}
		</nuxt-link>
	</div>
</template>

<script>
import SidebarContent from '~/components/Desktop/SidebarContent'
export default {
	components: {
		SidebarContent,
	},
}
</script>

<style scoped></style>
