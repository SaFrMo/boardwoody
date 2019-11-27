export const state = () => {
    return {
        stagedBlockIndex: -1
    }
}

export const mutations = {
    STAGE_BLOCK(store, index) {
        store.stagedBlockIndex = index
    }
}
