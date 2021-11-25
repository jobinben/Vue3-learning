<!-- author: 大冰 -->
<template>
    <div>
        <h2>totalPrice: {{ $store.getters.totalBookPrice }}</h2>
        <h2>discountTotalPrice: {{ $store.getters.disCountTotalPrice }}</h2>
        <hr />
        <h2>GreateN: {{ $store.getters.getTotalCountGreateN(3) }}</h2>
        <hr />
        <h2>{{ nameInfo }} -- {{ age }}</h2>
        <h2>{{ ageInfo }} -- {{ name }}</h2>
        <h2>{{ genderInfo }}</h2>
        <hr>

    </div>
</template>

<script>
import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'
// import useGetters from "./hooks/useGetters"
import useGetters from "../../hooks/useGetters"
export default {
    // 1. 在vue2中获取
    // computed: {
    //     // 数组获取形式
    //     ...mapGetters(['nameInfo', 'ageInfo', 'genderInfo']),
    //     // 对象获取形式可以修改别名
    //     ...mapGetters({
    //         name: 'nameInfo',
    //         age: 'ageInfo'
    //     })
    // }
    // 2. 在vue3中获取
    setup() {
        const store = useStore()

        const name = computed(() => store.getters.nameInfo)
        // const age = computed(() => store.getters.ageInfo)

        // 使用封装好的hook
        const storeGetters = useGetters(['nameInfo', 'ageInfo', 'genderInfo'])
        // 也可以对象书写
        const storeGetters_age = useGetters({
            age: 'ageInfo'
        })
        return {
            name,
            ...storeGetters,
            ...storeGetters_age
        }
    }
}
</script>
<style scoped>
</style>