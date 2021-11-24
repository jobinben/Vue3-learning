<!-- author: 大冰 -->
<template>
    <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/user/jobin">用户</router-link>

        <!-- 显示区域 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>

</style>