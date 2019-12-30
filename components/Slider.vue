<template>
	<div
		class="h-full lg:h-special bg-gray-300 flex flex-col lg:flex-row items-center"
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
				<div class="w-full lg:w-1/3 p-24">
					<h1>{{ 'سامسونگ' }}</h1>
					<p class="text-lg py-6">
						{{ 'کیفیت و کارایی همراه با ضمانت ۲ ساله از شرکت های معتبر' }}
					</p>
					<nuxt-link to="/page">
						<div class="inline-flex items-center tertiary-btn text-base">
							<a>{{ 'خرید سامسونگ' }}</a>
							<IconLeftArrow class="mr-1" />
						</div>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconLeftArrow from '~/assets/svg/left-arrow.svg'
export default {
	components: {
		IconLeftArrow,
	},
}
</script>

<style scoped></style>
