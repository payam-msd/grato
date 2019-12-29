<template>
	<div
		class="h-full flex flex-col lg:flex-row jusutify-center lg:justify-between items-center container mx-auto px-6 py-10 lg:py-32"
	>
		<form class="w-full my-6 lg:my-0 lg:w-1/3" @submit.prevent="Login">
			<h1 class="text-black lg:">ورود به حساب کاربری</h1>
			<div class="my-4">
				<div class="py-2">
					<label class="text-black">
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
					<label class="text-black">کلمه عبور</label>
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
			</div>

			<div class="pt-5">
				<nuxt-link
					class="font-dana  text-blue-700 hover:text-blue-900 hover:underline"
					to="/auth/recovery"
				>
					کلمه عبور خودرا فراموش کرده اید؟
				</nuxt-link>
			</div>

			<div class="my-4">
				<button type="submit" class="btn btn--md pl-2 hover:bg-gray-900">
					<span>ورود به گراتو</span>
					<SendIcon class="icon w-10" />
				</button>
				<nuxt-link tag="a" class="tertiary-link" to="/">
					{{ 'یا برگشت به فروشگاه' }}
				</nuxt-link>
			</div>
		</form>
		<div class="w-full py-6 lg:p-0 lg:w-1/2">
			<h1 class="text-black lg: py-2">
				ثبت نام در فروشگاه گراتو
			</h1>
			<p class="text-gray-800 tracking-wide">
				با ثبت نام در گراتو به راحتی پرداخت خود را انجام دهید
			</p>
			<div class="my-10">
				<nuxt-link
					tag="a"
					to="/auth/register"
					class="btn btn--md px-14 tracking-wide"
				>
					ثبت نام
				</nuxt-link>
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
