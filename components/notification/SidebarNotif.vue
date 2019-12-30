<template>
	<div
		class="relative flex justify-center items-center py-3 w-full h-auto bg-gray-200"
	>
		<h4 class="text-gray-900">{{ 'ارسال رایگان برای تهران' }}</h4>

		<button
			class="focus:outline-none w-8 absolute left-0 mx-3 "
			@click="
				$store.commit('TOGGLE_SIDEBAR', {
					component: undefined,
				})
			"
		>
			<Close class="w-8" />
		</button>
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
