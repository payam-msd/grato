<template>
	<div class="container mx-auto px-4 lg:px-6 w-full h-screen">
		<div
			class="flex flex-col lg:flex-row jusutify-center lg:justify-between items-center"
		>
			<form
				class="w-full h-full lg:w-1/3 py-10 lg:py-16"
				@submit.prevent="Login"
			>
				<h3 class="text-black">ورود به حساب کاربری</h3>
				<div class="py-10 lg:py-16">
					<div class="py-1">
						<label class="text-black lg:text-lg">
							{{ 'ایمیل یا نام کاربری' }}
						</label>
					</div>
					<input
						ref="email"
						v-model.lazy="$v.form.email.$model"
						class="input w-5/6 mb-2"
						type="text"
						@keyup.enter="$refs.password.focus()"
					/>

					<div class="py-1">
						<label class="text-black lg:text-lg">کلمه عبور</label>
					</div>
					<div class="relative">
						<div class="w-16 absolute inset-y-center px-4" style="left: 18%">
							<EyeIcon
								v-show="!hidePassword"
								stroke-width="1.7"
								class="w-8 lg:w-2.2 stroke-current text-gray-500 float-left"
								@click="hidePassword = !hidePassword"
							/>
							<CloseEye
								v-show="!!hidePassword"
								class="w-8 lg:w-2.2 stroke-current text-gray-500 float-left"
								@click="hidePassword = !hidePassword"
							/>
						</div>
						<input
							ref="password"
							v-model.lazy="$v.form.password.$model"
							:type="passwordType"
							autocomplete="password"
							class="input z-10 w-5/6"
						/>
					</div>

					<nuxt-link
						class="block py-4 text-blue-700 hover:text-blue-900 hover:underline"
						to="/auth/recovery"
					>
						{{ 'کلمه عبور خودرا فراموش کرده اید؟' }}
					</nuxt-link>
				</div>

				<div class="">
					<button type="submit" class="btn btn-md hover:bg-gray-900">
						<span>ورود به گراتو</span>
						<SendIcon class="icon w-10" />
					</button>
					<nuxt-link class="tertiary-link" to="/">
						{{ 'یا برگشت به فروشگاه' }}
					</nuxt-link>
				</div>
			</form>

			<div class="w-full lg:w-1/2 my-20 h-64 lg:py-0">
				<h3 class="text-black py-2">
					ثبت نام در فروشگاه گراتو
				</h3>
				<p class="lg:text-lg">
					با ثبت نام در گراتو به راحتی پرداخت خود را انجام دهید
				</p>
				<div class="my-10">
					<nuxt-link to="/auth/register" class="btn btn-md px-14">
						ثبت نام
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
import EyeIcon from '~/assets/svg/eye.svg'
import CloseEye from '~/assets/svg/closeEye.svg'
import SendIcon from '~/assets/svg/sendIcon.svg'

export default {
	name: 'Login',
	meta: {
		name: 'صفحه ورود',
		path: '/auth/login',
	},

	middleware: ['auth'],

	components: {
		EyeIcon,
		CloseEye,
		SendIcon,
	},

	data() {
		return {
			hidePassword: true,
			form: {
				email: '',
				password: '',
			},
		}
	},
	computed: {
		passwordType() {
			return this.hidePassword ? 'password' : 'text'
		},
	},

	mounted() {
		this.$nextTick(() => {
			const {email} = this.$refs
			email.focus()
			email.setSelectionRange(0, email.value.length)
		})
	},

	methods: {
		async Login() {
			try {
				await this.$auth
					.loginWith('local', {
						data: {
							email: this.form.email,
							password: this.form.password,
						},
					})
					.then(this.$store.dispatch('GET_CART_DATA'))
				// this.$router.push(this.$route.query.redirect || '/')
			} catch (error) {
				// Error 😨
				window.onNuxtReady(() => {
					window.$nuxt.error({statusCode: 500, message: error})
				})
				console.error(error)
			}
		},
	},

	head() {
		return {
			title: 'ورود به گراتو',
			meta: [
				{
					hid: 'login',
					name: 'ورود',
					content: 'ورود به گراتو',
				},
			],
		}
	},

	validations: {
		form: {
			email: {
				required,
				email,
			},
			password: {
				required,
			},
		},
	},
}
</script>

<style scoped></style>
