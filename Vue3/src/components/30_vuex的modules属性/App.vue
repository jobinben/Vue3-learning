<!-- author: 大冰 -->
<template>
    <div>
        <h2>rootState: {{$store.state.counter}}</h2>
        <h2>userModules:{{$store.state.user.userName}}</h2>
        <h2>user: {{$store.state.user.userCounter}}</h2>
        <!-- 通过命名空间获取模块的getters -->
        <h2>userGetter: {{$store.getters['user/doubleCounter']}}</h2>
        <hr>
        <button @click="add">user+1</button>
        <button @click="addRoot">root+1</button>
        <hr>
        <h2>counter:{{userCounter}}</h2>
        <h2>doubleCounter:{{doubleCounter}}</h2>
        <button @click="increment">root+1</button>
        <button @click="incrementAction">root+1</button>

    </div>
</template>

<script>
// 写法一和写法二
// import { mapState, mapGetters, mapMutations, mapActions} from "vuex"
// 写法三 推荐!
import { createNamespacedHelpers} from "vuex"

const { mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('user')

export default {

    computed: {
        // 1. 写法一
        // ...mapState({
        //     userCounter: state=> state.user.userCounter
        // }),
        // ...mapGetters({
        //     doubleCounter: 'user/doubleCounter'
        // })

        // 2. 写法二
        // ...mapState('user', ['userCounter']),
        // ...mapGetters('user', ['doubleCounter'])

        // 3. 写法三: 通过createNamespacedHelpers函数  推荐！
        ...mapState(['userCounter']),
        ...mapGetters(['doubleCounter'])
    },

    methods: {
        add() {
            // 通过命名空间dispatch分发action
            this.$store.dispatch('user/incrementAction')
        },

        addRoot() {
            this.$store.dispatch('incrementAction')
        },

        // 写法一
        // ...mapMutations({
        //     increment: 'user/increment'
        // }),
        // ...mapActions({
        //     incrementAction: 'user/incrementAction'
        // })

        // 写法二
        // ...mapMutations('user', ['increment']),
        // ...mapActions('user', ['incrementAction'])

        // 写法三
        ...mapMutations(['increment']),
        ...mapActions(['incrementAction'])
    },
}
</script>
<style scoped>

</style>    