<template>
    <div class="single-block" :style="{ '--width': width, '--height': height }">
        <button @touchstart="stageMe" class="selector">
            <div
                :class="[
                    'piece-grid',
                    { selected: $store.state.stagedBlockIndex == index }
                ]"
                :style="cmpStyle"
            >
                <div
                    v-for="(piece, i) in width * height"
                    :class="['piece', { filled: getPieceByIndex(i) }]"
                    :key="i"
                />
            </div>
        </button>
    </div>
</template>

<script>
export default {
    props: ['index'],
    computed: {
        block() {
            return this.G.hand[this.index]
        },
        height() {
            return this.block.length
        },
        width() {
            return this.block[0].length
        },
        area() {
            return this.height * this.width
        },
        cmpStyle() {
            if (this.$store.state.stagedBlockIndex != this.index) {
                return {}
            }

            return {
                top: this.$store.state.mouseY + 'px',
                left: this.$store.state.mouseX + 'px'
            }
        }
    },
    methods: {
        getPieceByIndex(index) {
            const x = index % this.block[0].length
            const y = Math.floor(index / this.block[0].length)
            return this.block[y][x]
        },
        stageMe(evt) {
            this.$store.commit('STAGE_BLOCK', this.index)

            if (evt.touches && evt.touches.length) {
                const touch = evt.touches[0]
                this.$store.commit('UPDATE_MOUSE', {
                    x: touch.clientX,
                    y: touch.clientY
                })
            }
        }
    }
}
</script>

<style lang="scss">
.single-block {
    .piece-grid {
        display: grid;
        grid-template-columns: repeat(var(--width), var(--side));
        grid-template-rows: repeat(var(--height), var(--side));
        grid-gap: var(--gap);

        &.selected {
            position: fixed;
            transform: translate(-50%, -100%);
            pointer-events: none;
        }
        .piece.filled {
            background: var(--foreground);
            box-sizing: border-box;
        }
    }
}
</style>
