<!-- author: 大冰 -->
<template>
    <div>
        <name-component></name-component>
        <demo-component></demo-component>
    </div>
</template>

<script>
import nameComponent from "./computed/name.vue"
import demoComponent from "./watch/demo.vue"
export default {
    components: {
        nameComponent,
        demoComponent
    }
}
</script>
<style scoped>

</style>