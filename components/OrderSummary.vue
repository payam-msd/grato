<template>
	<div>
		<div
			class="lg:hidden w-full h-16 bg-gray-100 border-t flex items-center justify-between px-3 border-b border-gray-400"
			@click="isOrderSumOpen = !isOrderSumOpen"
		>
			<IconBag class="w-7 ml-2" />
			<span class="tracking-wide">{{ 'خلاصه خرید' }}</span>
			<IconCheveronDown class="w-7 ml-auto" />
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
								class="cart-prop w-6 h-6 bg-teal-500 font-bold text-white  rounded-full inline-flex justify-center"
							>
								{{ order.quantity }}
							</span>
							<!-- <img
								:src="order.product.media.images[0].path"
								class="object-scale-down rounded-lg w-32 h-20"
							/>-->
							<img
								src="https://images.unsplash.com/photo-1526854497059-89ac894e3168?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
								class="object-center w-32 h-20"
							/>
						</div>
						<div class="flex flex-col ml-auto">
							<h1 class="-mt-1 pb-3 tracking-wide text-gray-900">
								{{ order.product.title }}
							</h1>
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
						<button ref="apply" class="btn h-10 w-20">ثبت</button>
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
				<p class="text-gray-900 text-base py-6 flex justify-between mt-2">
					جمع کل:
					<span class="">{{ cart.sum | currency }}</span>
				</p>
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
