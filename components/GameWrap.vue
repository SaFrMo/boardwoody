<template>
    <client-only>
        <section class="game-wrap" v-if="G">{{ G.grid }}</section>
    </client-only>
</template>

<script>
export default {}
</script>

<style lang="scss">
.game-wrap {
}
</style>
