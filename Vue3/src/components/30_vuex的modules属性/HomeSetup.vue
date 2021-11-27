<!-- author: 大冰 -->
<template>
    <div>
        <h2>HomeSetup</h2>
        <hr />
        <h2>counter:{{ userCounter }}</h2>
        <h2>doubleCounter:{{ doubleCounter }}</h2>
        <button @click="increment">root+1</button>
        <button @click="incrementAction">root+1</button>
    </div>
</template>

<script>
// 写法一和写法二
// import { mapState, mapGetters, mapMutations, mapActions} from "vuex"
import useState from "../../hooks/useMapState"
import useGetters from "../../hooks/useGetters"
// 写法三 推荐!
import { createNamespacedHelpers } from 'vuex'

const { mapMutations, mapActions } = createNamespacedHelpers('user')

export default {
    setup(){

        const mapStoreState = useState('user', ['userCounter'])
        const mapStoreGetters = useGetters('user', ['doubleCounter'])
        
        const mapMutationsFns = mapMutations(['increment'])
        const mapActionsFns = mapActions(['incrementAction'])

        return {
            ...mapStoreState,
            ...mapStoreGetters,
            ...mapMutationsFns,
            ...mapActionsFns
        }
    },
}
</script>
<style scoped>
</style>    