<template>
    <div>
        <div v-for="(item, i) in items" :key="i">
            <h5 v-show="i === id" class="text-md text-gray-900">
                {{ item.title }}
                <ChevronLeft
                    class="inline"
                    width="12"
                    height="12"
                    stroke-width="3.5"
                />
            </h5>
        </div>
    </div>
</template>

<script>
import ChevronLeft from "~/assets/svg/icons/chevron-left.svg"
export default {
    name: "HoverItemDetail",
    components: {
        ChevronLeft,
    },
    props: {
        items: {
            type: Array,
            default: () => {},
        },
        id: {
            type: Number,
            default: () => {},
        },
    },
}
</script>

<style scoped></style>
