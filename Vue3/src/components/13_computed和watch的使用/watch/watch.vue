<!-- author: 大冰 -->
<template>
    <div>
        <h2>{{ info.name }}---{{ info.age }}</h2>
        <button @click="changeName">修改name</button>
        <h2>情况二: {{ name }}</h2>
        <button @click="changeNameRef">修改refName</button>
    </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
    setup() {
        let info = reactive({
            name: 'jobin',
            age: 18,
        })

        // 1. 侦听watch时，传入一个getter函数
        // watch(() => info.name, (newValue, oldValue) => {
        //     console.log('newValue: ', newValue, ", oldValue: ", oldValue)
        // })

        // 2. 传入一个可响应式对象: reactive对象/ ref对象
        // 情况一: reactive对象获取到的newValue和oldValue本身都是reactive对象
        // watch(info, (newValue, oldValue) => {
        //     // 这时的new和old的值都是指向reactive对象
        //     console.log('newValue: ', newValue, ", oldValue: ", oldValue)
        // })
        // 如果想解决上面的问题，希望new和old都是一个普通对象 可以做一个解构
        watch(() => ({...info}), (newValue, oldValue) => {
            console.log('newValue: ', newValue, ", oldValue: ", oldValue)
        })

        // 3. 情况二: ref对象获取newValue和oldValue是value值的本身
        let name = ref('jobin')
        watch(name, (newValue, oldValue) => {
            // 都是值本身
            console.log('newValue: ', newValue, ', oldValue: ', oldValue)
        })

        const changeName = () => {
            info.name = 'dabing'
        }

        const changeNameRef = () => {
            name.value = 'dabing'
        }

        return {
            info,
            changeName,
            name,
            changeNameRef,
        }
    },
}
</script>
<style scoped>
</style>