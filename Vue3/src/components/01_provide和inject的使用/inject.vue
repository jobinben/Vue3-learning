<!-- author: 大冰 -->
<template>
    <div>
        <h2>Inject: </h2>
        <h3>name:{{name}} -- age:{{age}} -- skills:{{length.value}}</h3>
    </div>
</template>

<script>
export default {

    inject: ['name', 'age', 'length'],

    data() {
        return {
            
        }
    }
}
</script>
<style scoped>

</style>