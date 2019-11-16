<template>
    <div>
        <Notification v-if="$route.name === 'auth-login'" />
        <nuxt />
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
