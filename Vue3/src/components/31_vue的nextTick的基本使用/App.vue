<!-- author: 大冰 -->
<template>
    <div>
        <div class="wrapper" ref="h2Ref">nextTick: {{ content }}</div>
        <button @click="add">click</button>
    </div>
</template>

<script>
import { ref, nextTick } from 'vue'
export default {
    setup() {
        const content = ref('好好')
        const h2Ref = ref(null)
        const add = () => {
            content.value += '非常好'
            // 直接获取高度是要等待DOM重新渲染更新后才能取到最新的，这个是在渲染之前获取的
            // console.log(h2Ref.value.getBoundingClientRect().height)

            // nextTick的执行相当于在updated()生命周期之后立即调用
            nextTick(() => {
                console.log(h2Ref.value.getBoundingClientRect().height) // 获取到最新的height
            })
        }
        return {
            content,
            h2Ref,
            add,
        }
    },
}
</script>
<style scoped>
.wrapper {
    width: 50px;
}
</style>