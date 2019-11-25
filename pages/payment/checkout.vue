<template>
    <div class="flex">
        <div class="w-55 bg-rose-100">
            <div class="pr-28 pl-16 py-12 text-gray-800">
                <nuxt-link
                    class="text-5xl text-green-800 font-serif-bold tracking-wide"
                    to="/"
                    >گراتو</nuxt-link
                >
                <div class="py-4 flex justify-between items-center">
                    <h1 class="text-black text-lg">اطلاعات شخصی</h1>
                    <h1 class="text-xs text-blue-800">
                        قبلا ثبت نام کرده اید ؟
                        <nuxt-link
                            class="text-black hover:underline"
                            to="/auth/login"
                            >وارد شوید</nuxt-link
                        >
                    </h1>
                </div>
                <input
                    ref="email"
                    v-model="form.email"
                    class="w-full px-4 my-4 h-12 rounded border border-gray-400 focus:border-black focus:border-2 focus:outline-none"
                    type="text"
                    placeholder="ایمیل"
                />
                <input id="newsletter" class="input" type="checkbox" />
                <label class="label pr-1 text-sm" for="newsletter"
                    >من رو از آخرین تخفیف ها باخبر کن</label
                >
                <h1 class="text-black text-lg pb-4 pt-8">اطلاعات پرداخت</h1>
                <form class="w-full" @submit.prevent="handleUserDetail">
                    <div class="flex flex-wrap mb-6">
                        <div class="w-full md:w-1/2 pl-2 mb-6 md:mb-0">
                            <label
                                class="block pr-4 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                                >نام</label
                            >
                            <input
                                id="grid-first-name"
                                v-model="form.first_name"
                                class="appearance-none block w-full text-gray-700 border border-gray-400 focus:border-2 focus:border-black rounded h-12 px-4 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="امیر"
                            />
                        </div>
                        <div class="w-full md:w-1/2">
                            <label
                                class="block pr-4 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name"
                                >نام خانوادگی</label
                            >
                            <input
                                id="grid-last-name"
                                v-model="form.last_name"
                                class="appearance-none block w-full text-gray-700 border border-gray-400 focus:border-2 focus:border-black rounded h-12 px-4 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="مقصودی"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap mb-6">
                        <div class="w-full">
                            <label
                                class="block pr-4 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-address"
                                >آدرس</label
                            >
                            <input
                                id="grid-address"
                                v-model="userAddress"
                                class="appearance-none block w-full text-gray-700 border border-gray-400 rounded h-12 px-4 mb-3 leading-tight focus:outline-none focus:border-black focus:border-2"
                                type="text"
                                placeholder="خیابان خسروی پلاک ۱"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap mb-2">
                        <div class="w-full md:w-1/2 pl-2 mb-6 md:mb-0">
                            <label
                                class="block pr-4 pr-4 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-state"
                                >استان</label
                            >
                            <div class="relative">
                                <select
                                    id="grid-state"
                                    v-model="state"
                                    class="block appearance-none w-full border bg-white border-gray-400 text-gray-700 h-12 px-4 pr-12 rounded leading-tight focus:outline-none focus:border-2 focus:border-black"
                                >
                                    <option disabled value>انتخاب</option>
                                    <option
                                        v-for="(province, id) in provinces"
                                        :key="id"
                                        :value="{province}"
                                        >{{ province.name }}</option
                                    >
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                >
                                    <svg
                                        class="fill-current mr-2 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                    <svg
                                        id="thin-line"
                                        class="inline text-gray-500 -mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        width="26"
                                        height="26"
                                        stroke="currentcolor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width=".7"
                                    >
                                        <path d="M9 2 L9 35" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 mb-6 md:mb-0">
                            <label
                                class="block pr-4 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-state"
                                >شهر</label
                            >
                            <div class="relative">
                                <select
                                    id="grid-city"
                                    v-model="city"
                                    class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 h-12 px-4 pr-12 rounded leading-tight focus:outline-none focus:border-2 focus:border-black"
                                >
                                    <option disabled value
                                        >ابتدا استان را انتخاب نمایید</option
                                    >
                                    <option
                                        v-for="(item, id) in citiesData"
                                        :key="id"
                                        >{{ item.name }}</option
                                    >
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                >
                                    <svg
                                        class="fill-current mr-2 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                    <svg
                                        id="thin-line"
                                        class="inline text-gray-500 -mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        width="26"
                                        height="26"
                                        stroke="currentcolor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width=".7"
                                    >
                                        <path d="M9 2 L9 35" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div
                            class="flex flex-row-reverse justify-between items-center py-8 w-full"
                        >
                            <button
                                class="bg-black h-16 w-1/3 text-md font-serif-bold rounded text-gray-100 hover:bg-gray-900"
                                type="submit"
                            >
                                ادامه خرید
                            </button>
                            <nuxt-link
                                class="text-xs hover:text-black hover:underline"
                                :to="$route.query.redirect"
                            >
                                <ChevronRightIcon
                                    class="inline mb-1"
                                    stroke-width="3"
                                    height="12"
                                    width="12"
                                />برگشت به محصول
                            </nuxt-link>
                        </div>
                        <div class="border-b border-gray-400 w-full"></div>
                    </div>
                </form>
            </div>
        </div>
        <div class="w-2/5 border-r border-gray-400">
            <div class="pl-20 mr-12 mt-16 text-sm">
                <div v-for="(order, index) in ordersList" :key="index">
                    <div
                        class="w-full flex flex-row-reverse justify-start my-6"
                    >
                        <div class="relative border border-gray-400 rounded">
                            <span
                                class="cart-prop w-6 h-6 bg-teal-500 font-bold text-white text-xs rounded-full inline-flex justify-center"
                                >{{ order.quantity }}</span
                            >
                            <img
                                :src="order.product.media.images[0].path"
                                class="object-scale-down rounded-lg w-32 h-20"
                            />
                        </div>
                        <div class="flex flex-col ml-auto">
                            <h1
                                class="font-serif text-sm -mt-1 pb-3 tracking-wide text-gray-900"
                            >
                                {{ order.product.title }}
                            </h1>
                            <span class="pt-8 text-gray-800">
                                {{
                                    calculatePrice(
                                        order.item.price,
                                        order.quantity,
                                    ) | separator
                                }}
                            </span>
                        </div>
                    </div>
                    <div class="flex h-px w-full bg-gray-400"></div>
                </div>
                <div class="my-6 relative">
                    <input
                        class="border border-gray-400 px-4 h-12 rounded w-full focus:border-black focus:border-2 focus:outline-none appearance-none"
                        placeholder="کد کارت تخفیف یا هدیه"
                        type="text"
                    />
                    <div class="absolute left-0 ml-1 button-prop">
                        <svg
                            id="thin-line"
                            class="inline text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="26"
                            height="26"
                            stroke="currentcolor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width=".7"
                        >
                            <path d="M9 2 L9 35" />
                        </svg>
                        <button
                            class="h-10 w-20 rounded bg-black text-gray-100 font-serif-bold"
                        >
                            ثبت
                        </button>
                    </div>
                </div>
                <div class="flex h-px w-full bg-gray-400"></div>
                <div class="my-6">
                    <p class="text-gray-800 flex justify-between">
                        هزینه پست:
                        <span>صفحه بعد حساب شده</span>
                    </p>
                    <p class="text-gray-800 flex justify-between mt-2">
                        جمع سفارشات:
                        <span>{{ sumOfList | separator }}</span>
                    </p>
                </div>
                <div class="flex h-px w-full bg-gray-400"></div>
                <p class="text-gray-900 text-lg py-6 flex justify-between mt-2">
                    جمع کل:
                    <span>{{ sumOfList | separator }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from "vuex"
import {ChevronRightIcon} from "vue-bytesize-icons"
export default {
    /* eslint-disable prefer-const */
    name: "Checkout",
    middleware: "guest",
    head() {
        return {
            title: "اطلاعات حساب",
            meta: [
                {
                    hid: "accountInfo",
                    name: "اطلاعات حساب",
                    content: "بررسی خرید و تکمیل اطلاعات حساب",
                },
            ],
        }
    },
    components: {
        ChevronRightIcon,
    },
    data() {
        return {
            // * Cities Data will store here
            citiesData: null,

            // * Form handling happens here
            state: null,
            city: null,
            userAddress: null,
            form: {
                email: null,
                first_name: null,
                last_name: null,
            },
        }
    },
    computed: {
        ...mapState(["provinces", "ordersList", "sumOfList"]),
        ...mapGetters(["isAuthenticated"]),
    },
    watch: {
        async state(newValue) {
            const data = await this.$SHOW_PROVINCES_CITIES.showCities(
                newValue.province.id,
            )
            this.citiesData = data
        },
    },
    mounted() {
        this.$nextTick(() => {
            const {email} = this.$refs
            email.focus()
            email.setSelectionRange(0, email.value.length)
        })
        if (this.isAuthenticated) {
            this.$store.dispatch("GetCartData")
        }
    },
    methods: {
        handleUserDetail() {},
        calculatePrice(price, quantity) {
            return price * quantity
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
.input {
    width: 15px;
    height: 13px;
    padding: 0;
    margin: 0;
    vertical-align: bottom;
    position: relative;
    top: -4px;
    overflow: hidden;
}
.cart-prop {
    position: absolute;
    left: -15px;
    top: -10px;
    line-height: 1.4rem;
    border: 1.5px solid #fff;
}
.button-prop {
    top: 50%;
    transform: translateY(-50%);
}
</style>
