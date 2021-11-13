<!-- author: 大冰 -->
<template>
    <div>
        <h2>{{title}}</h2>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
import demoMixin from "./mixin/demoMixin"
export default {
    mixins: [demoMixin],
    data() {
        return {
            title: '以下用了mixin'
        }
    },
    
    // 当前有存在的key就会合并, 就会存在两个created()
    created() {
        console.log('我是App.vue的生命周期created')
    },
    
}
</script>
<style scoped>

</style>