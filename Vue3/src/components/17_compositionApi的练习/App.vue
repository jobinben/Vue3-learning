<!-- author: 大冰 -->
<template>
    <div class="container">
        <h2>counter : {{ counter }}</h2>
        <h2>doubleCounter : {{ doubleCounter }}</h2>
        <button @click="increment">increment+1</button>
        <button @click="decrement">decrement-1</button>

        <div class="scrollView">
            <div class="scroll-x">scrollX: {{scrollX.toFixed(0)}}</div>
            <div class="scroll-y">scrollY: {{scrollY.toFixed(0)}}</div>
        </div>
    </div>
</template>

<script>
import useCounter from './hooks/useCounter'
import useTitle from "./hooks/useTitle"
import useScrollPosition from "./hooks/useScrollPosition"
export default {
    setup() {
        let { counter, doubleCounter, increment, decrement } = useCounter()

        // 修改title
        const titleRef = useTitle('初始化title')

        setTimeout(() => {
            titleRef.value = 'vite + vue3'
        }, 2000);

        // 滚动窗口

        const {scrollX, scrollY} = useScrollPosition()

        return {
            counter,
            doubleCounter,
            increment,
            decrement,
            scrollX,
            scrollY
        }
    },
}
</script>
<style scoped>

.container{
    width: 2000px;
    height: 2000px;
}
.scrollView {
    position: fixed;
    right: 50px;
    bottom: 50px;
}
</style>