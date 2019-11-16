<template>
    <div>
        <!-- <div class="makeBGAnimated h-screen w-full fixed inset-0 z-20"></div> -->
        <!-- <Sidebar /> -->
        <Sidebar />
        <Notification />
        <NavbarMobile :menu-content="MenuContent" :cart-content="CartContent" />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import {mapGetters, mapState} from "vuex"
// import CartContent from "~/components/SidebarContent"
import Navbar from "@/components/Desktop/Navbar"
import NavbarMobile from "@/components/Mobile/Navbar"
import Footer from "@/components/Footer"
import Notification from "~/components/Notification"
import MenuContent from "~/components/Mobile/MenuContent"
import CartContent from "~/components/Mobile/CartContent"
import Sidebar from "~/components/Mobile/Sidebar"
// import Sidebar from "@/components/Sidebar"

export default {
    /* eslint-disable no-undef */
    components: {
        Navbar,
        Sidebar,
        // Sidebar,
        Notification,
        NavbarMobile,
        Footer,
    },

    data() {
        return {
            MenuContent,
            CartContent,
        }
    },

    computed: {
        ...mapGetters(["userErrorCode", "loggedInUser"]),
        ...mapState(["sidebarOpen"]),
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
