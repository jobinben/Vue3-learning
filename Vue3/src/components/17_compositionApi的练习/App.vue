<!-- author: 大冰 -->
<template>
    <div class="container">
        <h2>counter : {{ counter }}</h2>
        <h2>doubleCounter : {{ doubleCounter }}</h2>
        <button @click="increment">increment+1</button>
        <button @click="decrement">decrement-1</button>
        <h2>data: {{ data }}</h2>
        <button @click="changeData">修改data</button>
        <div class="scrollView">
            <div class="scroll-x">scrollX: {{ scrollX.toFixed(0) }}</div>
            <div class="scroll-y">scrollY: {{ scrollY.toFixed(0) }}</div>
        </div>
    </div>
</template>

<script>
// import useCounter from './hooks/useCounter'
// import useTitle from './hooks/useTitle'
// import useScrollPosition from './hooks/useScrollPosition'
// import useLocalStorage from './hooks/useLocalStorage'
import {
    useCounter,
    useTitle,
    useScrollPosition,
    useLocalStorage,
} from './hooks/index'

export default {
    setup() {
        let { counter, doubleCounter, increment, decrement } = useCounter()

        // 修改title
        const titleRef = useTitle('初始化title')

        setTimeout(() => {
            titleRef.value = 'vite + vue3'
        }, 2000)

        // 滚动窗口

        const { scrollX, scrollY } = useScrollPosition()

        // 本地存储
        const data = useLocalStorage('info', { name: 'jobin', age: 18 })

        const changeData = () => {
            data.value = '修改本地存储值'
        }

        return {
            counter,
            doubleCounter,
            increment,
            decrement,
            scrollX,
            scrollY,
            data,
            changeData,
        }
    },
}
</script>
<style scoped>
.container {
    width: 2000px;
    height: 2000px;
}
.scrollView {
    position: fixed;
    right: 50px;
    bottom: 50px;
}
</style>