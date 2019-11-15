<template>
    <div>
        <!-- <div class="makeBGAnimated h-screen w-full fixed inset-0 z-20"></div> -->
        <!-- <Sidebar /> -->
        <Notification />
        <Navbar />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import {mapGetters, mapState} from "vuex"
// import CartContent from "~/components/SidebarContent"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Notification from "~/components/Notification"
// import Sidebar from "@/components/Sidebar"

export default {
    /* eslint-disable no-undef */
    components: {
        Navbar,
        // Sidebar,
        Notification,
        Footer,
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
