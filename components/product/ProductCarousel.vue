<template>
	<div class="relative">
		<!--  MAIN BG -->
		<div class="relative w-full h-special">
			<div class="bg-cover bg-cover bg-no-repeat h-full w-full" :style="bgi(currentSlide)"></div>

			<!-- ARROW BUTTONS -->
			<div>
				<a class="absolute left-0 inset-center">
					<IconCheveronLeft transform="rotate(90, 0 ,0)" class="w-10" />
				</a>
			</div>
			<div>
				<a class="absolute right-0 inset-center">
					<IconCheveronLeft transform="rotate(-90, 0 ,0)" class="w-10" />
				</a>
			</div>
			<!--/ ARROW BUTTONS -->
		</div>

		<!-- /MAIN BG -->
		<!-- SLIDE PREVIEWS -->
		<div class="h-auto w-full flex justify-center my-4">
			<template v-for="(img, index) in images">
				<a
					:key="index"
					@click.prevent="handleClick(index)"
					:class="{ 'selected': index === next}"
					class="w-32 h-32 opacity-75 object-scale-down bg-cover mx-2 focus:outline-none focus:border-2 focus:border-black"
					href="#"
					:style="bgi(img)"
				></a>
			</template>
		</div>
	</div>
</template>

<script>
import IconCheveronLeft from '~/assets/svg/icons/icon-cheveron-down.svg'
export default {
	components: {
		IconCheveronLeft,
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
		smoothChange() {
			setTimeout(() => {
				this.current = this.next
			}, 400)
		},
	},
}
</script>

<style scoped>
</style>