<template>
	<div>
		<button id="menuButton" class="lg:hidden w-2.2 block" @click="onMenuClick">
			<IconMenu />
		</button>
		<div
			class="block cursor-pointer"
			@mouseenter="sharedState.active = !sharedState.active"
		>
			<IconMenu class="w-8 hidden lg:inline" />
			<a
				href="#"
				class="hidden lg:inline text-gray-800 pl-3 word-2-space cursor-none"
			>
				{{ 'دسته بندی کالاها' }}
			</a>
			<IconLine
				class="hidden lg:inline w-8"
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

	methods: {
		onMenuClick() {
			this.$store.commit('TOGGLE_MENU')
		},
	},

	computed: {
		...mapGetters(['navbarMenu', 'navbarSubMenu']),
	},
}
</script>

<style scoped></style>
