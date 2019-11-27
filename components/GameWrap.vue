<template>
    <client-only>
        <section class="game-wrap" v-if="G">
            <!-- board -->
            <!-- hand -->
            <game-hand />
        </section>
    </client-only>
</template>

<script>
export default {}
</script>

<style lang="scss">
.game-wrap {
}
</style>
