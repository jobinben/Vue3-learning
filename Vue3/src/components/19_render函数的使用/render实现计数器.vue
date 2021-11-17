<!-- author: 大冰 -->
<script>
import { h, ref } from 'vue'
export default {
    // data() {
    //     return {
    //         counter: 0
    //     }
    // },

    setup() {
        const counter = ref(0)
        
        // 2. 第二种方法 
        // 返回一个函数 相当于render函数
        return () => {
            return h('div', { class: 'title' }, [
                h('h2', null, `当前计数: ${counter.value}`),
                h(
                    'button',
                    {
                        onClick: () => counter.value++,
                    },
                    '+1'
                ),
            ])
        }
    },
    // 1. 第一种方法
    // render() {
    //     return h('div', {class: 'title'}, [
    //         h('h2', null, `当前计数: ${this.counter}`),
    //         h('button', {
    //             onClick: () => this.counter++
    //         }, '+1')
    //     ])
    // },
}
</script>
<style scoped>
</style>