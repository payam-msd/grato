<template>
	<div>
		<ul class="flex my-4 justify-around">
			<li v-for="(title, i) in data" :key="i">
				<a
					role="button"
					tabindex="0"
					class="text-gray-800 py-1 px-1 hover:border-b
                        hover:border-black focus:border-b focus:border-black focus:outline-none
                        cursor-pointer"
				>
					{{ title.name }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Array,
			default: () => {},
		},
	},
}
</script>

<style scoped></style>
