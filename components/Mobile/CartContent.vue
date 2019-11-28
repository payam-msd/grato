<template>
	<div
		class="w-full h-full overflow-y-auto flex flex-col justify-start items-stretch px-4"
	>
		<div class="flex pt-8 justify-between">
			<p>جمع کل :</p>
			<span>{{ sumOfList | numeral('0,0') }}</span>
		</div>

		<a
			role="button"
			tabindex="0"
			class="btn w-full py-3 mx-auto text-center"
			@click="
				$router.push({
					name: 'checkou  t',
					query: {
						redirect: `/product/${$route.params.id}`,
					},
				})
			"
		>
			{{ 'بررسی خرید' }}
		</a>
	</div>
</template>

<script>
export default {}
</script>

<style scoped></style>
