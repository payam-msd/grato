<template>
	<!-- <component :is="component" v-if="component" :data="data" /> -->
	<div class="w-full h-auto py-3 flex justify-center items-center bg-gray-100 ">
		<h4 class="text-gray-900">
			{{ 'خرید استثنایی +NOTE 10  در این هفته' }}
		</h4>
		<nuxt-link
			class="px-4 text-lg font-dana-bold bg-black text-gray-100 mx-4"
			to="#"
		>
			{{ 'برو' }}
		</nuxt-link>
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
