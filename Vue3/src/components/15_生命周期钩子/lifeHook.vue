<!-- author: 大冰 -->
<template>
    <div>
        <h2>{{counter}}</h2>
        <button @click="counter++">+1</button>
    </div>
</template>

<script>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
export default {
    setup() {
        const counter = ref(0)

        onMounted(() => {
            console.log('onMounted')
        })

        onUpdated(() => {
            console.log('onUpdated')
        })

        onUnmounted(() => {
            console.log('onUnmounted')
        })

        return {
            counter
        }
    },
}
</script>
<style scoped>
</style>