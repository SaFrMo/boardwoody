export default function(G, ctx) {
    localStorage.setItem('G', JSON.stringify(G))
    localStorage.setItem('ctx', JSON.stringify(ctx))
}
