<template>
	<div class="relative">
		<div class="block-image">
			<!-- Main image -->
			<div class="relative">
				<ProductMagnifier
					:url="currentSlide"
					:class="{'background-loading': bgLoading}"
					class="main-image"
				/>
				<!-- ARROW BUTTONS -->
				<div class="hidden lg:block w-full h-full">
					<a
						href="#"
						class="absolute inset-y-0 left-0 inline-flex items-center justify-center w-24 self-center"
						@click.prevent="onArrowLeft()"
					>
						<IconCheveronLeft class="w-32" transform="rotate(90, 0 ,0)" />
					</a>
					<a
						href="#"
						class="absolute inset-y-0 right-0 inline-flex items-center justify-center w-24 self-center"
						@click.prevent="onArrowRight()"
					>
						<IconCheveronLeft class="w-32" transform="rotate(-90, 0 ,0)" />
					</a>
				</div>
				<!--/ ARROW BUTTONS -->
			</div>
			<!-- /Main image -->

			<!-- Slides preview -->
			<div ref="swipeWrap" class="block-image-carousel swipe invisible">
				<div class="swipe-wrap lg:hidden">
					<div v-for="(image, index) in images" :key="index">
						<a
							:style="bgi(image)"
							:class="{'background-loading': itemsBgLoading}"
							href="#"
						/>
					</div>
				</div>
			</div>
			<!-- /Slides preview -->

			<!-- SLIDE PREVIEWS  (for mobile)-->
			<div
				class="h-auto w-full flex flex-row-reverse flex-wrap justify-center py-4"
			>
				<template v-for="(img, index) in images">
					<a
						ref="slide"
						:key="index"
						:class="{'border border-black opacity-75': index === current}"
						:style="bgi(img)"
						class="w-12 h-12 lg:w-20 lg:h-20 my-1 bg-cover mx-1"
						href="#"
						@click.prevent="onSlideClick(index)"
					/>
				</template>
			</div>
			<!--/ SLIDE PREVIEWS  (for mobile)-->
		</div>
	</div>
</template>
<script>
import Swipe from 'swipejs'
import ProductMagnifier from '~/components/product/productDetail/ProductMagnifier'
import IconCheveronLeft from '~/assets/svg/icons/icon-cheveron-down.svg'

export default {
	components: {
		ProductMagnifier,
		IconCheveronLeft,
	},
	swipe: null,
	props: {
		images: {
			type: Array,
			required: true,
			default: () => [],
		},
	},
	data() {
		return {
			// current slide id
			current: 0,
			// next slide id
			next: 0,
			// main image loading status
			bgLoading: true,
			// image pagination loading status
			itemsBgLoading: true,
			// is Swipe mode active
			swipeActive: false,
		}
	},
	computed: {
		/**
		 * Computed current slide image
		 * @returns {?String}
		 */
		currentSlide() {
			return this.images[this.current]
		},

		/**
		 * Computed styles of main image
		 */
		mainImageStyle() {
			return Object.assign({}, this.bgi(this.currentSlide))
		},
	},
	watch: {
		images() {
			// on images change -> gracefully move to the first slide
			this.onSlideClick(0)
		},
	},

	/**
	 * Fires on component ready state
	 */
	mounted() {
		this.smoothChange()
		this.smoothChangeItems()
		this.activateSwipe()
	},
	methods: {
		/**
		 * Fires on slide change in Swipe mode
		 * @param {Number} index Changed slide index
		 */
		onSwipe(index) {
			this.next = index
			this.smoothChange()
		},

		/**
		 * Shortcut for Background Image in css
		 */
		bgi(url) {
			return {
				backgroundImage: `url('${url}')`,
			}
		},

		/**
		 * Fires on next slide click
		 */
		onSlideClick(index) {
			// prevent change if slide already correct
			if (this.current === index || this.next === index) return

			this.next = index
			this.smoothChange()

			// call slide in swipe mode (if needed)
			if (this.swipeActive) {
				this.$options.swipe.slide(index, 300)
			}
		},

		/**
		 * Makes smooth change for current slide
		 */
		smoothChange() {
			this.bgLoading = true
			setTimeout(() => {
				this.current = this.next
				this.bgLoading = false
			}, 400)
		},

		/**
		 * Makes smooth change for preview icons
		 */
		smoothChangeItems() {
			this.itemsBgLoading = true
			setTimeout(() => {
				this.itemsBgLoading = false
			}, 400)
		},

		/**
		 * Activates Swipe mode (if possible)
		 */
		activateSwipe() {
			// prevent Swipe mode on big screens
			if (window.innerWidth > 1024) return

			// use Swipe lib and save instance to $options
			this.$options.swipe = new Swipe(this.$refs.swipeWrap, {
				speed: 300,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: this.onSwipe,
			})
			this.swipeActive = true
		},

		onArrowLeft() {
			setTimeout(() => {
				this.current++
				if (this.current > this.images.length - 1) return (this.current = 0)
			}, 400)
		},

		onArrowRight() {
			setTimeout(() => {
				this.current--
				if (this.current < 0) return (this.current = this.images.length - 1)
			}, 400)
		},
	},
}
</script>
<style>
.block-image {
	height: 100%;
	transition: right 0.3s ease-in-out;
}
.block-image .swipe-dots {
	display: none;
}
.block-image .main-image {
	display: block;
	height: 100%;
	width: 100%;
	background: no-repeat 50% 50%;
	background-size: cover;
	transition: opacity 0.4s ease-out;
}
.block-image .main-image.background-loading {
	opacity: 0;
}
.block-image .block-image-carousel {
	transition: transform 0.3s ease-in-out;
}

.block-image .block-image-carousel a {
	display: block;
	background: no-repeat center center;
	background-size: cover;
	transition: opacity 0.4s ease-out;
}

.block-image .block-image-carousel a.background-loading {
	opacity: 0;
}

.swipe,
.swipe-wrap {
	visibility: visible;
	height: 100%;
}
.swipe-wrap > div {
	float: left;
	width: 100%;
	position: relative;
}

@media screen and (max-width: 1023px) {
	.block-image {
		height: 650px;
	}
	.block-image .main-image {
		display: none;
	}
	.block-image .block-image-carousel {
		overflow: hidden;
		position: relative;
		top: auto;
		left: auto;
		width: 100%;
		height: 500px;
	}
	.block-image .block-image-carousel .swipe-wrap {
		position: relative;
		top: auto;
		left: auto;
		transform: none;
		height: 100%;
		width: 100%;
	}
	.block-image .block-image-carousel .swipe-wrap > div {
		height: 100%;
	}
	.block-image .block-image-carousel a {
		width: 100%;
		height: 100%;
		opacity: 1;
	}
}
</style>
