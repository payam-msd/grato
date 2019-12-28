<template>
	<transition name="navbar-dropdown">
		<div
			v-click-listener="onClickOutside"
			v-show="isActive"
			:class="[isNavbarFixed ? 'special-margin-true' : 'special-margin-false']"
			class="absolute inset-y-auto z-50 mx-auto"
			style="width: calc(100vw - 10%); height:calc(100vh - 25%);"
		>
			<div class="bg-white p-3 shadow-inner" style="height: calc(100vh - 25%)">
				<a href="#">test</a>
				<a href="#">test</a>
				<a href="#">test</a>
				<a href="#">test</a>
				<a href="#">test</a>
				<a href="#">test</a>
				<a href="#">test</a>
				<a href="#">test</a>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	inject: ['sharedState'],

	props: {
		isNavbarFixed: {
			type: Boolean,
			default: false,
		},
	},
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
.special-margin-true {
	margin-top: 3.2rem;
}
.special-margin-false {
	margin-top: 4.2rem;
}
</style>
