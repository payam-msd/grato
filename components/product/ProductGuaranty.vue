<template>
	<div>
		<div class="flex flex-wrap mb-2">
			<div class="w-full md:w-1/2 pl-2 mb-6 md:mb-0">
				<div class="relative">
					<slot />
					<div
						class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
					>
						<svg
							class="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path
								d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
