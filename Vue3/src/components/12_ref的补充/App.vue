<!-- author: 大冰 -->
<template>
    <div>
        <torefs-component></torefs-component>
        <customref-component></customref-component>
    </div>
</template>

<script>
import torefsComponent from "./torefs.vue"
import customrefComponent from "./customref.vue"
export default {
    components: {
        torefsComponent,
        customrefComponent
    }
}
</script>
<style scoped>

</style>