<template>
	<div>
		<ul class="flex flex-wrap justify-around">
			<li
				v-for="item in data"
				:key="item.id"
				class="w-1/2 lg:w-1/4 p-1 lg:p-3 pb-2"
			>
				<nuxt-link
					:style="{
						backgroundImage: `url(https://source.unsplash.com/Pvx24X1uiq4)`,
					}"
					:to="`/product/${item.id}`"
					class="bg-cover h-64 lg:h-68 bg-center bg-rose-200 cursor-pointer"
					tag="div"
				/>

				<div class="py-4 pb-4">
					<div class="text-gray-900 mb-1 cursor-pointer truncate">
						<nuxt-link :to="`/product/${item.id}`" class="pl-3">
							{{ item.title }}
						</nuxt-link>
						<span class="inline text-gray-500">(سفید)</span>
					</div>
					<div class="py-1">
						<span v-if="!item.discount" class="text-black ">
							{{ item.minimum_price | currency }}
						</span>
						<span v-else class="text-red-500 line-through ">
							{{ item.minimum_price | currency }}
						</span>
						<IconDotsVertical
							class="inline float-left w-7 p-1 hover:bg-teal-100
                            cursor-pointer rounded-full"
						/>
					</div>
				</div>
			</li>
		</ul>

		<div class="text-center py-24">
			<nuxt-link to="/somewhere" class="btn btn--lg hover:bg-gray-900">
				{{ `ادامه ${listDetail.listName}` }}
				<IconCheveronLeft transform="rotate(90, 0 ,0)" class="icon w-7" />
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import IconDotsVertical from '~/assets/svg/icons/icon-dots-vertical.svg'
import IconCheveronLeft from '~/assets/svg/icons/icon-cheveron-down.svg'
export default {
	components: {
		IconDotsVertical,
		IconCheveronLeft,
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
}
</script>

<style scoped></style>
