<template>
	<div
		class="h-full bg-gray-300 flex flex-col lg:flex-row items-center py-32 my-64 lg:my-0"
		style="height:80vh"
	>
		<div class="container mx-auto px-4 lg:px-6">
			<div class="flex flex-col-reverse lg:flex-row bg-white">
				<div class="w-full lg:w-2/3" style="height: 50vh">
					<img
						class="w-full h-full object-cover"
						src="https://source.unsplash.com/tdMu8W9NTnY"
						alt
					/>
				</div>
				<div class="w-full lg:w-1/3 p-24">
					<h2>{{ 'محصولات اپل' }}</h2>
					<p class="py-6">
						{{ 'کیفیت و کارایی همراه با ضمانت ۲ ساله از شرکت های معتبر' }}
					</p>
					<nuxt-link to="/page">
						<div class="inline-flex items-center tertiary-btn text-base">
							<a>{{ 'ادامه محصولات' }}</a>
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
