<template>
	<div v-click-listener="handleClickOutSide" @click="toggle">
		<slot />
	</div>
</template>

<script>
export default {
	provide() {
		return {
			sharedState: this.sharedState,
		}
	},

	data() {
		return {
			sharedState: {
				active: false,
			},
		}
	},

	methods: {
		toggle() {
			this.sharedState.active = !this.sharedState.active
		},
		handleClickOutSide() {
			this.sharedState.active = false
		},
	},
}
</script>

<style scoped></style>
