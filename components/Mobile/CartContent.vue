<template>
    <div class="p-4 flex">
        <a
            role="button"
            tabindex="0"
            @click="$store.commit('TOGGLE_SIDEBAR', {component: undefined})"
        >
            x
        </a>
        THERE WE ARE CART CONTENT
    </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
