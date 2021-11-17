<!-- author: 大冰 -->

<script>
// import home from "./Home.vue"
// import counterComponent from "./render实现计数器.vue"
import {h} from "vue"
import helloworld from "./Helloworld.vue"
export default {
    // components: {
    //     home,
    //     counterComponent
    // }

    render() {
        return h(helloworld, null, {
            // 传入插槽
            default: props => h("h2", null, `app传入到helloworld中的内容: '${props.name}'`)
        })
    },
}
</script>
<style scoped>

</style>