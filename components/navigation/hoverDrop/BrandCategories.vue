<template>
	<div>
		<IconMenu class="inline w-6" />
		<a
			@mouseover="sharedState.active = !sharedState.active"
			href="#"
			class="text-gray-800 text-sm pl-3 word-2-space"
		>
			{{ 'دسته بندی کالاها' }}
		</a>
		<IconLine class="w-6 inline" transform="rotate( 90, 0, 0 ) scale(1.5,1)" />
		<slot name="dropdown" />
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import IconMenu from '~/assets/svg/icons/icon-menu.svg'
import IconLine from '~/assets/svg/icons/icon-remove.svg'
export default {
	provide() {
		return {
			sharedState: this.sharedState,
		}
	},

	components: {
		IconMenu,
		IconLine,
	},

	data() {
		return {
			sharedState: {
				active: false,
			},
		}
	},

	computed: {
		...mapGetters(['navbarMenu', 'navbarSubMenu']),
	},
}
</script>

<style scoped></style>
