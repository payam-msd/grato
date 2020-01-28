<template>
	<div class="container mx-auto px-4 lg:px-6">
		<div class="h-screen lg:h-full flex justify-start items-start ">
			<form class="w-full lg:w-1/3 lg:py-16" @submit.prevent="Register">
				<div class="my-8">
					<h2>{{ 'ثبت نام' }}</h2>
					<p>
						{{ 'قبلا ثبت نام کرده اید ؟‌' }}

						<nuxt-link
							class="inline mx-1 text-blue-600 text-sm lg:text-base"
							to="/auth/login"
						>
							{{ 'وارد شوید' }}
						</nuxt-link>
					</p>
				</div>

				<div class="my-6">
					<div class="py-1">
						<label class="text-gray-900 mx-1 lg:text-lg">
							{{ 'نام کاربری' }}
						</label>
					</div>
					<input
						ref="username"
						v-model.lazy="$v.form.username.$model"
						class="input w-5/6 mb-2"
						type="text"
						@keyup.enter="$refs.email.focus()"
					/>

					<div class="py-1">
						<label class="text-gray-900 mx-1 lg:text-lg">ایمیل</label>
					</div>
					<input
						ref="email"
						v-model.lazy="$v.form.email.$model"
						class="input w-5/6 mb-2"
						type="text"
						@keyup.enter="$refs.password.focus()"
					/>

					<div class="py-1">
						<label class="text-gray-900 mx-1 lg:text-lg">
							کلمه عبور
						</label>
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

					<div class="text-gray-800 pl-16 py-4 inline-flex">
						<div class="py-1 px-2">
							<input id="rules" v-model="rulesAgreed" type="checkbox" />
						</div>
						<label for="rules">
							<nuxt-link class="text-blue-500 hover:underline mx-1" to="/page">
								{{ 'حریم خصوصی' }}
							</nuxt-link>
							{{ 'و' }}
							<nuxt-link class="text-blue-500 hover:underline mx-1" to="/page">
								{{ 'شرایط و قوانین' }}
							</nuxt-link>
							استفاده از سرویس های سایت گراتو را مطالعه نموده و با کلیه موارد آن
							موافقم.
						</label>
					</div>
				</div>

				<div class="my-4">
					<button
						:disabled="rulesAgreed == true ? false : true"
						:class="{'cursor-not-allowed': !rulesAgreed}"
						type="submit"
						class="btn btn-md hover:bg-gray-900"
					>
						<span>ثبت نام در گراتو</span>
						<SendIcon class="icon w-10" />
					</button>
					<nuxt-link class="tertiary-link" to="/">
						{{ 'یا برگشت به فروشگاه' }}
					</nuxt-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {required, minLength, email} from 'vuelidate/lib/validators'
import EyeIcon from '~/assets/svg/eye.svg'
import CloseEye from '~/assets/svg/closeEye.svg'
import SendIcon from '~/assets/svg/sendIcon.svg'

export default {
	middleware: ['auth'],
	meta: {
		children: [
			{
				name: ' ثبت نام در گراتو',
				path: '/auth/register',
			},
		],
	},
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
					content: 'ثبت نام  ',
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
