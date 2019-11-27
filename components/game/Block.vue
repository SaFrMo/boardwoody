<template>
    <div class="single-block" :style="{ '--width': width, '--height': height }">
        <div
            v-for="(piece, i) in width * height"
            :class="['piece', { filled: getPieceByIndex(i) }]"
            :key="i"
        />
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
        }
    },
    methods: {
        getPieceByIndex(index) {
            const x = index % this.block[0].length
            const y = Math.floor(index / this.block[0].length)
            return this.block[y][x]
        }
    }
}
</script>

<style lang="scss">
.single-block {
    display: grid;
    grid-template-columns: repeat(var(--width), var(--side));
    grid-template-rows: repeat(var(--height), var(--side));
    grid-gap: var(--gap);

    .piece.filled {
        background: var(--medium);
        box-sizing: border-box;
    }
}
</style>
