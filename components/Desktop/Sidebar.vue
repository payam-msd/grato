<template>
    <div class="sidebar-props bg-white">
        <div class>
            <button
                class="absolute left-0 focus:outline-none"
                @click="
                    $store.commit('TOGGLE_SIDEBAR', {
                        component: undefined,
                    })
                "
            >
                <Close
                    height="18"
                    width="18"
                    stroke-width="3"
                    class="mt-4 ml-4 text-gray-700 hover:text-black"
                />
            </button>

            <div
                class="h-10 w-full tracking-wide text-sm bg-rose-100 flex justify-center items-center"
            >
                <p class="text-black">{{ notif }}</p>
            </div>

            <div
                v-scroll-lock="sidebar.isActive"
                class="w-full h-screen overflow-scroll  flex-1 flex-col justify-start items-stretch px-16 props"
            >
                <component :is="sidebar.sidebarContent" />

                <div class="flex pt-8 justify-between">
                    <p>جمع کل :</p>
                    <span>{{ sumOfList | separator }}</span>
                </div>
                <ul class="w-full my-16">
                    <li
                        class="shadow-lg text-center text-lg rounded font-serif-bold bg-black text-gray-100 hover:bg-gray-900 cursor-pointer"
                    >
                        <!-- <button
                            :disabled="!ordersList.length ? true : false"
                            class="w-full py-4"
                            :class="{'cursor-not-allowed': !ordersList.length}"
                            @click="
                                $router.push({
                                    name: 'checkout',
                                    query: {
                                        redirect: `/product/${$route.params.id}`,
                                    },
                                })
                            "
                        >
                            بررسی خرید
                        </button> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
import Close from "~/assets/svg/icons/close.svg"

export default {
    components: {
        Close,
    },
    data() {
        return {
            notif: "با خرید بیش از 2,000,000 ارسال رایگان از ما هدیه بگیرید",
            price: null,
        }
    },
    computed: {
        ...mapState(["sidebar"]),
    },
    watch: {
        "sidebar.isActive"(isActive) {
            const tl = gsap
            const direction = isActive ? 0 : this.$el.offsetWidth
            tl.to(this.$el, {
                duration: 0.75,
                x: direction,
                ease: "power1.out",
            })
        },
    },
    beforeDestroy() {
        this.$store.commit("TOGGLE_SIDEBAR", {component: undefined})
    },
    mounted() {
        gsap.set(this.$el, {
            x: this.$el.offsetWidth,
        })
    },
}
</script>

<style></style>
