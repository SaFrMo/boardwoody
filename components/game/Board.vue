<template>
    <section class="game-board">
        <div
            :class="['cell', { filled: cell }]"
            v-for="(cell, i) in G.grid"
            :key="i"
        >
            <button @click="place(i)" class="placer" />
        </div>
    </section>
</template>

<script>
import { getCoordsFromIndex } from '~/lib/game/utils'

export default {
    methods: {
        place(index) {
            // ignore if no valid staged block
            if (!this.G.hand[this.$store.state.stagedBlockIndex]) return

            this.$store.dispatch('PLAY_MOVE', {
                move: 'playBlock',
                options: {
                    blockIndex: this.$store.state.stagedBlockIndex,
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
        position: relative;

        &.filled {
            background: var(--foreground);
        }

        .placer {
            @include fill;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
