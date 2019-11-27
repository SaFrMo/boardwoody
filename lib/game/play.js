import generateBlocks from './moves/generate-blocks'

export default {
    onBegin(G, ctx) {
        G.hand = generateBlocks(G, ctx)
    },

    start: true,

    moves: {
        generateBlocks
    }
}
