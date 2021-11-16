<!-- author: 大冰 -->
<template>
    <div>
        <h2>{{name}} -- {{age}}</h2>
        <input type="text" v-model="name">
        <button @click="changeAge">age+1</button>
    </div>
</template>

<script>
import {ref, watchEffect, watch} from "vue"
export default {
    setup() {
        
        let name = ref('jobin')
        let age = ref(18)
        
        // 1. watchEffect自动收集响应式依赖
        // watchEffect( () => {
        //     console.log('被watch的name属性: ', name.value, 'age: ', age.value)
        // })
        // 2. watchEffect返回一个停止监听的函数
        // const stopWatch = watchEffect( () => {
        //     console.log('被watch的name属性: ', name.value, 'age: ', age.value)
        // })

        // 3.回调函数有个形参也是回调函数，叫onInvalidate 可以清除额外的副作用
        const stopWatch = watchEffect( (onInvalidate) => {
            let timer = setTimeout(() => {
                console.log('网络请求成功')
            }, 1000);
            onInvalidate( () => {
                // 这个函数可以清除额外的副作用
                // 类似于防抖的作用
                clearTimeout(timer)
            })

            console.log('被watch的name属性: ', name.value, 'age: ', age.value)
        })

        const changeAge = () => {
            age.value ++
            if(age.value > 25) {
                stopWatch()
            }
        }

        return {
            name,
            age,
            changeAge
        }
    }
}
</script>
<style scoped>

</style>