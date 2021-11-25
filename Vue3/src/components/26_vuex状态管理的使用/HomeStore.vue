<!-- author: 大冰 -->
<template>
    <div>
        <h2>store:{{name}} -- {{age}} --- {{counter}}</h2>
        <h2>store:{{myName}} -- {{myAge}}</h2>
    </div>
</template>

<script>
import useMapState from "./hooks/useMapState"
export default {
    setup() {
        const state = useMapState(['name', 'age', 'counter'])
        const myState = useMapState({
            myName: state => state.name,
            myAge: state => state.age
        })
        return {
            ...state,
            ...myState
        }
    }
}
</script>
<style scoped>

</style>