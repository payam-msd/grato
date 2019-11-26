<template>
	<div>
		<ul class="flex flex-wrap justify-around">
			<li
				v-for="item in data"
				:key="item.id"
				class="w-1/2 lg:w-1/4 p-1 lg:p-3 pb-2"
			>
				<div
					class="bg-cover h-64 lg:h-68 bg-center bg-rose-200"
					:style="{
						backgroundImage: `url(https://source.unsplash.com/Pvx24X1uiq4)`,
					}"
				></div>

				<div class="py-4 pb-4">
					<div class="text-gray-900 mb-1  cursor-pointer truncate">
						<nuxt-link
							class="text-sm lg:text-base pl-3"
							:to="`/product/${item.id}`"
						>
							{{ item.title }}
						</nuxt-link>
						<span class="inline text-sm text-gray-500">(سفید)</span>
					</div>
					<div class="py-1">
						<span v-if="!item.discount" class="text-black text-sm">
							{{ item.minimum_price | numeral('0,0') }}
						</span>
						<span v-else class="text-red-500 line-through text-sm">
							{{ item.minimum_price | numeral('0,0') }}
						</span>
						<span class="text-xs text-gray-600 pr-1">تومان</span>
						<IconDotsVertical
							class="inline float-left w-7 p-1 hover:bg-teal-100
                            cursor-pointer rounded-full"
						/>
					</div>
				</div>
			</li>
		</ul>

		<div class="text-center pt-16">
			<nuxt-link
				to="/somewhere"
				tag="a"
				class="px-6 rounded py-4 bg-black mx-auto text-gray-100 hover:bg-gray-900"
			>
				{{ `ادامه ${listDetail.listName}` }}
				<iconArrowLeftCircle class="icon w-7" />
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import IconDotsVertical from '~/assets/svg/icons/icon-dots-vertical.svg'
import iconArrowLeftCircle from '~/assets/svg/icons/icon-arrow-thin-left-circle.svg'
export default {
	components: {
		IconDotsVertical,
		iconArrowLeftCircle,
	},
	props: {
		data: {
			type: Array,
			default() {
				return this.productData
			},
		},
		listDetail: {
			type: Object,
			default: () => {},
		},
	},

	computed: {
		propDefault() {
			return this.$store.state.productData.data.slice(0, 12)
		},
	},
}
</script>

<style scoped></style>
