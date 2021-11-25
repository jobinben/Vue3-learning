<!-- author: 大冰 -->
<template>
    <div>
        <h2>setup方式获取state:</h2>
        <h2>setup Counter: {{counter}}</h2>
        <h2>setup Name: {{name}}</h2>
        <h2>setup Age: {{age}}</h2>
    </div>
</template>

<script>
import {mapState, useStore} from "vuex"
import {computed} from "vue"
export default {
    setup() {
        const store = useStore()
        // 1. 方法一: 获取store的数据
        const counter = computed(() => store.state.counter)

        // 2. 方法二: 
        const storeStateFns = mapState(['name', 'age'])
        /**
         * mapState返回的数据结构:
         * {
         *  name: function(){return 'xxx'},
         *  age: function(){return 'xxx'}
         * }
         */

        const storeState = {}
        Object.keys(storeStateFns).forEach(fnKey => {
            // mapState在解析state的数据时，是需要通过this.$store去解析
            // 在setup里面是没有this的，所以我们给它的函数绑定ctx
            // this => {$store: store}
            const fn = storeStateFns[fnKey].bind({$store: store})
            // 遍历生成这种数据结构 => {name: ref(), age: ref()}
            storeState[fnKey] = computed(fn)
        })


        return {
            counter,
            ...storeState
        }
    }
}
</script>
<style scoped>

</style>