<template>
    <client-only>
        <section class="game-wrap" v-if="ready">
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
export default {
    data() {
        return {
            ready: false
        }
    },
    async mounted() {
        await this.$nextTick
        this.ready = true
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

    max-width: 500px;
    margin: 40px auto 0;
    text-align: center;

    .game-hand {
        margin-top: 40px;
    }
}
</style>
