<template>
	<div class="bg-rose-100">
		<div class="relative w-full lg:pt-10 lg:px-24 ">
			<nuxt-link class="text-4xl font-dana-bold text-green-700" to="/">
				گراتو
			</nuxt-link>
			<OrderSummary />
		</div>
		<div class="flex flex-col lg:flex-row">
			<div class="w-full h-full lg:w-3/5 bg-rose-100">
				<div class="mx-4 lg:mr-24 lg:ml-20  text-gray-800">
					<div class="pb-4">
						<div class="py-6 flex justify-between items-center">
							<h1 class="text-black text-lg">{{ 'اطلاعات تماس' }}</h1>
							<h1 class="text-xs">
								{{ 'حساب دیگری دارید؟' }}
								<nuxt-link
									class="text-blue-500 hover:underline"
									to="/auth/login"
								>
									وارد شوید
								</nuxt-link>
							</h1>
						</div>

						<input
							ref="email"
							@keyup.enter="$refs.firstName.focus()"
							v-model="form.email"
							class="input-checkout w-full placeholder-gray-700"
							type="text"
							placeholder="ایمیل"
						/>
						<input id="newsletter" class="checkbox" type="checkbox" />
						<label class="label pr-1 text-sm" for="newsletter">
							من رو از آخرین تخفیف ها باخبر کن
						</label>
					</div>

					<h1 class="text-black text-lg pb-4 pt-8">اطلاعات پرداخت</h1>
					<form class="w-full" @submit.prevent="handleUserDetail">
						<div class="flex">
							<div class="w-1/2 pl-1 lg:pl-2">
								<input
									ref="firstName"
									@keyup.enter="$refs.lastName.focus()"
									v-model="form.first_name"
									class="input-checkout block w-full placeholder-gray-700"
									type="text"
									placeholder="نام"
								/>
							</div>
							<div class="w-1/2 pr-1 lg:pr-2">
								<input
									ref="lastName"
									@keyup.enter="$refs.address.focus()"
									v-model="form.last_name"
									class="input-checkout block w-full placeholder-gray-700"
									type="text"
									placeholder="نام خانوادگی"
								/>
							</div>
						</div>

						<input
							ref="address"
							@keyup.enter="$refs.state.focus()"
							v-model="userAddress"
							class="input-checkout block w-full placeholder-gray-700"
							type="text"
							placeholder="آدرس"
						/>

						<div class="flex">
							<div class="w-full pl-1 lg:pl-2">
								<div class="relative">
									<select
										ref="state"
										@keyup.enter="$refs.city.focus()"
										v-model="selectedState"
										class="input-checkout block  w-full focus:border-black"
									>
										<template v-for="province in provinces">
											<option :value="province.id" :key="province.id">
												{{ province.name }}
											</option>
										</template>
									</select>
									<div
										class="pointer-events-none absolute
                                    inset-y-0 left-0 flex items-center px-2 text-gray-700"
									>
										<IconThinLine class="w-7" />
										<IconCheveronDown class="w-7" />
									</div>
								</div>
							</div>
							<div class="w-full pr-1 lg:pr-2">
								<div class="relative">
									<select
										ref="city"
										@keyup.up="$refs.number.focus()"
										v-model="selectedCity"
										class="input-checkout block  w-full"
									>
										<template v-for="city in citiesData">
											<option :key="city.id" :value="city.id">
												{{ city.name }}
											</option>
										</template>
									</select>
									<div
										class="pointer-events-none absolute
                                    inset-y-0 left-0 flex items-center px-2 text-gray-700"
									>
										<IconThinLine class="w-7" />
										<IconCheveronDown class="w-7" />
									</div>
								</div>
							</div>
						</div>

						<input
							type="number"
							ref="number"
							@keyup.enter="$refs.continue.focus()"
							v-model="form.phone_num"
							class="input-checkout block w-full
                                placeholder-gray-700"
							placeholder="شماره موبایل"
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
								class="mt-2 lg:mt-0 tertiary-link
                                 "
								to="/"
							>
								{{ 'برگشت' }}
							</nuxt-link>
							<nuxt-link
								v-else
								class="mt-2 lg:mt-0 tertiary-link
                             "
								:to="$route.query.redirect"
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
	middleware: 'user',
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
			selectedState: 11, // default to khorasan
			selectedCity: 130, // default to mashhad
			userAddress: undefined,
			form: {
				email: undefined,
				first_name: undefined,
				last_name: undefined,
				phone_num: undefined,
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
		handleUserDetail() {
			this.$UPDATE_USER_INFO.update(this.form)
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
