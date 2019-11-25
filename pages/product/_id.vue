<template>
    <div class="bg-gray-100 flex px-20 py-12 mt-28">
        <div class="w-2/5 pl-16">
            <h1 class="font-serif-bold text-xl text-gray-900 pb-1 antialiased">
                {{ products.title }}
            </h1>
            <span class="block font-serif-light text-gray-800 pb-3"
                >خاکستری</span
            >
            <span class="block py-3 text-gray-800 font-bold"
                >{{ products.minimum_price | separator }} تومان</span
            >
            <div class="bg-gray-400 h-px"></div>
            <!--
            <product-colors
                :product-colors="colors"
                @onUpdateActive="updateActive"
            />-->

            <AppDropdown
                class="origin-top-right absolute right-0 mt-2 w-48 bg-white rounded-lg border py-2"
            >
                <button
                    class="relative flex items-center focus:outline-none h-12 px-4 rounded-lg bg-gray-200 text-gray-800 font-semibold"
                >
                    {{
                        userSelectedGuaranty == null
                            ? "انتخاب گارانتی"
                            : userSelectedGuaranty.value
                    }}
                    <ChevronBottomIcon
                        v-if="userSelectedGuaranty == null"
                        height="14"
                        width="14"
                        stroke-width="3"
                        class="mr-2 text-gray-800"
                    />
                    <CheckmarkIcon
                        v-else
                        height="14"
                        width="14"
                        stroke-width="3"
                        class="mr-2 text-gray-800"
                    />
                </button>

                <AppDropdownContent>
                    <template v-for="item in guarantiesList">
                        <AppDropdownItem
                            v-for="guaranty in item.presets"
                            :key="guaranty.value.id"
                        >
                            <a
                                class="block hover:bg-gray-200 my-1 px-4 py-2 font-medium text-gray-800"
                                @click="
                                    handleSelectedGuaranty(
                                        item.id,
                                        guaranty.value.value,
                                    )
                                "
                                >{{ guaranty.value.value }}</a
                            >
                        </AppDropdownItem>
                    </template>
                </AppDropdownContent>
            </AppDropdown>

            <div class="text-center mt-40 mb-8">
                <button
                    :disabled="userSelectedGuaranty == null ? true : false"
                    :class="{
                        'cursor-not-allowed': userSelectedGuaranty == null,
                    }"
                    class="w-full p-4 rounded shadow-lg font-serif-bold bg-black hover:bg-black-lighter text-lg text-gray-100 hover:bg-gray-900"
                    @click.prevent="handleAddToCart"
                >
                    اضافه به سبد خرید
                </button>
            </div>
            <p class="text-gray-800 text-sm pb-6">{{ products.description }}</p>
            <div class="bg-gray-500 h-px"></div>
            <ul class="flex justify-around">
                <li class="m-2 text-gray-900 hover:text-black cursor-pointer">
                    <a>جزییات</a>
                </li>
                <li class="m-2 text-gray-900 hover:text-black cursor-pointer">
                    <a>مدت زمان ارسال</a>
                </li>
                <li class="m-2 text-gray-900 hover:text-black cursor-pointer">
                    <a>مقایسه محصول</a>
                </li>
                <li class="m-2 text-gray-900 hover:text-black cursor-pointer">
                    <a>نظرات</a>
                </li>
            </ul>
        </div>

        <div class="w-3/5">
            <img
                class="w-full h-full object-cover bg-center"
                :src="products.media.images[0].path"
                alt
            />
        </div>
    </div>
</template>

<script>
import {ChevronBottomIcon, CheckmarkIcon} from "vue-bytesize-icons"
import {mapGetters} from "vuex"
import CartContent from "~/components/Desktop/SidebarContent"

export default {
    /* eslint-disable camelcase */
    name: "ProductID",
    meta: {
        title: "",
    },
    head() {
        return {
            title: this.products.title,
            meta: [
                {
                    hid: "product",
                    name: this.products.title,
                    content: this.products.description,
                },
            ],
        }
    },
    validate({params}) {
        return /^\d+$/.test(params.id)
    },
    components: {
        CheckmarkIcon,
        ChevronBottomIcon,
    },
    data() {
        return {
            id: this.$route.params.id,
            CartContent,
            result: null,
            quantities: null,
            productPrice: null,
            colors: ["#3182CE", "#48BB78", "#319795"],
            userSelectedColor: null,
            userSelectedGuaranty: null,
        }
    },
    computed: {
        ...mapGetters(["isAuthenticated"]),
    },
    asyncData({params, app, error}) {
        try {
            return app.$SHOW_PRODUCT_DETAIL.show(params.id).then(data => {
                const guaranties = []
                data.items.map(guaranty => {
                    return guaranties.push(guaranty)
                })
                return {
                    guarantiesList: guaranties,
                    products: data,
                }
            })
        } catch (e) {
            //   Error 😨
            error({statusCode: e.code, message: e.message})
        }
    },

    mounted() {
        if (this.isAuthenticated) {
            this.$store.dispatch("GetCartData")
        }
    },
    methods: {
        handleSelectedGuaranty(item_id, item_value) {
            this.userSelectedGuaranty = {
                itemID: item_id,
                value: item_value,
            }
        },
        handleAddToCart() {
            if (!this.isAuthenticated) {
                this.$router.push({
                    name: "auth-register",
                    query: {redirect: `/product/${this.id}`},
                })
            }
            this.$store.dispatch("UpdateCart", {
                itemID: this.userSelectedGuaranty.itemID,
                quantity: 1,
            })
            this.$store.dispatch("toggleSidebar", {
                component: this.CartContent,
            })
        },
        updateActive(payload) {
            this.userSelectedColor = payload
        },
    },
}
</script>

<style scoped></style>
