<template>
	<div
		v-show="isActive"
		class="absolute z-50 inset-x-center"
		style="top: 100%; width:91%; height:75vh"
		@mouseleave="onClickOutside"
	>
		<div class="w-full h-full relative bg-white overflow-hidden ">
			<slot name="category" />
			<slot name="subCaregories" />
		</div>
	</div>
</template>

<script>
export default {
	inject: ['sharedState'],

	computed: {
		isActive() {
			return this.sharedState.active
		},
	},

	methods: {
		onClickOutside() {
			return (this.sharedState.active = false)
		},
	},
}
</script>

<style scoped></style>
