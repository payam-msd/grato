<template>
	<div
		class="lg:ml-auto w-auto h-full flex items-center justify-start lg:justify-around"
	>
		<!-- BRAND CATEGORIES -->
		<CategoriesTitle>
			<Dropdown slot="dropdown">
				<Categories slot="category" @category="onCategoryIDUpdated" />
				<SubCaregories slot="subCaregories" :hovered-item="category" />
			</Dropdown>
		</CategoriesTitle>
		<!-- /BRAND CATEGORIES -->

		<a href="#" class="hidden lg:block secondary-btn word-2-space ">
			{{ 'رویه بازگشت کالا' }}
		</a>

		<a href="#" class="hidden lg:block secondary-btn word-2-space ">
			{{ 'سوالی دارید؟' }}
		</a>
	</div>
</template>

<script>
import CategoriesTitle from '~/components/navigation/category/CategoriesTitle'
import Dropdown from '~/components/navigation/category/Dropdown'
import Categories from '~/components/navigation/category/Categories'
import SubCaregories from '~/components/navigation/category/SubCaregories'

export default {
	components: {
		CategoriesTitle,
		Dropdown,
		Categories,
		SubCaregories,
	},
	data() {
		return {
			category: 0,
		}
	},
	methods: {
		onCategoryIDUpdated(id) {
			this.category = id
		},
	},
}
</script>

<style scoped></style>
