<template>
	<ul class="w-64 bg-gray-100 h-auto pr-2 pt-1 overflow-y-scroll props">
		<li
			v-for="(title, i) in items"
			:key="i"
			@mouseover="activateSubMenu(i)"
			class="p-4 hover:bg-white hover:text-gray-900 rounded-r-lg cursor-pointer"
		>
			<p class="text-sm">
				{{ title.title }}
			</p>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'HoverItem',

	props: {
		items: {
			type: Array,
			default: () => {},
		},
	},

	methods: {
		activateSubMenu(id) {
			this.$emit('activateSubMenu', id)
		},
	},
}
</script>

<style scoped>
.props {
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
}
.props::-webkit-scrollbar {
	width: 0 !important;
}
</style>
