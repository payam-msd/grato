<template>
	<div class="ml-auto hidden lg:block">
		<Title>
			<a slot="title">
				{{ title1 }}
			</a>
			<Wrapper slot="wrapper">
				<Menu slot="menu" :items="navbarMenu" @activateSubMenu="handleID" />

				<SubMenu :id="id" :items="navbarSubMenu" slot="subMenu" />
			</Wrapper>
		</Title>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Wrapper from '~/components/Desktop/modules/hoverDrop/Wrapper'
import Menu from '~/components/Desktop/modules/hoverDrop/Menu'
import SubMenu from '~/components/Desktop/modules/hoverDrop/SubMenu'
import Title from '~/components/Desktop/modules/hoverDrop/Title'
export default {
	components: {
		Wrapper,
		Menu,
		SubMenu,
		Title,
	},

	data() {
		return {
			title1: 'دسته بندی برند ها',
			title2: 'دسته بندی لوازم جانبی',
			id: 0,
		}
	},

	computed: {
		...mapGetters(['navbarMenu', 'navbarSubMenu']),
	},

	methods: {
		handleID(id) {
			this.id = id
		},
	},
}
</script>

<style scoped></style>
