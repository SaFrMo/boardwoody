export default function(G, ctx) {
    const rowCount = 10
    const colCount = 10

    const fullRows = []
    const fullCols = []

    for (let i = 0; i < rowCount; i++) {
        const row = G.grid.slice(i * rowCount, i * rowCount + rowCount)
        const full = row.every(x => x)
        if (full) {
            fullRows.push(i)
        }
    }

    for (let i = 0; i < colCount; i++) {
        const col = []
        let index = i
        while (G.grid.length > index) {
            col.push(G.grid[index])
            index += 10
        }

        const full = col.every(x => x)
        if (full) {
            fullCols.push(i)
        }
    }

    // clear rows
    fullRows.forEach(rowIndex => {
        for (let i = rowIndex; i < rowIndex + 10; i++) {
            G.grid[i] = false
        }
    })

    // clear columns
    fullCols.forEach(colIndex => {
        let index = colIndex
        while (G.grid.length > index) {
            G.grid[index] = false
            index += 10
        }
    })
}
