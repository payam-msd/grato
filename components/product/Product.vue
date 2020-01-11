<template>
	<div>
		<ul class="flex flex-wrap justify-around">
			<li
				v-for="item in data"
				:key="item.id"
				class="w-1/2 lg:w-1/4 p-1 lg:p-3 pb-2"
			>
				<nuxt-link
					:to="`/product/${item.id}`"
					class="image transition-all transition-medium ease-out bg-cover h-15 lg:h-22 bg-center bg-rose-100 cursor-pointer"
					tag="div"
				/>

				<div class="py-4">
					<div class="text-gray-900 cursor-pointer whitespace-normal	">
						<nuxt-link :to="`/product/${item.id}`" class="pl-3">
							{{ item.title }}
						</nuxt-link>
						<p class="inline text-gray-500 text-sm lg:text-base">
							(سفید)
						</p>
					</div>

					<div class="flex items-center justify-between my-2">
						<span v-if="!item.discount" class="text-sm lg:text-base self-end">
							{{ item.minimum_price | currency }}
						</span>
						<span
							v-else
							class="text-red-500 line-through text-sm lg:text-base self-end"
						>
							{{ item.minimum_price | currency }}
						</span>
						<IconDotsVertical
							class="inline w-8
                            cursor-pointer"
						/>
					</div>
				</div>
			</li>
		</ul>

		<div class="text-center py-24">
			<nuxt-link to="/somewhere" class="btn btn-md lg:btn-lg hover:bg-gray-900">
				{{ `ادامه ${listDetail.listName}` }}
				<IconCheveronLeft transform="rotate(90, 0 ,0)" class="icon w-2.2" />
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

<style scoped>
.image {
	background-image: url('https://source.unsplash.com/Pvx24X1uiq4');
}
.image:hover {
	background-image: url('https://source.unsplash.com/R1qvCoD5Mjg');
}
</style>
