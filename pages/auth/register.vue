<template>
	<div
		class="h-full flex justify-center lg:justify-start items-center container mx-auto px-6 py-6 lg:py-12"
	>
		<form class="w-full lg:w-1/3" @submit.prevent="Register">
			<h1 class="text-black ">{{ 'ثبت نام' }}</h1>

			<div class="flex text-gray-700">
				<p>{{ 'قبلا ثبت نام کرده اید ؟‌' }}</p>
				<nuxt-link tag="a" class=" mx-1 text-blue-600" to="/auth/login">
					{{ 'وارد شوید' }}
				</nuxt-link>
			</div>

			<div class="my-6">
				<div class="py-1">
					<label class="text-gray-900 mx-1">
						{{ 'نام کاربری' }}
					</label>
				</div>
				<input
					ref="username"
					v-model.lazy="$v.form.username.$model"
					class="input w-4/5"
					type="text"
					@keyup.enter="$refs.email.focus()"
				/>

				<div class="py-1">
					<label class="text-gray-900 mx-1">ایمیل</label>
				</div>
				<input
					ref="email"
					v-model.lazy="$v.form.email.$model"
					class="input w-4/5"
					type="text"
					@keyup.enter="$refs.password.focus()"
				/>

				<div class="py-1">
					<label class="text-gray-900 mx-1">
						کلمه عبور
					</label>
				</div>
				<div class="relative">
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
						class="w-4/5 input"
						autocomplete="new-password"
					/>
				</div>

				<div class="text-gray-800 pl-16 py-2 inline-flex">
					<div class="py-1 px-2">
						<input v-model="rulesAgreed" type="checkbox" />
					</div>
					<p>
						<nuxt-link
							tag="a"
							class="text-blue-500 hover:underline mx-1"
							to="/page"
						>
							{{ 'حریم خصوصی' }}
						</nuxt-link>
						{{ 'و' }}
						<nuxt-link
							tag="a"
							class="text-blue-500 hover:underline mx-1"
							to="/page"
						>
							{{ 'شرایط و قوانین' }}
						</nuxt-link>
						استفاده از سرویس های سایت گراتو را مطالعه نموده و با کلیه موارد آن
						موافقم.
					</p>
				</div>
			</div>

			<div class="my-4">
				<button
					:disabled="rulesAgreed == true ? false : true"
					:class="{'cursor-not-allowed': !rulesAgreed}"
					type="submit"
					class="btn btn--md hover:bg-gray-900"
				>
					<span>ثبت نام در گراتو</span>
					<SendIcon class="icon w-10" />
				</button>
				<nuxt-link tag="a" class="tertiary-link" to="/">
					{{ 'یا برگشت به فروشگاه' }}
				</nuxt-link>
			</div>
		</form>
	</div>
</template>

<script>
import {required, minLength, email} from 'vuelidate/lib/validators'
import EyeIcon from '~/assets/svg/eye.svg'
import CloseEye from '~/assets/svg/closeEye.svg'
import SendIcon from '~/assets/svg/sendIcon.svg'

export default {
	middleware: ['guest'],
	components: {
		EyeIcon,
		CloseEye,
		SendIcon,
	},
	data() {
		return {
			hidePassword: true,
			rulesAgreed: null,
			form: {
				email: '',
				username: '',
				password: '',
			},
		}
	},
	computed: {
		passwordType() {
			return this.hidePassword ? 'password' : 'text'
		},
		passwordIcon() {
			return !this.hidePassword ? 'text-green-600' : 'text-gray-500'
		},
	},
	mounted() {
		this.$nextTick(() => {
			const {username} = this.$refs
			username.focus()
			username.setSelectionRange(0, username.value.length)
		})
	},
	head() {
		return {
			meta: [
				{
					hid: 'register',
					name: 'ثبت نام',
					content: 'ثبت نام در گراتو',
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
				minLength: minLength(6),
			},
			username: {
				required,
			},
		},
	},
	methods: {
		async Register() {
			try {
				await this.$ADD_USER.create(this.form)
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
}
</script>

<style scoped></style>
