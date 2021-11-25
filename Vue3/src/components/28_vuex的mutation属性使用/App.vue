<!-- author: 大冰 -->
<template>
    <div>
        <h2>counter: {{ $store.state.counter }}</h2>
        <button @click="$store.commit('incrementN', { num: 10 })">+10</button>
        <button @click="incrementN({ num: 100 })">+100</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
import { mapMutations, useStore } from 'vuex'

export default {
    // methods: {
    //     // 跟其他mapGetters和mapState用法差不多
    //     ...mapMutations(['incrementN', 'decrement']),
    // },

    setup() {
        const  store = useStore()
        const mutationsFns = mapMutations(['incrementN', 'decrement'])

        return {
            ...mutationsFns
        }
    }
}
</script>
<style scoped>
</style>    