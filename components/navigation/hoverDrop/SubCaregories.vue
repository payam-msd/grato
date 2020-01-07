<template>
	<div class="absolute left-0 top-0 w-3/4 bg-white p-2 shadow-inner">
		<div v-for="(num, i) in 20" v-show="hoveredItem === i" :key="i">
			<nuxt-link to="/page">
				لیست محصولات شماره
				{{ num }}
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		hoveredItem: {
			type: Number,
			default: 0,
		},
	},
}
</script>

<style scoped></style>
