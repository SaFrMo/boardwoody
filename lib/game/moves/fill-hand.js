import generateBlocks from './generate-blocks'

export default function(G, ctx) {
    G.hand = generateBlocks(G, ctx)
}
