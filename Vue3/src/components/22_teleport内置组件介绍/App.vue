<!-- author: 大冰 -->
<template>
    <div>
        <!-- 把dom移动到指定位置 -->
        <teleport to='#outer'>
            <home/>
            <h2>teleport内置组件使用</h2>
            <h2>可以把dom元素移到指定位置，可以把dom元素移出#app的div</h2>
        </teleport>
        
    </div>
</template>

<script>
import Home from "./Home.vue"
export default {
    components: {
        Home
    }
}
</script>
<style scoped>

</style>