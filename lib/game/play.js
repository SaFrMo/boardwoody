import generateBlocks from './moves/generate-blocks'
import playBlock from './moves/play-block'

export default {
    onBegin(G, ctx) {
        G.hand = generateBlocks(G, ctx)
    },

    start: true,

    moves: {
        generateBlocks,
        playBlock
    }
}
