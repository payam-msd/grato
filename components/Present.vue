<template>
	<div class="bg-rose-100">
		<div class="container mx-auto px-4 lg:px-6 py-24">
			<h3 class="text-center lg:text-3xl">
				{{ 'تلاش ما براوردن بهترین تجربه خرید است' }}
			</h3>
			<div class="present-grid py-24">
				<nuxt-link
					to="/
				"
				>
					<div class="w-full pb-20 lg:pb-0" style="height: 85vh">
						<img
							class="w-full h-full object-cover"
							src="
							https://source.unsplash.com/9Eia3u2qsN0"
							alt
						/>
						<div
							class="inline-flex items-center tertiary-btn text-base lg:text-lg"
						>
							<p>
								{{ 'محصولات سامسونگ' }}
							</p>
							<IconCheveronLeft
								class="w-8 -mr-1"
								transform="rotate(90, 0 ,0)"
							/>
						</div>
					</div>
				</nuxt-link>
				<nuxt-link to="/">
					<div class="w-full" style="height: 85vh">
						<img
							class="w-full h-full object-cover"
							src="
							https://source.unsplash.com/70ku6P7kgmc
							"
							alt
						/>
						<div
							class="inline-flex items-center tertiary-btn text-base lg:text-lg"
						>
							<p>{{ 'محصولات هواوی' }}</p>
							<IconCheveronLeft
								class="w-8 -mr-1"
								transform="rotate(90, 0 ,0)"
							/>
						</div>
					</div>
				</nuxt-link>
			</div>
			<nuxt-link to="/">
				<div class="w-full" style="height: 55vh">
					<img
						class="w-full h-full object-cover object-left-bottom"
						src="https://source.unsplash.com/Nod1nQ0i5a0"
						alt
					/>
					<div
						class="inline-flex items-center tertiary-btn text-base lg:text-lg"
					>
						<p>{{ 'محصولات اپل' }}</p>
						<IconCheveronLeft class="w-8 -mr-1" transform="rotate(90, 0 ,0)" />
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
