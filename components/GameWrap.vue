<template>
    <client-only>
        <section
            class="game-wrap"
            @touchmove="updateMouse"
            @touchend="tryPlace"
            v-if="ready"
        >
            <!-- meta -->
            <section class="meta">
                <h2>Score: {{ G.score }}</h2>
            </section>

            <!-- board -->
            <game-board />

            <!-- hand -->
            <game-hand />
        </section>
    </client-only>
</template>

<script>
import { getIndexFromCoords } from '~/lib/game/utils'
import { throttle } from 'lodash'

let throttled

export default {
    data() {
        return {
            ready: false
        }
    },
    async mounted() {
        await this.$nextTick
        this.ready = true
        throttled = throttle(this.tryPlace, 16)
    },
    methods: {
        updateMouse(evt) {
            if (evt.touches && evt.touches.length) {
                const touch = evt.touches[0]
                this.$store.commit('UPDATE_MOUSE', {
                    x: touch.clientX,
                    y: touch.clientY
                })
            }
        },
        throttledTryPlace() {
            throttled()
        },
        tryPlace() {
            // get selected block
            const block = this.$el.querySelector('.piece-grid.selected')

            // cancel if no block
            if (!block) {
                this.$store.commit('STAGE_BLOCK', -1)
                return
            }

            // get top-left cell
            const topLeft = block.querySelector('.piece')
            const cellRect = topLeft.getBoundingClientRect()
            const cellTopLeft = { x: cellRect.x, y: cellRect.y }

            // get game board
            const board = this.$el.querySelector('.game-board')
            // ...top-left
            const boardRect = board.getBoundingClientRect()
            const boardCmpStyle = getComputedStyle(board)
            const boardTopLeft = {
                x: boardRect.x + parseInt(boardCmpStyle.paddingLeft),
                y: boardRect.y + parseInt(boardCmpStyle.paddingTop)
            }

            const diff = {
                x: cellTopLeft.x - boardTopLeft.x,
                y: cellTopLeft.y - boardTopLeft.y
            }

            // get array of all X and Y coords
            const coords = Array(11)
                .fill(0)
                .map((e, i) => {
                    const side = 25
                    const gap = 2
                    const offset = (side + gap) / 2
                    return (side + gap) * i - offset
                })

            // find the first index where we're greater than n and less than n + 1
            let targetX = -1
            let targetY = -1
            for (let i = 0; i < 10; i++) {
                if (diff.x > coords[i] && diff.x < coords[i + 1]) {
                    targetX = i
                }
                if (diff.y > coords[i] && diff.y < coords[i + 1]) {
                    targetY = i
                }
            }

            // cancel if any invalid placement
            if (targetX == -1 || targetY == -1) {
                this.$store.commit('STAGE_BLOCK', -1)
                return
            }

            // otherwise, try to place at coordinate
            const index = getIndexFromCoords({ x: targetX, y: targetY }) + 1
            const button = document.querySelector(
                `.game-board .cell:nth-child(${index}) button`
            )
            button.click()
            this.$store.commit('STAGE_BLOCK', -1)
        }
    }
}
</script>

<style lang="scss">
.game-wrap {
    --side: 25px;
    --gap: 2px;
    --background: #691100;
    --lighter-background: #dedede;
    --foreground: #b29d7c;

    touch-action: none;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    min-height: 100vh;
    box-sizing: border-box;

    .game-board {
        margin-top: 20px;
    }

    .game-hand {
        margin-top: 40px;
    }
}
</style>
