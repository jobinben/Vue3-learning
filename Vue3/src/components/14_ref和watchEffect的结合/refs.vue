<!-- author: 大冰 -->
<template>
    <div>
        <h2 ref="titleRef">hello Vue3</h2>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
    setup() {
        // 通过ref获取DOM的元素
        let titleRef = ref(null)

        // watchEffect的第二个参数: flush(pre默认执行，post异步，sync同步)
        watchEffect(
            () => {
                // 等待titleRef挂载后才打印
                console.log(titleRef.value)
            },
            {
                flush: 'post',
            }
        )

        return {
            titleRef,
        }
    },
}
</script>
<style scoped>
</style>