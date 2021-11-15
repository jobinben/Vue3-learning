<!-- author: 大冰 -->
<template>
    <div>
        <h2>name: {{name}} -- age: {{age}}</h2>
        <button @click="changeAge">修改age</button>
        <button @click="changeInfoAge">修改Info中的age</button>
    </div>
</template>

<script>
import {reactive, toRefs} from "vue"
export default {
    
    setup() {
        
        let info = reactive({
            name: 'jobin',
            age: '18'
        })
        // 如果直接解构的话 没有响应式的引用
        let {name, age} = toRefs(info)

        const changeAge = () => {
            age.value ++
        }

        const changeInfoAge = () => {
            info.age ++
        }

        return {
            name,
            age,
            changeAge,
            changeInfoAge
        }
    }
}
</script>
<style scoped>

</style>