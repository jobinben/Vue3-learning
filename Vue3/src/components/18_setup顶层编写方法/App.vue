<!-- author: 大冰 -->
<template>
    <div>
        <h2>当前计数: {{counter}}</h2>
        <button @click="increment">+1</button>

        <hello-world msg="app" @emitEvent="getEvent"></hello-world>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from "./helloWorld.vue"

const counter = ref(0)
const increment = () => counter.value++
const getEvent = (e) => {
    console.log('来自helloworld.vue的信息: ', e)
}
</script>

<style scoped>
</style>