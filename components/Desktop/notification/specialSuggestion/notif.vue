<template>
    <div class="flex justify-center items-center bg-rose-100 h-10">
        <p class="text-gray-900 font-serif-bold tracking-wide text-sm">
            {{ data }}
        </p>
        <nuxt-link
            tag="a"
            class="bg-black text-gray-100 h-6 rounded leading-tight px-4 mr-3 font-serif hover:bg-gray-900"
            to="/specialSuggestion/id"
            >برو</nuxt-link
        >
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: String,
            default: "محصولی موجود نیست",
        },
    },
}
</script>

<style lang="scss" scoped></style>
