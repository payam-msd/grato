<template>
    <div v-on-clickaway="handleClickOutSide" @click="toggle">
        <slot />
    </div>
</template>

<script>
import {mixin as clickaway} from "vue-clickaway"
export default {
    name: "AppDropdown",

    mixins: [clickaway],

    provide() {
        return {
            sharedState: this.sharedState,
        }
    },

    data() {
        return {
            sharedState: {
                active: false,
            },
        }
    },

    methods: {
        toggle() {
            this.sharedState.active = !this.sharedState.active
        },
        handleClickOutSide() {
            this.sharedState.active = false
        },
    },
}
</script>

<style scoped></style>
