<template>
    <div class="text-md lg:flex-grow">
        <ul class="flex items-center">
            <div
                class="props2 block text-gray-800 text-sm cursor-pointer overflow-hidden mr-6 lg:inline-block lg:mt-0 hover:text-black "
                @mouseover="handleSharedState"
            >
                <slot name="title" />
                <ChevronBottom class="icon w-3" stroke-width="3" />
            </div>
            <slot name="wrapper" @mouseout="handleSharedState" />
        </ul>
    </div>
</template>

<script>
import ChevronBottom from "~/assets/svg/icons/chevron-bottom.svg"

export default {
    name: "HoverCategoryName",
    provide() {
        return {
            sharedState: this.sharedState,
        }
    },
    components: {
        ChevronBottom,
    },
    data() {
        return {
            sharedState: {
                active: false,
            },
        }
    },
    methods: {
        handleSharedState() {
            this.sharedState.active = !this.sharedState.active
        },
    },
}
</script>

<style scoped>
.props2 {
    word-spacing: -2px;
}
</style>
