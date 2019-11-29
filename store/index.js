export const state = () => {
    return {
        stagedBlockIndex: -1,
        mouseX: 0,
        mouseY: 0
    }
}

export const mutations = {
    STAGE_BLOCK(store, index) {
        store.stagedBlockIndex = index
    },
    UPDATE_MOUSE(store, { x, y }) {
        store.mouseX = x
        store.mouseY = y
    }
}
