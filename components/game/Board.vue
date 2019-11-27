<template>
    <section class="game-board">
        <div
            :class="['cell', { filled: cell }]"
            v-for="(cell, i) in G.grid"
            :key="i"
        />
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.game-board {
    display: inline-grid;
    grid-template: repeat(10, var(--side)) / repeat(10, var(--side));
    grid-gap: var(--gap);
    justify-content: center;
    background: var(--light);
    margin: auto;
    padding: 20px;
    text-align: center;

    .cell {
        background: var(--medium);
    }
}
</style>
