<template>
	<div class="container mx-auto px-6 w-full h-full">
		<div
			class="flex flex-col lg:flex-row jusutify-center lg:justify-between items-center"
		>
			<form class="w-full h-full lg:w-1/3 py-16" @submit.prevent="Login">
				<h2 class="text-black">ورود به حساب کاربری</h2>
				<div class="py-16">
					<div class="py-2">
						<label class="text-black text-lg">
							{{ 'ایمیل یا نام کاربری' }}
						</label>
					</div>
					<input
						ref="email"
						v-model.lazy="$v.form.email.$model"
						class="input w-4/5"
						type="text"
						@keyup.enter="$refs.password.focus()"
					/>

					<div class="py-1">
						<label class="text-black text-lg">کلمه عبور</label>
					</div>
					<div class="mb-4 relative">
						<div
							class="w-16 mb-2 inset-y-0 absolute left-0 ml-16 appearance-none"
						>
							<EyeIcon
								v-show="!hidePassword"
								stroke-width="1.7"
								class="login-icon inset-center"
								@click="hidePassword = !hidePassword"
							/>
							<CloseEye
								v-show="!!hidePassword"
								class="login-icon inset-center"
								@click="hidePassword = !hidePassword"
							/>
						</div>
						<input
							ref="password"
							v-model.lazy="$v.form.password.$model"
							:type="passwordType"
							class="input w-4/5"
						/>
					</div>
					<nuxt-link
						class="font-dana  text-blue-700 hover:text-blue-900 hover:underline"
						to="/auth/recovery"
					>
						کلمه عبور خودرا فراموش کرده اید؟
					</nuxt-link>
				</div>

				<div class="">
					<button type="submit" class="btn btn-md hover:bg-gray-900">
						<span>ورود به گراتو</span>
						<SendIcon class="icon w-10" />
					</button>
					<nuxt-link tag="a" class="tertiary-link" to="/">
						{{ 'یا برگشت به فروشگاه' }}
					</nuxt-link>
				</div>
			</form>
			<div class="w-full lg:w-1/2">
				<h2 class="text-black py-2">
					ثبت نام در فروشگاه گراتو
				</h2>
				<p class="text-gray-800 text-lg">
					با ثبت نام در گراتو به راحتی پرداخت خود را انجام دهید
				</p>
				<div class="my-10">
					<nuxt-link tag="a" to="/auth/register" class="btn btn-md px-14">
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
