<!-- author: 大冰 -->
<template>
    <div>
        <h2>
            Home vue 
        </h2>

        <router-view></router-view>

        <router-link to="/home/message">消息</router-link>
        <router-link to="/home/goods">商品</router-link>
        <router-link to="/home/comment">评论</router-link>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>

</style>