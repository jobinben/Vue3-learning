<!-- author: 大冰 -->
<template>
    <div>
        <template v-for="item in arr" :key="item">
            <button
                @click="switchItem(item)"
                :class="{active: currentItem === item}"
            >{{item}}</button>
        </template>
        <!-- 动态组件 -->
        <component :is="currentItem"></component>

        <!-- 利用keep-alive 缓存组件数据 因为切换组件时，组件会被销毁-->
        <!-- include表示需要缓存的组件 -->
        <keep-alive :include="['about']">
            <component :is="currentItem"></component>
        </keep-alive>
    </div>
</template>

<script>
import home from "./home.vue"
import about from './about.vue'
export default {
    components: {
        home,
        about
    },

    data() {
        return {
            arr: ['home', 'about'],
            currentItem: 'home'
        }
    },

    methods: {
        switchItem(item) {
            this.currentItem = item
        }
    },
}
</script>
<style scoped>
.active{
    color: red;
}
</style>