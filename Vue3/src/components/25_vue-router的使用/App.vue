<!-- author: 大冰 -->
<template>
    <div>
        <!-- 这些to的跳转其实也是调用history.pushState() -->
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/user/jobin">用户</router-link>

        <button @click="jumpToAbout">跳转到关于</button>
        <!-- 显示区域 -->
        <router-view></router-view>

    </div>
</template>

<script>
import {useRouter} from "vue-router"
export default {

    methods: {
        // option Api 跳转
        // jumpToAbout() {
        //     // 1. 获取实例 然后执行push操作 给history压入路径
        //     this.$router.push('/about')
        // }
    },

    setup() {
        const router = useRouter()

        const jumpToAbout = () => {
            // router.push('/about')
            // 传入对象可以写更多的参数
            router.push({
                path: '/about',
                query: {
                    name: 'jobin',
                    age: 18
                }
            })
        }

        return {
            jumpToAbout
        }
    }
}
</script>
<style scoped>

</style>