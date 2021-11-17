<!-- author: 大冰 -->
<script>
import {h} from "vue"

export default {

    render() {
        return h("div", null, [
            h('h2', null, '我是helloworld'),
            // 获取渲染插槽内容
            this.$slots.default ? this.$slots.default({name:'jobin'}) : h('span', null, '我是默认插槽值')
        ])
    },
}
</script>
<style scoped>

</style>