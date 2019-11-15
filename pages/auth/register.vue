<template>
    <div class="container mx-auto">
        <div class="flex items-center justify-start">
            <div class="w-1/2 mt-12 mx-8">
                <form class="w-3/5" @submit.prevent="Register">
                    <div class="p-3 pb-4">
                        <h1 class="text-black  text-2xl">
                            {{ "ثبت نام" }}
                        </h1>
                    </div>
                    <div class="py-2">
                        <div class="flex justify-start items-end">
                            <UserIcon
                                stroke-width="1.7"
                                class="text-gray-700 w-8 h-8"
                            />
                            <label class="text-gray-900 mx-1 " for="username"
                                >نام کاربری</label
                            >
                        </div>
                    </div>
                    <div class="mb-2 relative">
                        <input
                            id="username"
                            ref="username"
                            v-model.lazy="$v.form.username.$model"
                            class="input w-4/5 focus:border-2 focus:border-black focus:outline-none focus:bg-white"
                            type="text"
                            @keyup.enter="$refs.email.focus()"
                        />
                    </div>
                    <div class="py-2">
                        <div class="flex justify-start items-end">
                            <MailIcon
                                stroke-width="1.7"
                                class="text-gray-700 w-8 h-8"
                            />
                            <label class="text-gray-900 mx-1 " for="email"
                                >ایمیل</label
                            >
                        </div>
                    </div>
                    <div class="mb-2">
                        <input
                            id="email"
                            ref="email"
                            v-model.lazy="$v.form.email.$model"
                            class="input w-4/5 focus:bg-white focus:outline-none focus:border-2 focus:border-black"
                            type="text"
                            @keyup.enter="$refs.password.focus()"
                        />
                    </div>
                    <div class="py-2">
                        <div class="flex justify-start items-end">
                            <LockIcon
                                stroke-width="1.7"
                                class="text-gray-700 w-8 h-8"
                            />
                            <label class="text-gray-900 mx-1 " for="email"
                                >کلمه عبور</label
                            >
                        </div>
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
                            class="w-4/5 input focus:bg-white focus:outline-none focus:border-2 focus:border-black"
                            autocomplete="new-password"
                            :type="passwordType"
                        />
                    </div>

                    <div class="text-sm text-gray-800 pl-16 py-2 inline-flex">
                        <div class="py-1 px-2">
                            <input v-model="rulesAgreed" type="checkbox" />
                        </div>
                        <p>
                            <nuxt-link
                                tag="a"
                                class=" text-blue-500 hover:underline mx-1"
                                to="/page"
                                >{{ "حریم خصوصی" }}
                            </nuxt-link>
                            {{ "و" }}
                            <nuxt-link
                                tag="a"
                                class=" text-blue-500 hover:underline mx-1"
                                to="/page"
                                >{{ "شرایط و قوانین" }}</nuxt-link
                            >
                            استفاده از سرویس های سایت گراتو را مطالعه نموده و با
                            کلیه موارد آن موافقم.
                        </p>
                    </div>
                    <div class="my-4">
                        <button
                            :disabled="rulesAgreed == true ? false : true"
                            type="submit"
                            :class="{'cursor-not-allowed': !rulesAgreed}"
                            class="btn text-sm py-3 px-6 pl-2 hover:bg-gray-900 hover:text-white"
                        >
                            <span>ثبت نام در گراتو</span>
                            <SendIcon class="icon w-10" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {MailIcon, UserIcon, LockIcon} from "vue-bytesize-icons"
import {required, minLength, email} from "vuelidate/lib/validators"
import EyeIcon from "~/assets/svg/icons/eye.svg"
import CloseEye from "~/assets/svg/icons/closeEye.svg"
import SendIcon from "~/assets/svg/icons/sendIcon.svg"

export default {
    middleware: "guest",
    head() {
        return {
            meta: [
                {
                    hid: "register",
                    name: "ثبت نام",
                    content: "ثبت نام در گراتو",
                },
            ],
        }
    },
    components: {
        MailIcon,
        EyeIcon,
        UserIcon,
        LockIcon,
        CloseEye,
        SendIcon,
    },
    data() {
        return {
            hidePassword: true,
            rulesAgreed: null,
            form: {
                email: "",
                username: "",
                password: "",
            },
        }
    },
    computed: {
        passwordType() {
            return this.hidePassword ? "password" : "text"
        },
        passwordIcon() {
            return !this.hidePassword ? "text-green-600" : "text-gray-500"
        },
    },
    mounted() {
        this.$nextTick(() => {
            const {username} = this.$refs
            username.focus()
            username.setSelectionRange(0, username.value.length)
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
