import fillHand from './moves/fill-hand'
import playBlock from './moves/play-block'
import loadGame from './moves/load-game'
import saveGame from './moves/save-game'

export default {
    onBegin(G, ctx) {
        if (localStorage.getItem('G')) {
            loadGame(G, ctx, {
                newG: localStorage.getItem('G')
            })
        } else {
            fillHand(G, ctx)
        }
    },

    start: true,

    moves: {
        fillHand,
        playBlock,
        loadGame
    }
}
