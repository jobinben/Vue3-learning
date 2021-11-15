<!-- author: 大冰 -->
<template>
    <div>
        <input type="text" v-model="content">
        {{content}}
    </div>
</template>

<script>
import debounceRef from "./hook/useDebounceRef"
export default {
    setup() {
        return {
            // 防抖的ref
            content: debounceRef('hello vue3!', 500)
        }
    }
}
</script>
<style scoped>

</style>