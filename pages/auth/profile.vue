<template>
	<div>
		<h1 class="w-full mx-auto text-center uppercase">
			this is profile page
		</h1>
	</div>
</template>

<script>
export default {
	middleware: ['auth'],
	head() {
		return {
			title: 'پروفایل',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'profile',
					name: 'پروفایل',
					content: 'پروفایل کاربر',
				},
			],
		}
	},
}
</script>

<style scoped></style>
