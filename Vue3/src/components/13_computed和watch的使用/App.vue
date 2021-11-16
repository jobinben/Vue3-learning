<!-- author: 大冰 -->
<template>
    <div>
        <name-component></name-component>
        <demo-component></demo-component>
        <watch-component></watch-component>
    </div>
</template>

<script>
import nameComponent from "./computed/name.vue"
import demoComponent from "./watch/watchEffect.vue"
import watchComponent from "./watch/watch.vue"
export default {
    components: {
        nameComponent,
        demoComponent,
        watchComponent
    }
}
</script>
<style scoped>

</style>