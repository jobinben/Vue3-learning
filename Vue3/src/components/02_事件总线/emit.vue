<!-- author: 大冰 -->
<template>
    <div>
        <button @click="btnClick">count+1</button>
    </div>
</template>

<script>
import emitter from './emitter'
export default {

    data() {
        return {
            count: 0
        }
    },
    methods: {
        btnClick() {
            this.count++
            emitter.emit('add', this.count)
        }
    },
}
</script>
<style scoped>

</style>        