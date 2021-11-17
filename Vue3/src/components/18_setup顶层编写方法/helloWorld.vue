<!-- author: 大冰 -->
<template>
    <div>
        <h2>Hello world</h2>
        <p>{{ msg }}</p>
        <button @click="emitHandle">发射事件</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
    msg: {
        type: String,
        default: 'xxx',
    },
})
const Emits = defineEmits(['emitEvent'])

const emitHandle = () => {
    Emits('emitEvent', 'jobin, come here from helloworld.vue')
}
</script>

<style scoped>
</style>