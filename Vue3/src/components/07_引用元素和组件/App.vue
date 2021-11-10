<!-- author: 大冰 -->
<template>
    <div>
        <h2 ref="h2Tags">{{title}}</h2>
        <button @click="getRefs">获取标签元素引用</button>
        <button @click="getComponentRefs">获取组件元素的引用</button>
        
        <other-component ref="other"></other-component>


    </div>
</template>

<script>

import otherComponent from "./other.vue"
export default {

    components:{
        otherComponent
    },

    data() {
        return {
            title: '我是来自App.vue的h2标签',
            names: ['a', 'b', 'c']
        }
    },
    methods: {
        getRefs() {
            console.log(this.$refs.h2Tags)
        },
        getComponentRefs() {
            console.log(this.$refs.other.msg)
            console.log(this.$refs.other)
        }
    },
}
</script>
<style scoped>

</style>    