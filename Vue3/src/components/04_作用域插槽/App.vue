<!-- author: 大冰 -->
<template>
    <show-component :names="names">
        <template v-slot="slotProps">
            <h2>{{slotProps.item}} --- {{slotProps.index}}</h2>
        </template>
    </show-component>
</template>

<script>
import showComponent from './showName.vue'
export default {
    components: {
        showComponent
    },

    data() {
        return {
            names: ['jojo', 'jobin', 'ben']
        }
    },
}
</script>
<style scoped>

</style>