<!-- author: 大冰 -->
<template>
    <div>
        <!-- 是route 不是router -->
        <h2>User: {{$route.params}}</h2>
    </div>
</template>

<script>
// 是useRoute 不是useRouter
import {useRoute} from "vue-router"
export default {

    setup() {
        // setup取router的值
        const router = useRoute()
        console.log('setup: ', router.params)
    }
}
</script>
<style scoped>

</style>