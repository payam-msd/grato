<template>
	<div class="bg-rose-100">
		<div class="relative w-full lg:pt-10 lg:px-24">
			<nuxt-link class=" font-dana-bold text-green-700" to="/">
				گراتو
			</nuxt-link>
			<!-- ORDER SUMMARY -->
			<OrderSummary />
			<!-- /ORDER SUMMARY -->
		</div>
		<div class="flex flex-col lg:flex-row">
			<div class="w-full h-full lg:w-3/5 bg-rose-100">
				<div class="mx-4 lg:mr-24 lg:ml-20 text-gray-800">
					<div class="pb-4">
						<div class="py-6 flex justify-between items-center">
							<h3 class="text-black">{{ 'اطلاعات تماس' }}</h3>
							<h5 class="">
								{{ 'حساب دیگری دارید؟' }}
								<nuxt-link
									class="text-blue-500 hover:underline"
									to="/auth/login"
								>
									وارد شوید
								</nuxt-link>
							</h5>
						</div>

						<input
							ref="email"
							v-model="form.email"
							class="input-checkout w-full placeholder-gray-700"
							placeholder="ایمیل"
							type="text"
							@keyup.enter="$refs.firstName.focus()"
						/>
						<input id="newsletter" class="checkbox" type="checkbox" />
						<label class="label pr-1 " for="newsletter">
							من رو از آخرین تخفیف ها باخبر کن
						</label>
					</div>

					<h3 class="text-black pb-4 pt-8">اطلاعات پرداخت</h3>
					<form class="w-full" @submit.prevent="onFormClick">
						<div class="flex">
							<div class="w-1/2 pl-1 lg:pl-2">
								<input
									ref="firstName"
									v-model="form.receiver_first_name"
									class="input-checkout block w-full placeholder-gray-700"
									placeholder="نام"
									type="text"
									@keyup.enter="$refs.lastName.focus()"
								/>
							</div>
							<div class="w-1/2 pr-1 lg:pr-2">
								<input
									ref="lastName"
									v-model="form.receiver_last_name"
									class="input-checkout block w-full placeholder-gray-700"
									placeholder="نام خانوادگی"
									type="text"
									@keyup.enter="$refs.address.focus()"
								/>
							</div>
						</div>

						<input
							ref="address"
							v-model="form.address"
							class="input-checkout block w-full placeholder-gray-700"
							placeholder="آدرس"
							type="text"
							@keyup.enter="$refs.state.focus()"
						/>

						<div class="flex">
							<div class="w-full lg:pl-1">
								<div class="relative">
									<select
										ref="state"
										v-model="selectedState"
										class="input-checkout block w-full focus:border-black pl-8"
										@keyup.enter="$refs.city.focus()"
									>
										<template v-for="province in provinces">
											<option
												:key="province.id"
												:value="province.id"
												class="truncate"
											>
												{{ province.name }}
											</option>
										</template>
									</select>
									<div
										class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700"
									>
										<IconThinLine class="w-5 lg:w-7" />
										<IconCheveronDown class="w-5 lg:w-7" />
									</div>
								</div>
							</div>
							<div class="w-full pr-1 lg:pr-1">
								<div class="relative">
									<select
										ref="city"
										v-model="form.city_id"
										class="input-checkout block w-full pl-8"
										@keyup.up="$refs.postalCode.focus()"
									>
										<template v-for="city in citiesData">
											<option :key="city.id" :value="city.id">
												{{ city.name }}
											</option>
										</template>
									</select>
									<div
										class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700"
									>
										<IconThinLine class="w-5 lg:w-7" />
										<IconCheveronDown class="w-5 lg:w-7" />
									</div>
								</div>
							</div>
							<div class="w-full pr-1 lg:pr-2">
								<input
									ref="postalCode"
									v-model="form.postal_code"
									class="input-checkout block w-full placeholder-gray-700"
									placeholder="کدپستی"
									type="number"
									@keyup.enter="$refs.address.focus()"
								/>
							</div>
						</div>

						<input
							ref="number"
							v-model="form.tell"
							class="input-checkout block w-full placeholder-gray-700"
							placeholder="شماره موبایل"
							type="number"
							@keyup.enter="$refs.continue.focus()"
						/>

						<div
							class="flex flex-col lg:flex-row-reverse justify-between items-center py-8 w-full"
						>
							<button
								ref="continue"
								class="w-full btn btn--lg lg:w-auto"
								type="submit"
							>
								ادامه خرید
							</button>
							<nuxt-link
								v-if="$route.params.id === undefined"
								class="mt-2 lg:mt-0 tertiary-link"
								to="/"
							>
								{{ 'برگشت' }}
							</nuxt-link>
							<nuxt-link
								v-else
								:to="$route.query.redirect"
								class="mt-2 lg:mt-0 tertiary-link"
							>
								<IconCheveronRight class="w-7" />
								{{ 'برگشت به محصول' }}
							</nuxt-link>
						</div>
						<div class="thin-line" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import IconCheveronRight from '~/assets/svg/icons/icon-cheveron-right-circle.svg'
import IconCheveronDown from '~/assets/svg/icons/icon-cheveron-down.svg'
import IconThinLine from '~/assets/svg/thin-line.svg'
import OrderSummary from '~/components/OrderSummary.vue'
export default {
	name: 'Checkout',
	middleware: ['auth'],
	components: {
		IconCheveronRight,
		IconCheveronDown,
		IconThinLine,
		OrderSummary,
	},

	data() {
		return {
			// * Form handling happens here
			selectedState: 11, // default to mashhad
			form: {
				city_id: 130, // default to khorasan
				email: undefined,
				receiver_first_name: undefined,
				receiver_last_name: undefined,
				tell: undefined,
				address: undefined,
				postal_code: undefined,
			},
		}
	},
	head() {
		return {
			title: 'اطلاعات حساب',
			meta: [
				{
					hid: 'accountInfo',
					name: 'اطلاعات حساب',
					content: 'بررسی خرید و تکمیل اطلاعات حساب',
				},
			],
		}
	},

	computed: {
		...mapState(['cart']),
		...mapGetters(['isAuthenticated', 'userDetail']),
	},

	watch: {
		async selectedState(newID, oldID) {
			this.citiesData = await this.$SHOW_PROVINCES_CITIES.showCities(newID)
		},
	},

	async asyncData({app}) {
		return {
			provinces: await app.$FETCH_PROVINCES.index(),
			citiesData: await app.$SHOW_PROVINCES_CITIES.showCities(11),
		}
	},

	mounted() {
		this.$nextTick(() => {
			const {email, firstName} = this.$refs
			email.focus()
			email.setSelectionRange(0, email.value.length)
			this.$store.dispatch('GET_CART_DATA')

			if (this.isAuthenticated) {
				firstName.focus()
				firstName.setSelectionRange(0, firstName.value.length)
				this.form.email = this.userDetail.email
			}
		})
	},

	methods: {
		onFormClick() {
			this.$ADD_USER_DETIAL.post(this.form)
		},
	},
}
</script>

<style scoped>
.label {
	display: inline;
	padding-left: 15px;
	text-indent: -15px;
}
.checkbox {
	width: 15px;
	height: 13px;
	padding: 0;
	margin: 0;
	vertical-align: bottom;
	position: relative;
	top: -4px;
	overflow: hidden;
}
</style>
