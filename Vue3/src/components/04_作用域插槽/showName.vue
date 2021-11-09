<!-- author: 大冰 -->
<template>
    <div>
        <template v-for="(item, index) in names">
            <!-- 通过插槽把变量传递给插槽的元素 -->
            <slot :item="item" :index="index"></slot>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        names: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style scoped>

</style>