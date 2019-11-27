<template>
    <client-only>
        <section class="game-wrap" v-if="G">
            <!-- board -->
            <game-board />
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
    --side: 25px;
    --gap: 2px;
    --light: #f1f1f1;
    --medium: #dedede;

    max-width: 500px;
    margin: 40px auto 0;
    text-align: center;

    .game-hand {
        margin-top: 40px;
    }
}
</style>
