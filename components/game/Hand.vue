<template>
    <section class="game-hand-wrap">
        <ul class="game-hand">
            <li v-for="(block, i) in G.hand" :key="i" class="block-wrap">
                <game-block :index="i" v-if="block" />
            </li>
        </ul>

        <button @click="redraw" class="pass">Pass</button>
    </section>
</template>

<script>
export default {
    methods: {
        redraw() {
            this.$store.dispatch('PLAY_MOVE', {
                move: 'fillHand'
            })
        }
    }
}
</script>

<style lang="scss">
.game-hand-wrap {
    margin-top: 20px;

    .game-hand {
        list-style: none;
        padding: 0;
        margin: 0;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 150px;
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

    .pass {
        margin-top: 20px;
        background: var(--background);
        color: white;
        padding: 10px;
    }
}
</style>
