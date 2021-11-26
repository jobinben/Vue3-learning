<!-- author: 大冰 -->
<template>
    <div>
        <h2>当前计数:　{{ $store.state.counter }}</h2>

        <button @click="increment">+1</button>
        <button @click="getBanner">获取banner</button>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    methods: {
        increment() {
            // 无参数版本
            // this.$store.dispatch('incrementAction')
            // 有参数版本
            // this.$store.dispatch('incrementAction', {xx: 100})
            // promise版本
            const promise = this.$store.dispatch('incrementAction')
            promise
                .then((result) => {
                    console.log(result)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },

    setup() {
        const store = useStore()
        const getBanner = () => {
            const promise = store.dispatch('getHomeMultidata')
            promise.then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
        return {
            getBanner
        }
    },
}
</script>
<style scoped>
</style>