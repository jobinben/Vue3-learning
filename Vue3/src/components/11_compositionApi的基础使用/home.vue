<!-- author: 大冰 -->
<template>
    <div>
        Home Vue
        <h2>{{message}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String
        }
    },

    /**
     * 参数一: props  父组件传递过来的属性
     * 参数二: context 上下文
     */
    setup(props, context) {
        console.log('props: ', props)
    }
}
</script>
<style scoped>

</style>