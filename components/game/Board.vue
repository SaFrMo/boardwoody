<template>
    <section class="game-board">
        <div
            :class="['cell', { filled: cell }]"
            v-for="(cell, i) in G.grid"
            :key="i"
        >
            <button @click="place(i)" />
        </div>
    </section>
</template>

<script>
import { getCoordsFromIndex } from '~/lib/game/utils'

export default {
    methods: {
        place(index) {
            this.$store.dispatch('PLAY_MOVE', {
                move: 'playBlock',
                options: {
                    blockIndex: 0, //this.$store.state.combat.playing,
                    topLeft: getCoordsFromIndex(index)
                }
            })
        }
    }
}
</script>

<style lang="scss">
.game-board {
    display: inline-grid;
    grid-template: repeat(10, var(--side)) / repeat(10, var(--side));
    grid-gap: var(--gap);
    justify-content: center;
    background: var(--background);
    margin: auto;
    padding: 20px;
    text-align: center;

    .cell {
        background: var(--lighter-background);

        &.filled {
            background: var(--foreground);
        }
    }
}
</style>
