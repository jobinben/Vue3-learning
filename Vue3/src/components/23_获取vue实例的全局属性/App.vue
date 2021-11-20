<!-- author: 大冰 -->
<template>
    <div>
        <h2>vue2.0获取全局属性: {{ name }}</h2>
        <h2>vue3.0获取全局属性: {{ age }}</h2>
    </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
    data() {
        return {
            name: '',
        }
    },

    mounted() {
        this.name = this.$showName
    },
    // 上面是vue2获取全局属性
    // 下面是vue3获取全局属性 要借助 getCurrentInstance 获取当前vue实例
    setup() {
        const instance = getCurrentInstance()
        let age = instance.appContext.config.globalProperties.$showAge
        
        return {
            age
        }
    },
}
</script>
<style scoped>
</style>