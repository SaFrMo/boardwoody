import { buildGrid } from 'boardgame-utils'
import { getIndexFromCoords } from '../utils'

export default function(
    G,
    ctx,
    { blockIndex = 0, topLeft = { x: 0, y: 0 } } = {}
) {
    const block = block || G.hand[blockIndex]

    // prep list of coordinates to check
    const toCheck = []

    // block will be 2d array of rows - let's go through each row...
    block.forEach((row, i) => {
        // ...then through each cell in that row...
        row.forEach((cell, j) => {
            if (cell) {
                // ...and add the coordinates to check
                toCheck.push({ x: topLeft.x + j, y: topLeft.y + i })
            }
        })
    })

    // make sure all those spaces are valid
    const canPlace = toCheck.every(coords => {
        const targetIndex = getIndexFromCoords(coords)
        return coords.x < 10 && coords.y < 10 && !G.grid[targetIndex]
    })

    if (canPlace) {
        toCheck.forEach(coords => {
            const index = getIndexFromCoords(coords)
            G.grid[index] = true
        })
    }
}
