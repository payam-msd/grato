<template>
	<div class="h-special bg-gray-200 flex items-center">
		<div class="container mx-auto px-6">
			<div class="flex bg-white">
				<div class="w-2/3 h-slider">
					<img class="w-full h-full object-cover" src="https://source.unsplash.com/random" alt />
				</div>
				<div class="w-1/3 px-24 mr-6 py-16">
					<h2>{{"سامسونگ"}}</h2>
					<p class="py-6">{{"کیفیت و کارایی همراه با ضمانت ۲ ساله از شرکت های معتبر"}}</p>
					<nuxt-link to="/page">
						<div class="inline-flex w-auto border-b border-black">
							<a>{{"خرید سامسونگ"}}</a>
							<IconCheveronLeft class="w-7" />
						</div>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconCheveronLeft from '~/assets/svg/icons/icon-cheveron-left-circle.svg'
export default {
	components: {
		IconCheveronLeft,
	},
}
</script>

<style scoped>
</style>