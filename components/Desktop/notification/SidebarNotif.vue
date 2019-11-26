<template>
	<div
		class="relative flex justify-center items-center h-10 w-full bg-rose-100"
	>
		<p class="text-gray-900">{{ 'ارسال رایگان برای تهران' }}</p>

		<a
			role="button"
			tabindex="0"
			class="focus:outline-none focus:shadow-outline w-7 absolute left-0 rounded"
			@click="
				$store.commit('TOGGLE_SIDEBAR', {
					component: undefined,
				})
			"
		>
			<Close class="w-7" />
		</a>
	</div>
</template>

<script>
import Close from '~/assets/svg/icons/icon-close.svg'

export default {
	components: {
		Close,
	},
}
</script>

<style scoped></style>
