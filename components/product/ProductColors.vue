<template>
	<Swatches
		v-model="color"
		:colors="productColors"
		background-color
		inline
		shapes="circles"
		swatch-size="30"
	/>
</template>

<script>
import Swatches from 'vue-swatches/src/Swatches.vue'
export default {
	components: {
		Swatches,
	},
	props: ['productColors'],
	data() {
		return {
			color: '',
		}
	},
	watch: {
		color(newValue) {
			this.$emit('onUpdateActive', newValue)
		},
	},
}
</script>
