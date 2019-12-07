<template>
	<div class="relative w-full h-auto">
		<!--  MAIN BG -->
		<div class="w-full h-present">
			<ImageMagnifier :url="currentSlide" :scale="2.5" />
		</div>
		<!-- /MAIN BG -->

		<!-- SLIDE PREVIEWS -->
		<div class="h-full w-full flex flex-wrap justify-center my-4">
			<template v-for="(img, index) in images">
				<a
					:key="index"
					ref="slide"
					@click.prevent="handleClick(index)"
					:class="{'border border-black opacity-75': index === current}"
					class="w-20 h-20 my-1 bg-cover mx-1"
					href="#"
					:style="bgi(img)"
				></a>
			</template>
		</div>

		<!-- ARROW BUTTONS -->
		<div
			class="absolute inset-x-0 inset-y-center flex flex-row-reverse justify-between"
		>
			<a @click.prevent="handleArrowLeft()" href="#" class="w-20 self-center">
				<IconCheveronLeft transform="rotate(90, 0 ,0)" />
			</a>
			<a @click.prevent="handleArrowRight()" href="#" class="w-20 self-center">
				<IconCheveronLeft transform="rotate(-90, 0 ,0)" />
			</a>
		</div>
		<!--/ ARROW BUTTONS -->
	</div>
</template>

<script>
import ImageMagnifier from '~/components/product/ProductMagnifier'
import IconCheveronLeft from '~/assets/svg/icons/icon-cheveron-down.svg'
export default {
	components: {
		IconCheveronLeft,
		ImageMagnifier,
	},
	props: {
		images: {
			type: Array,
			required: true,
			default: () => [],
		},
	},
	data() {
		return {
			current: 0,
			next: 0,
			url:
				'https://images.unsplash.com/photo-1575446508869-cfde746c0239?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
		}
	},
	computed: {
		currentSlide(url) {
			return this.images[this.current]
		},
	},
	methods: {
		handleClick(index) {
			if (this.current === index || this.next === index) return

			this.next = index
			this.smoothChange()
		},
		setMainImage() {
			return this.bgi(this.currentSlide)
		},
		bgi(url) {
			return {
				backgroundImage: `url(${url})`,
			}
		},
		smoothChange(ArrowNext, ArrowBefore) {
			setTimeout(() => {
				this.current = this.next
			}, 400)
		},
		handleArrowLeft() {
			setTimeout(() => {
				this.current++
				if (this.current > this.images.length - 1) return (this.current = 0)
			}, 400)
		},
		handleArrowRight() {
			setTimeout(() => {
				this.current--
				if (this.current < 0) return (this.current = this.images.length - 1)
			}, 400)
		},
	},
}
</script>

<style scoped></style>
