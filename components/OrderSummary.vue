<template>
	<div>
		<div
			class="lg:hidden w-full h-16 bg-gray-100 border-t flex items-center justify-between px-3 border-b border-gray-400"
			@click="isOrderSumOpen = !isOrderSumOpen"
		>
			<IconBag class="w-10 ml-2" />
			<span class="tracking-wide">{{ 'خلاصه خرید' }}</span>
			<IconCheveronDown class="w-10 ml-auto" />
			<span>{{ cart.sum | currency }}</span>
		</div>

		<div
			:class="[isOrderSumOpen ? 'visible' : 'hidden']"
			class="bg-white relative w-full lg:w-2/5 lg:fixed lg:inset-y-0 lg:left-0 lg:block border-r border-gray-400"
		>
			<div class="mx-4 lg:ml-24 lg:mr-20 py-8 scrolling-auto">
				<div v-for="(order, index) in cart.cartItems" :key="index">
					<div class="w-full flex flex-row-reverse justify-start my-6">
						<div class="relative border border-gray-400 rounded">
							<span
								class="absolute w-6 h-6 bg-black text-white  rounded-full flex items-center text-sm font-dana-bold justify-center"
								style="left: -11px;
								top: -6px;
								line-height: 1.4rem;
							"
							>
								{{ order.quantity }}
							</span>
							<!-- <img
								:src="order.product.media.images[0].path"
								class="object-scale-down rounded-lg w-32 h-20"
							/>-->
							<img
								src="https://source.unsplash.com/collection/795176/1600x900"
								class="object-scale-down w-32 h-full"
							/>
						</div>
						<div class="flex flex-col ml-auto">
							<h4 class="-mt-1 pb-3 text-gray-900">
								{{ order.product.title }}
							</h4>
							<span class="pt-8 text-gray-800">
								{{
									calculatePrice(order.item.price, order.quantity) | currency
								}}
							</span>
						</div>
					</div>
					<div class="thin-line" />
				</div>
				<div class="my-6 relative">
					<input
						class="border border-gray-400 px-4 h-12 rounded w-full focus:border-black focus:border-2 focus:outline-none appearance-none"
						placeholder="کد کارت تخفیف یا هدیه"
						type="text"
						@keyup.enter="$refs.apply.focus()"
					/>
					<div class="absolute left-0 ml-1 inset-y-center">
						<ThinLine />
						<button ref="apply" class="btn rounded-sm h-10 w-20">
							{{ 'ثبت' }}
						</button>
					</div>
				</div>
				<div class="thin-line" />
				<div class="my-6">
					<p class="text-gray-800 flex justify-between">
						هزینه پست:
						<span>صفحه بعد حساب شده</span>
					</p>
					<p class="text-gray-800 flex justify-between mt-2">
						جمع سفارشات:
						<span>{{ cart.sum | currency }}</span>
					</p>
				</div>
				<div class="thin-line" />
				<div class="flex justify-between items-center  py-6">
					<p class="text-gray-900 text-xl ">
						جمع کل:
					</p>
					<h4>{{ cart.sum | currency }}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import ThinLine from '~/assets/svg/thin-line.svg'
import IconCheveronDown from '~/assets/svg/icons/icon-cheveron-down.svg'
import IconBag from '~/assets/svg/icons/icon-shopping-bag.svg'
export default {
	components: {
		ThinLine,
		IconCheveronDown,
		IconBag,
	},
	data() {
		return {
			isOrderSumOpen: false,
		}
	},
	computed: {
		...mapState(['cart']),
	},

	methods: {
		calculatePrice(price, quantity) {
			return price * quantity
		},
	},
}
</script>
<style scoped></style>
