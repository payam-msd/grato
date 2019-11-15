<template>
    <div>
        <Hero />
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import Hero from "~/components/Hero"

export default {
    name: "Home",
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
    },

    computed: {
        ...mapGetters(["isAuthenticated"]),
    },

    async fetch({app, store}) {
        await app.$FETCH_NAVBAR
            .index()
            .then(res => store.commit("NAVBAR_DATA", res))
    },

    mounted() {
        if (this.isAuthenticated) {
            this.$store.dispatch("GetCartData")
        }
    },
}
</script>

<style></style>
