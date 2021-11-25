<!-- author: 大冰 -->
<template>
    <div>
        <button @click="loginHandle">登录按钮</button>
    </div>
</template>

<script>
import {useRouter} from "vue-router"
export default {
    setup() {
        const router = useRouter()
        const loginHandle = () => {
            window.localStorage.setItem('token', 'jobin Login!')
            router.push({
                path: '/home'
            })
        }

        return {
            loginHandle
        }
    }
}
</script>
<style scoped>

</style>