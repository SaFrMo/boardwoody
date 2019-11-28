export default function(G, ctx, { newG, newCtx }) {
    newG = JSON.parse(newG)
    Object.keys(newG).forEach(key => {
        G[key] = newG[key]
    })
    Object.keys(newCtx).forEach(key => {
        ctx[key] = newCtx[key]
    })
}
