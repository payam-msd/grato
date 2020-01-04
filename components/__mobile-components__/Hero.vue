<template>
	<div class="flex relative">
		<div class="w-full h-special">
			<img
				class="w-full h-full object-cover"
				src="https://source.unsplash.com/collection/962362/"
				alt
			/>
		</div>
		<div class="absolute bottom-0 w-full h-12 text-center">
			<nuxt-link
				class="text-gray-800 font-serif-bold tracking-wide
                  p-1"
				to="/page"
			>
				{{ ' خرید گلکسی نوت 10+' }}
			</nuxt-link>
			<div class="h-px w-40 bg-gray-900 mx-auto" />
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped></style>
