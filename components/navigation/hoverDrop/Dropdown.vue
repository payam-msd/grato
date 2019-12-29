<template>
	<transition name="navbar-dropdown">
		<div
			v-show="isActive"
			v-click-listener="onClickOutside"
			:class="[isNavbarFixed ? 'special-margin-true' : 'special-margin-false']"
			class="absolute inset-y-auto z-50 dropdown-props"
		>
			<div class="relative bg-white category-props overflow-hidden ">
				<slot name="category" />
				<slot name="subCaregories" />
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
	margin-top: 1.6rem;
}
.special-margin-false {
	margin-top: 2.6rem;
}
.dropdown-props {
	width: calc(100vw - 10%);
	height: calc(100vh - 25%);
}
.category-props {
	height: calc(100vh - 25%);
}
</style>
