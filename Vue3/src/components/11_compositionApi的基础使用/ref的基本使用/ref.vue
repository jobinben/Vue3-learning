<!-- author: 大冰 -->
<template>
    <div>
        ref的基本使用
        <h2>{{msg}}</h2>
        <!-- 在插值表达式中，会自动解包，不用counter.value来获取值 -->
        <h2>counter: {{counter}}</h2>
        <!-- 在插值表达式中，之前对ref只是浅层的一个解包(获取需要=> info.counter.value) -->
        <!-- 现在都是深入解包 -->
        <h2>info.counter: {{info.counter}}</h2>
        <h2>info: {{info}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    props: {
        msg: {
            type: String
        }
    },

    setup() {
        
        // 用ref编译成一个可响应式的引用对象，其counter的值是对象中的value => counter.value
        let counter = ref(100)

        let info = {
            counter
        }

        // 局部函数
        const increment = () => {
            // 对counter的操作时，都是对他的value进行操作
            counter.value ++
            console.log('counter.value : ', counter.value)
        }


        return {
            counter,
            info,
            increment
        }

    }
}
</script>
<style scoped>

</style>