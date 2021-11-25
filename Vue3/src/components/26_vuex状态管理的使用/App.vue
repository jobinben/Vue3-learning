<!-- author: 大冰 -->
<template>
    <div>
        <home/>
        <h2>当前状态计数: {{$store.state.counter}}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <home-setup/>
        <home-store></home-store>
    </div>
</template>

<script>
import Home from './Home.vue'
import HomeSetup from './HomeSetup.vue'
import HomeStore from './HomeStore.vue'

export default {
    components: {
        Home,
        HomeSetup,
        HomeStore
    },
    methods: {
        increment() {
            // 3. 通过commit给mutations改变状态数据
            this.$store.commit("increment")
        },
        decrement() {
            this.$store.commit('decrement')
        }

    },
}
</script>
<style scoped>

</style>    