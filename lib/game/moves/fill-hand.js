import generateBlocks from './generate-blocks'
import saveGame from './save-game'

export default function(G, ctx) {
    G.hand = generateBlocks(G, ctx)
    saveGame(G, ctx)
}
