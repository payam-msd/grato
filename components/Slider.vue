<template>
	<div
		class="h-full lg:h-special bg-gray-200 flex flex-col lg:flex-row items-center"
	>
		<div class="container mx-auto px-4 lg:px-6">
			<div class="flex flex-col-reverse lg:flex-row bg-white">
				<div class="w-full h-prop lg:w-2/3 lg:h-slider">
					<img
						class="w-full h-full object-cover"
						src="https://source.unsplash.com/collection/4408389/1600x900"
						alt
					/>
				</div>
				<div class="w-full lg:w-1/3 px-4 lg:px-24 lg:mr-6 py-8 lg:py-16">
					<h2>{{ 'سامسونگ' }}</h2>
					<p class="py-6">
						{{ 'کیفیت و کارایی همراه با ضمانت ۲ ساله از شرکت های معتبر' }}
					</p>
					<nuxt-link to="/page">
						<div class="inline-flex w-auto border-b border-black">
							<a>{{ 'خرید سامسونگ' }}</a>
							<IconCheveronLeft transform="rotate(90, 0 ,0)" class="w-7" />
						</div>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconCheveronLeft from '~/assets/svg/icons/icon-cheveron-down.svg'
export default {
	components: {
		IconCheveronLeft,
	},
}
</script>

<style scoped></style>
