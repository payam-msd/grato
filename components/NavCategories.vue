<template>
	<div
		class="lg:ml-auto w-1/3 pl-10 h-full flex items-center justify-start lg:justify-around"
	>
		<!-- BRAND CATEGORIES -->
		<brandCategories>
			<Dropdown slot="dropdown" :is-navbar-fixed="isFixed">
				<Category slot="category" @category="onCategoryIDUpdated" />
				<SubCaregories slot="subCaregories" :hovered-item="category" />
			</Dropdown>
		</brandCategories>
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
import brandCategories from '~/components/navigation/hoverDrop/BrandCategories'
import Dropdown from '~/components/navigation/hoverDrop/Dropdown'
import Category from '~/components/navigation/hoverDrop/Category'
import SubCaregories from '~/components/navigation/hoverDrop/SubCaregories'

export default {
	components: {
		brandCategories,
		Dropdown,
		Category,
		SubCaregories,
	},
	props: {
		isFixed: {
			type: Boolean,
			default: false,
		},
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
