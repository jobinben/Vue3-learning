<!-- author: 大冰 -->
<template>
    <div>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <h2>{{fullName}}</h2>
    </div>
</template>

<script>
import {ref, computed} from "vue"
export default {
    setup() {
        let firstName = ref("Jobin")
        let lastName = ref('Yu')
        
        // let fullName = computed({
        //     get: function() {
        //         return firstName.value + ' ' + lastName.value
        //     }
        // })
        let fullName = computed( () => firstName.value + ' ' + lastName.value )

        return {
            firstName,
            lastName,
            fullName
        }
    }
}
</script>
<style scoped>

</style>