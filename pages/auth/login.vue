<template>
    <div class="container mx-auto">
        <div
            class="flex flex-col lg:flex-row jusutify-center lg:justify-around items-center"
        >
            <div class="w-full lg:w-1/2 my-12 lg:my-32 p-6  lg:mx-8">
                <form class="w-full lg:w-3/5" @submit.prevent="Login">
                    <h1 class="text-gray-900 text-2xl">
                        ورود به حساب کاربری
                    </h1>

                    <div class="py-2">
                        <label
                            class="text-gray-900 font-dana select-none"
                            for="email"
                            >ایمیل یا نام کاربری</label
                        >
                    </div>
                    <div class="mb-3">
                        <input
                            id="email"
                            ref="email"
                            v-model.lazy="$v.form.email.$model"
                            class="input w-4/5  focus:outline-none focus:border-2 focus:border-black focus:bg-white"
                            type="text"
                            @keyup.enter="$refs.password.focus()"
                        />
                    </div>

                    <div class="py-1">
                        <label
                            class="text-gray-900 font-dana select-none"
                            for="password"
                            >کلمه عبور</label
                        >
                    </div>
                    <div class="mb-4 relative">
                        <div
                            class="w-16 inset-y-0 absolute left-0 ml-16 appearance-none"
                        >
                            <EyeIcon
                                v-show="!hidePassword"
                                stroke-width="1.7"
                                class="login-icon inset-center "
                                @click="hidePassword = !hidePassword"
                            />
                            <CloseEye
                                v-show="!!hidePassword"
                                class="login-icon inset-center"
                                @click="hidePassword = !hidePassword"
                            />
                        </div>
                        <input
                            id="password"
                            ref="password"
                            v-model.lazy="$v.form.password.$model"
                            class="input w-4/5 focus:outline-none focus:border-2 focus:border-black focus:bg-white "
                            :type="passwordType"
                        />
                    </div>

                    <div class="pt-5">
                        <nuxt-link
                            class="font-dana text-xs text-blue-700 hover:text-blue-900 hover:underline"
                            to="/auth/recovery"
                            >کلمه عبور خودرا فراموش کرده اید؟</nuxt-link
                        >
                    </div>

                    <div class="my-4">
                        <button
                            type="submit"
                            class="btn text-sm py-3 px-6 pl-2 hover:bg-gray-900 hover:text-white"
                        >
                            <span>ورود به گراتو</span>
                            <SendIcon class="icon w-10" />
                        </button>
                        <nuxt-link
                            tag="span"
                            class=" mx-3 text-xs text-gray-700"
                            to="/"
                            >{{ "یا برگشت به فروشگاه" }}</nuxt-link
                        >
                    </div>
                </form>
            </div>
            <div class="w-full p-6 lg:w-1/2">
                <h1 class="text-black text-2xl">
                    ثبت نام در فروشگاه گراتو
                </h1>
                <p class="py-2 text-gray-800">
                    با ثبت نام در گراتو به راحتی پرداخت خود را انجام دهید
                </p>
                <div class="my-4">
                    <nuxt-link
                        to="/auth/register"
                        class="btn py-3 px-12 text-sm tracking-wide"
                    >
                        <span>ثبت نام</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {required, email} from "vuelidate/lib/validators"
import EyeIcon from "~/assets/svg/icons/eye.svg"
import CloseEye from "~/assets/svg/icons/closeEye.svg"
import SendIcon from "~/assets/svg/icons/sendIcon.svg"

export default {
    name: "Login",
    middleware: "guest",

    head() {
        return {
            title: "ورود به گراتو",
            meta: [
                {
                    hid: "login",
                    name: "ورود",
                    content: "ورود به گراتو",
                },
            ],
        }
    },

    components: {
        EyeIcon,
        CloseEye,
        SendIcon,
    },

    data() {
        return {
            hidePassword: true,
            form: {
                email: "",
                password: "",
            },
        }
    },
    computed: {
        passwordType() {
            return this.hidePassword ? "password" : "text"
        },
    },

    mounted() {
        this.$nextTick(() => {
            const {email} = this.$refs
            email.focus()
            email.setSelectionRange(0, email.value.length)
        })
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

    methods: {
        async Login() {
            try {
                await this.$auth.loginWith("local", {
                    data: {
                        email: this.form.email,
                        password: this.form.password,
                    },
                })
                this.$router.push(this.$route.query.redirect || "/")
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
