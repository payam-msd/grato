<template>
	<div class="ml-auto h-full flex items-center justify-start">
		<!-- BRAND CATEGORIES -->
		<brandCategories>
			<Dropdown slot="dropdown" :isNavbarFixed="isFixed" />
		</brandCategories>
		<!-- /BRAND CATEGORIES -->

		<a href="#" class="text-gray-600 text-sm word-2-space pl-3">
			{{ 'رویه بازگرداندن کالا' }}
		</a>
		<a href="#" class="text-gray-600 text-sm word-2-space">
			{{ 'سوالی دارید؟' }}
		</a>
	</div>
</template>

<script>
import brandCategories from '~/components/navigation/hoverDrop/BrandCategories'
import Dropdown from '~/components/navigation/hoverDrop/Dropdown'

export default {
	components: {
		brandCategories,
		Dropdown,
	},
	props: {
		isFixed: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style scoped></style>
