<template>
    <div>
        <Notification v-if="$route.name === 'auth-login'" />
        <div class="container mx-auto px-4 lg:px-6">
            <nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "~/components/Footer"
import Notification from "~/components/Notification"
export default {
    components: {
        Footer,
        Notification,
    },
}
</script>

<style scoped></style>
