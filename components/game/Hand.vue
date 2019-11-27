<template>
    <ul class="game-hand">
        <li v-for="(block, i) in G.hand" :key="i" class="block-wrap">
            <game-block :index="i" v-if="block" />
        </li>
    </ul>
</template>

<script>
export default {}
</script>

<style lang="scss">
.game-hand {
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;

    .block-wrap {
        background: var(--background);
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
    }
}
</style>
