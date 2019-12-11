<template>
	<div class="bg-rose-100">
		<div class="relative w-full lg:pt-10 lg:px-24">
			<nuxt-link class="text-4xl font-dana-bold text-green-700" to="/">گراتو</nuxt-link>
			<!-- ORDER SUMMARY -->
			<OrderSummary />
			<!-- /ORDER SUMMARY -->
		</div>
		<div class="flex flex-col lg:flex-row">
			<div class="w-full h-full lg:w-3/5 bg-rose-100">
				<div class="mx-4 lg:mr-24 lg:ml-20 text-gray-800">
					<div class="pb-4">
						<div class="py-6 flex justify-between items-center">
							<h1 class="text-black text-lg">{{ 'اطلاعات تماس' }}</h1>
							<h1 class="text-xs">
								{{ 'حساب دیگری دارید؟' }}
								<nuxt-link
									class="text-blue-500 hover:underline"
									to="/auth/login"
								>وارد شوید</nuxt-link>
							</h1>
						</div>

						<input
							@keyup.enter="$refs.firstName.focus()"
							class="input-checkout w-full placeholder-gray-700"
							placeholder="ایمیل"
							ref="email"
							type="text"
							v-model="form.email"
						/>
						<input class="checkbox" id="newsletter" type="checkbox" />
						<label
							class="label pr-1 text-sm"
							for="newsletter"
						>من رو از آخرین تخفیف ها باخبر کن</label>
					</div>

					<h1 class="text-black text-lg pb-4 pt-8">اطلاعات پرداخت</h1>
					<form @submit.prevent="onFormClick" class="w-full">
						<div class="flex">
							<div class="w-1/2 pl-1 lg:pl-2">
								<input
									@keyup.enter="$refs.lastName.focus()"
									class="input-checkout block w-full placeholder-gray-700"
									placeholder="نام"
									ref="firstName"
									type="text"
									v-model="form.receiver_first_name"
								/>
							</div>
							<div class="w-1/2 pr-1 lg:pr-2">
								<input
									@keyup.enter="$refs.address.focus()"
									class="input-checkout block w-full placeholder-gray-700"
									placeholder="نام خانوادگی"
									ref="lastName"
									type="text"
									v-model="form.receiver_last_name"
								/>
							</div>
						</div>

						<input
							@keyup.enter="$refs.state.focus()"
							class="input-checkout block w-full placeholder-gray-700"
							placeholder="آدرس"
							ref="address"
							type="text"
							v-model="form.address"
						/>

						<div class="flex">
							<div class="w-full lg:pl-1">
								<div class="relative">
									<select
										@keyup.enter="$refs.city.focus()"
										class="input-checkout block w-full focus:border-black pl-8"
										ref="state"
										v-model="selectedState"
									>
										<template v-for="province in provinces">
											<option
												:key="province.id"
												:value="province.id"
												class="truncate"
											>{{ province.name }}</option>
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
										@keyup.up="$refs.postalCode.focus()"
										class="input-checkout block w-full pl-8"
										ref="city"
										v-model="form. city_id"
									>
										<template v-for="city in citiesData">
											<option :key="city.id" :value="city.id">{{ city.name }}</option>
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
									@keyup.enter="$refs.address.focus()"
									class="input-checkout block w-full placeholder-gray-700"
									placeholder="کدپستی"
									ref="postalCode"
									type="number"
									v-model="form.postal_code"
								/>
							</div>
						</div>

						<input
							@keyup.enter="$refs.continue.focus()"
							class="input-checkout block w-full placeholder-gray-700"
							placeholder="شماره موبایل"
							ref="number"
							type="number"
							v-model="form.tell"
						/>

						<div
							class="flex flex-col lg:flex-row-reverse justify-between items-center py-8 w-full"
						>
							<button
								class="w-full btn btn--lg lg:w-auto"
								ref="continue"
								type="submit"
							>ادامه خرید</button>
							<nuxt-link
								class="mt-2 lg:mt-0 tertiary-link"
								to="/"
								v-if="$route.params.id === undefined"
							>{{ 'برگشت' }}</nuxt-link>
							<nuxt-link
								:to="$route.query.redirect"
								class="mt-2 lg:mt-0 tertiary-link"
								v-else
							>
								<IconCheveronRight class="w-7" />
								{{ 'برگشت به محصول' }}
							</nuxt-link>
						</div>
						<div class="thin-line"></div>
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
import OrderSummary from '~/components/Desktop/OrderSummary.vue'
export default {
	name: 'Checkout',
	middleware: ['auth'],
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
