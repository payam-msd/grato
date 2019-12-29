<template>
	<div :class="{'mt-20 lg:mt-32': isNavbarFixed}" class="hero-grid">
		<div class="w-full h-special">
			<img
				class="w-full h-full object-cover"
				src="https://source.unsplash.com/collection/962362/"
				alt
			/>
		</div>

		<div class="hidden relative w-full h-special lg:block">
			<img
				class="w-full h-full object-cover"
				src="https://source.unsplash.com/Q0oo_CeBfUY"
				alt
			/>

			<div
				class="w-1/2 absolute bottom-0 left-0 p-8 mb-24 bg-rose-100 rounded-r"
			>
				<h3>
					{{ product }}
				</h3>
				<nuxt-link class="tertiary-btn" to="/somewhere">
					{{ link }}
					<CheveronLeft
						transform="rotate(90, 0 ,0)"
						class="icon w-7"
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
			isNavbarFixed: false,
			lastScrollPosition: 55,
			product: 'زیبایی در کمال نهفته است',
			link: 'بررسی تخصصی +NOTE 10',
		}
	},

	mounted() {
		window.addEventListener('scroll', this.onscroll)
	},

	beforeDestroy() {
		window.removeEventListener('scroll', this.onscroll)
	},

	methods: {
		onscroll() {
			const currentScrollPosition =
				window.pageYOffset || document.documentElement.scrollTop
			// ? Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
			if (currentScrollPosition < 0) {
				return
			}
			// Here we determine whether we need to show or hide the navbar
			this.isNavbarFixed = currentScrollPosition > this.lastScrollPosition
		},
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
