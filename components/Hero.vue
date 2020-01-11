<template>
	<div class="hero-grid ">
		<div class="w-full relative " style="height:82vh">
			<img
				class="w-full h-full object-cover"
				src="https://source.unsplash.com/HY3l4IeOc3E"
				alt
			/>
			<nuxt-link
				class="absolute inset-x-center  bottom-0 mb-6 tertiary-btn text-base lg:hidden"
				to="/"
			>
				{{ 'مجموعه محصولات اپل' }}
				<CheveronLeft
					transform="rotate(90, 0 ,0)"
					class="icon w-8 -mr-1"
					stroke-width="3"
				/>
			</nuxt-link>
		</div>

		<div class="hidden relative w-full  lg:block" style="height:82vh">
			<img
				class="w-full h-full object-cover"
				src="https://source.unsplash.com/v8BDEj9bfcs"
				alt
			/>

			<div class="w-1/2 absolute top-0 left-0 p-8 mt-24">
				<h5>
					{{ product }}
				</h5>

				<nuxt-link class="tertiary-btn" to="/somewhere">
					{{ link }}
					<CheveronLeft
						transform="rotate(90, 0 ,0)"
						class="icon w-6 -mr-1"
						stroke-width="3"
					/>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import CheveronLeft from '~/assets/svg/icons/icon-cheveron-down.svg'

export default {
	components: {
		CheveronLeft,
	},

	data() {
		return {
			product: 'زیبایی در کمال نهفته است',
			link: 'بررسی تخصصی APPLE WATCH 4',
		}
	},
}
</script>

<style scoped>
.hero-grid {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-column-gap: 6px;
	grid-row-gap: 0px;
}

@screen lg {
	.hero-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 6px;
		grid-row-gap: 0px;
	}
}
</style>
