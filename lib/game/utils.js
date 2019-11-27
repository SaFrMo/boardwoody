export function getCoordsFromIndex(index, width = 10) {
    return { x: index % width, y: Math.floor(index / width) }
}

export function getIndexFromCoords({ x, y }, width = 10) {
    return y * width + x
}
