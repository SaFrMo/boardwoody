import fillHand from './moves/fill-hand'
import playBlock from './moves/play-block'

export default {
    onBegin(G, ctx) {
        fillHand(G, ctx)
    },

    start: true,

    moves: {
        fillHand,
        playBlock
    }
}
