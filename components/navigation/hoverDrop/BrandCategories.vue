<template>
	<div>
		<div
			class="block cursor-pointer"
			@mouseenter="sharedState.active = !sharedState.active"
		>
			<IconMenu class="inline w-8 lgLw-6" />
			<a
				href="#"
				class="hidden lg:inline text-gray-800 pl-3 word-2-space cursor-none"
			>
				{{ 'دسته بندی کالاها' }}
			</a>
			<IconLine
				class="hidden lg:inline w-6 inline"
				transform="rotate( 90, 0, 0 ) scale(1.5,1)"
			/>
		</div>
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
