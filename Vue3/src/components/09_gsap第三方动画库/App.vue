<!-- author: 大冰 -->
<template>
   <div>
       <input type="number" step="100" v-model="count">
       <h2>{{count}}</h2>
       <h2>{{transitionNum.toFixed(0)}}</h2>
   </div>
</template>

<script>
import gsap from "gsap"
export default {
    data() {
        return {
            count: 1,
            transitionNum: 1
        }
    },

    // computed: {
    //     transitionNum() {
    //         return this.transitionNum.toFixed(0)
    //     }
    // },

    watch: {
        count(newValue) {
            gsap.to(this, {
                duration: 1,
                transitionNum: newValue
            })
        }
    }
}
</script>
<style scoped>

</style>