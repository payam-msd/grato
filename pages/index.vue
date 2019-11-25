<template>
    <div>
        <template v-if="$device.isDesktop">
            <Hero />
        </template>
        <template v-if="$device.isMobileOrTablet">
            <HeroMobile />
        </template>
        <!-- <ProdcutsNav
            :products="products"
            :latest="latest"
            :best-sellers="bestSellers"
            :shop-suggestions="shopSuggestions"
            :instant-suggestions="instantSuggestions"
            :special-offers="specialOffers"
        /> -->
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import Hero from "~/components/Desktop/Hero"
import HeroMobile from "~/components/Mobile/Hero"
import ProdcutsNav from "~/components/ProductsNav"

export default {
    name: "Home",
    layout: ctx => (ctx.isDesktop ? "desktop" : "mobile"),
    meta: {
        title: "فروشگاه اینترنتی گراتو",
    },
    head() {
        return {
            title: "فروشگاه اینترنتی گراتو",
            meta: [
                {
                    hid: "Home",
                    name: "فروشگاه اینترنتی گراتو",
                    content: "فروشگاه اینترنتی گراتو",
                },
            ],
        }
    },

    components: {
        Hero,
        HeroMobile,
        ProdcutsNav,
    },

    computed: {
        ...mapGetters(["isAuthenticated"]),
    },

    // async asyncData({app}) {
    //     return {
    //         products: await app.$FETCH_PRODUCTS.index(),
    // latest: await app.$FETCH_LATEST_PRODUCTS.index(),
    // bestsellers: await app.$FETCH_BESTSELLERS.index(),
    // shopSuggestions: await app.$FETCH_SHOP_SUGGESTIONS.index(),
    // instantSuggestions: await app.$FETCH_INSTANT_SUGGESTIONS.index(),
    // specialOffers: await app.$FETCH_SPECIAL_OFFERS.index(),
    //     }
    // },

    // async fetch({app, store}) {
    //     await app.$FETCH_CATEGORIES
    //         .index()
    //         .then(res => store.commit("CATEGORIES_DATA", res))
    // },

    mounted() {
        if (this.isAuthenticated) {
            this.$store.dispatch("GetCartData")
        }
    },
}
</script>

<style></style>
