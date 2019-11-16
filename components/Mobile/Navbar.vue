<template>
    <header
        class="px-6 bg-white flex flex-wrap justify-between items-center py-3"
    >
        <a tabindex="0" role="button">
            <Menu
                class="w-10 -mr-2 fill-current text-gray-800"
                @click="
                    $store.commit('TOGGLE_SIDEBAR', {component: menuContent})
                "
            />
        </a>

        <nuxt-link
            tag="a"
            class="text-3xl text-green-800 font-dana-bold pt-1"
            to="/"
            >{{ "گراتو" }}</nuxt-link
        >

        <a
            role="button"
            tabindex="0"
            class="relative flex items-center"
            @click="$store.commit('TOGGLE_SIDEBAR', {component: cartContent})"
        >
            <cart
                class="w-7 text-gray-700 hover:text-gray-900"
                transform="scale(-1,1)"
            />
            <span
                v-if="cart.inCart"
                class="cart-prop w-6 h-6 bg-teal-500 font-bold text-white text-xs rounded-full inline-flex justify-center items-center"
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
