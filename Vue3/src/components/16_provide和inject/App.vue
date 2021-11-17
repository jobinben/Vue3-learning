<!-- author: 大冰 -->
<template>
    <div>
        <home/>
        <button @click="age++">App中的 age+1</button>
    </div>
</template>

<script>
import Home from "./Home.vue"
import {provide, ref, readonly} from "vue"
export default {
    components: { Home },
    setup() {
        const name = ref('jobin')
        const age = ref(18)

        // 为了符合单向数据流思想，不允许子组件逆向控制父组件，用readonly设置为只读
        provide('name', readonly(name))
        provide('age', readonly(age))

        return {
            age
        }
    }
}
</script>
<style scoped>

</style>