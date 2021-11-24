<!-- author: 大冰 -->
<template>
    <div>
        <!-- 这些to的跳转其实也是调用history.pushState() -->
        <!-- 可以通过作用域插槽获取router-link的内部属性 -->
        <!-- props: href 跳转链接 -->
        <!-- props: route 对象 -->
        <!-- props: navigate导航对象 -->
        <!-- props: isActive 是否当前处于活跃的状态 -->
        <!-- props: isExacActive 是否当前处于精确的活跃状态 -->
        <!-- 设置为 custom 自定义组件时，包裹的a标签将为被弃掉 -->
        <router-link to="/home" v-slot="props" custom>
            <span>{{ props.href }}</span>
            <button>没有导航属性无法跳转的button</button>
            <button @click="props.navigate">首页</button>
            <span :class="{ active: props.isActive }">{{
                props.isActive
            }}</span>
        </router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/user/jobin">用户</router-link>

        <button @click="jumpToAbout">跳转到关于</button>
        <!-- 显示区域 -->

        <!-- <transition> -->
        <!-- <component :is="componentId"></component> -->
        <!-- </transition>    -->
        <!-- 通过作用域插槽获取props 然后获取组件 对组件进行动画操作 -->
        <router-view v-slot="props">
            <transition name="n">
                <keep-alive>
                    <component :is="props.Component"></component>
                </keep-alive>
            </transition>
        </router-view>

        <!-- 第二种写法，对props结构  {Component} = props -->
        <!-- <router-view v-slot="{Component}">
            <transition name="n">
                <keep-alive>
                    <component :is="Component"></component>
                </keep-alive>
            </transition>
        </router-view> -->

    </div>
</template>

<script>
import { useRouter } from 'vue-router'
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
                    age: 18,
                },
            })
        }

        return {
            jumpToAbout,
        }
    },
}
</script>
<style scoped>
/* 进入之前，离开之后 */
.n-enter-from,
.n-leave-to {
    opacity: 0;
}

.n-enter-active,
.n-leave-active {
    transition: opacity 1s;
}
</style>