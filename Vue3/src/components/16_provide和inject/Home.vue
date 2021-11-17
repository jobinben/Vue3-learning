<!-- author: 大冰 -->
<template>
    <div>
        <h2>Home: {{name}} -- {{age}}</h2>
        <button @click="age++">Home中的age+1</button>
    </div>
</template>

<script>
import {inject} from "vue"
export default {
    setup() {
       const name = inject('name')
       const age = inject('age')
       

       return {
           name,
           age
       }
    }
}
</script>
<style scoped>

</style>