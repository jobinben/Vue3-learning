<!-- author: 大冰 -->
<template>
    <div>
        <h2>Home: {{$store.state.counter}}</h2>
        <h2>counter: {{counter}}</h2>
        <h2>name: {{name}}</h2>
        <h2>age: {{age}}</h2>
        <h2>anotherName: {{anotherName}}</h2>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    // 1. 通过计算属性结构$store.state.counter等数据状态
    // 写法一: mapState本身会返回一个对象
    // computed:mapState(['name', 'age'])
    // 写法二: 在computed里面结构
    computed: {
        otherName() {
            return 'otherPeople'
        },
        ...mapState(['name', 'age', 'counter']),

        // 2. 可以通过对象写法修改返回的别名
        ...mapState({
            anotherName: state => state.name
        })
    }

}
</script>
<style scoped>
</style>