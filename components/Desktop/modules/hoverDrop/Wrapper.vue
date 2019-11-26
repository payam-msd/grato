<template>
	<transition name="navbar-dropdown">
		<div
			v-show="active"
			class="absolute inset-x-0 top-0 mt-24 z-30 w-11/12 mr-19 h-special-wrapper bg-white shadow-2xl border border-gray-300 rounded"
		>
			<div v-click-listener="handleClickOutSide" class="w-full h-full">
				<slot name="menu" />
				<slot name="subMenu" />
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'HoverWrapper',
	inject: ['sharedState'],

	computed: {
		active() {
			return this.sharedState.active
		},
	},

	methods: {
		handleClickOutSide() {
			this.sharedState.active = false
		},
	},
}
</script>

<style scoped>
.navbar-dropdown-enter-active,
.navbar-dropdown-leave-active {
	transition: all 0.2s;
}
.navbar-dropdown-enter,
.navbar-dropdown-leave-to {
	opacity: 0;
	transform: translateY(-5px);
}
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr) 30%;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}
.subGrid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}
</style>
