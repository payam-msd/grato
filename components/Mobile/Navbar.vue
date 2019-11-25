<template>
    <header
        class="px-6 bg-white flex flex-wrap justify-between items-center py-3"
    >
        <a
            tabindex="0"
            role="button"
            class="p-1 focus:outline-none focus:shadow-outline rounded"
        >
            <Menu
                class="w-8 fill-current text-black focus:outline-none"
                @click="
                    $store.commit('TOGGLE_SIDEBAR', {component: menuContent})
                "
            />
        </a>

        <nuxt-link
            tag="a"
            class="p-1 text-2xl text-green-800 font-dana-bold
            focus:outline-none focus:shadow-outline rounded"
            to="/"
            >{{ "گراتو" }}</nuxt-link
        >

        <a
            role="button"
            tabindex="0"
            class="relative focus:outline-none focus:shadow-outline rounded"
            @click="$store.commit('TOGGLE_SIDEBAR', {component: cartContent})"
        >
            <cart class="w-7 m-1 text-black" transform="scale(-1,1)" />
            <span
                v-if="cart.inCart"
                class="cart-prop-m w-6 h-6 bg-teal-500 text-white text-xs
                rounded-full flex justify-center items-center"
                >{{ cart.inCart }}</span
            >
        </a>
    </header>
</template>

<script>
import {mapState} from "vuex"
import Cart from "~/assets/svg/icons/cart.svg"
import Menu from "~/assets/svg/icon-/icon-menu.svg"
export default {
    components: {
        Menu,
        Cart,
    },

    props: {
        menuContent: {
            type: Object,
            default: () => {},
        },
        cartContent: {
            type: Object,
            default: () => {},
        },
    },

    computed: {
        ...mapState(["cart"]),
    },
}
</script>

<style scoped></style>
