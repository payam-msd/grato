<template>
	<div class="bg-rose-100">
		<div class="container mx-auto px-4 lg:px-6 py-24">
			<h1 class="text-center">{{ 'تلاش ما براوردن بهترین تجربه خرید است' }}</h1>
			<div class="present-grid py-24">
				<nuxt-link
					to="/
				"
				>
					<div class="w-full h-present pb-20 lg:pb-0">
						<img
							class="w-full h-full object-cover"
							src="https://source.unsplash.com/collection/4408389/1600x900"
							alt
						/>
						<div class="inline-flex w-auto border-b border-black">
							<p>{{ 'خرید سامسونگ' }}</p>
							<IconCheveronLeft transform="rotate(90, 0 ,0)" class="w-7" />
						</div>
					</div>
				</nuxt-link>
				<nuxt-link to="/">
					<div class="w-full h-present">
						<img
							class="w-full h-full object-cover"
							src="https://source.unsplash.com/collection/795176/1600x900/"
							alt
						/>
						<div class="inline-flex w-auto border-b border-black">
							<p>{{ 'خرید هواوی' }}</p>
							<IconCheveronLeft
								transform="rotate(90, 0 ,0)"
								class="inline w-7"
							/>
						</div>
					</div>
				</nuxt-link>
			</div>
			<nuxt-link to="/">
				<div class="w-full lg:w-present-w h-present-2 lg:h-78">
					<img
						class="w-full h-full object-cover"
						src="https://source.unsplash.com/collection/4585094/1600x900"
						alt
					/>
					<div class="inline-flex w-auto border-b border-black">
						<p>{{ 'خرید ایفون' }}</p>
						<IconCheveronLeft transform="rotate(90, 0 ,0)" class="inline w-7" />
					</div>
				</div>
			</nuxt-link>
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

<style scoped>
.present-grid {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-column-gap: 10%;
}
@screen lg {
	.present-grid {
		display: grid;
		grid-template-columns: repeat(2, 45%);
		grid-template-rows: 1fr;
		grid-column-gap: 10%;
	}
}
</style>
