<!-- author: 大冰 -->
<template>
    <div>
        reactive的基本使用
        <h2>{{msg}}</h2>
        <h2>{{state.counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {reactive} from "vue"
export default {
    props: {
        msg: {
            type: String
        }
    },

    setup() {
        // reactive实现把setup里面的变量做proxy的劫持后，添加成响应式变量
        const state = reactive({
            counter: 0
        })

        // 局部函数
        const increment = () => {
            state.counter ++
            console.log('state.counter: ', state.counter)
        }


        return {
            state,
            increment
        }

    }
}
</script>
<style scoped>

</style>