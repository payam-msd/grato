<template>
	<div>
		<div class="absolute right-0 top-0 w-1/4 bg-gray-200 h-full	 shadow-inner">
			<div
				class="w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden py-2 category-props"
			>
				<template v-for="(num, i) in 20">
					<nuxt-link
						:key="i"
						class="w-full py-4 pr-2 rounded-r hover:bg-white "
						to="#"
						@mouseover.native="hoveredID = i"
					>
						{{ num }} محصول
					</nuxt-link>
				</template>
			</div>
		</div>
		<div class="h-8 w-1/4 absolute bottom-0">
			<IconCheveronDown class="w-7 mr-auto ml-2" />
		</div>
	</div>
</template>

<script>
import IconCheveronDown from '~/assets/svg/icons/icon-cheveron-down.svg'
export default {
	components: {
		IconCheveronDown,
	},
	data() {
		return {
			hoveredID: 0,
		}
	},

	watch: {
		hoveredID(newValue, oldValue) {
			this.$emit('category', newValue)
		},
	},
}
</script>

<style scoped>
.category-props {
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
}
.category-props::-webkit-scrollbar {
	width: 0 !important;
}
</style>
