<template>
    <div class="flex justify-center items-center bg-red-200 h-12">
        <p class="text-red-800 font-serif-bold">{{ data }}</p>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: String,
            default: "مشکلی پیش آمده! لطفا بعدا دوباره تلاش کنید",
        },
    },
}
</script>

<style lang="scss" scoped></style>
