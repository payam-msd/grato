<template>
    <div>
        <!-- <div class="makeBGAnimated h-screen w-full fixed inset-0 z-20"></div> -->
        <Sidebar />
        <Notification />
        <Navigation :menu-content="MenuContent" :cart-content="CartContent" />
        <div class="container mx-auto px-4">
            <nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
import {mapState} from "vuex"
import Navigation from "~/components/Mobile/Navbar"
import Sidebar from "~/components/Mobile/Sidebar"
import Footer from "~/components/Footer"
import Notification from "~/components/Notification"
import MenuContent from "~/components/Mobile/MenuContent"
import CartContent from "~/components/Mobile/CartContent"

export default {
    /* eslint-disable no-undef */
    components: {
        Sidebar,
        Notification,
        Navigation,
        Footer,
    },

    data() {
        return {
            MenuContent,
            CartContent,
        }
    },

    computed: {
        ...mapState(["sidebar"]),
    },

    watch: {
        //     sidebarOpen(newValue) {
        //         const tl = gsap
        //         const autoAlpha = newValue ? 1 : 0
        //         tl.to(".makeBGAnimated", 0.75, {autoAlpha})
        //     },
        // },
        // mounted() {
        //     gsap.set(".makeBGAnimated", {autoAlpha: 0})
    },
}
</script>

<style></style>
