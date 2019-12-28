<template>
	<!-- <div class=""> -->
	<div
		@mouseover="handleSharedState"
		class="props2 text-gray-800 text-sm cursor-pointer
                        overflow-hidden hover:text-black "
	>
		<MenuIcon class="inline w-7" />
		<slot name="title" />
	</div>
	<!-- <slot @mouseout="handleSharedState" name="wrapper" /> -->
	<!-- </div> -->
</template>

<script>
import MenuIcon from '~/assets/svg/icons/icon-menu.svg'

export default {
	provide() {
		return {
			sharedState: this.sharedState,
		}
	},

	components: {
		MenuIcon,
	},

	data() {
		return {
			sharedState: {
				active: false,
			},
		}
	},

	methods: {
		handleSharedState() {
			this.sharedState.active = !this.sharedState.active
		},
	},
}
</script>

<style scoped>
.props2 {
	word-spacing: -2px;
}
</style>
