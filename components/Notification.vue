<template>
    <!-- <component :is="component" v-if="component" :data="data" /> -->
    <div class="flex justify-center items-center bg-rose-100 h-10">
        <p class="text-black tracking-wide text-sm">
            {{ "خرید استثنایی +NOTE 10  در این هفته" }}
        </p>
        <nuxt-link
            tag="a"
            class="text-sm font-dana-bold bg-black text-gray-100 rounded px-4 mr-3 hover:bg-gray-900"
            to="/specialSuggestion/id"
            >برو</nuxt-link
        >
    </div>
</template>

<script>
export default {
    //     name: "Notification",
    //     props: ["data", "type"],
    //     data() {
    //         return {
    //             itemNotif: "خرید Note10 با تخفیف استثنایی",
    //             component: "specialSuggestion",
    //         }
    //     },
    //     computed: {
    //         loader() {
    //             if (!this.type) {
    //                 return null
    //             }
    //             return () =>
    //                 import(`~/components/notification/${this.type}/notif.vue`)
    //         },
    //     },
    //     mounted() {
    //         this.loader()
    //             .then(() => {
    //                 this.component = () => this.loader()
    //             })
    //             .catch(() => {
    //                 this.component = () =>
    //                     import(
    //                         `~/components/notification/specialSuggestion/notif.vue`
    //                     )
    //             })
    //     },
}
</script>

<style scoped></style>
