<!-- author: 大冰 -->
<template>
    <div>
        <input type="text" v-focus>
        <button v-jobin.abc.trim="'i am custom direactive!'" v-if="counter < 2" @click="counter++">当前计数: {{counter}}</button>
    </div>
</template>

<script>
import { ref } from "vue"
export default {
    // 局部指令注册
    directives: {
        focus: {
            mounted(el, bindings, vnode, preVnode) {
                console.log('input focus')
                el.focus()
            },
        },

        jobin: {
            created(el, bindings, vnode, preVnode) {
                console.log('create', el, bindings, vnode, preVnode)
                console.log('指令修饰符', bindings.modifiers)
                console.log('指令值', bindings.value)

            },
            beforeMount() {
                console.log('direactive beforeMount')
            },
            mounted() {
                console.log('direactive mounted')
                
            },
            beforeUpdate() {
                console.log('direactive beforeUpdate')
                
            },
            updated() {
                console.log('direactive beforeMount')
                
            },
            beforeUnmount() {
                console.log('direactive beforeUnmount')
                
            },
            unmounted() {
                console.log('direactive unmounted')
                
            },
        }

    },

    setup() {
        const counter = ref(0)
        return {
            counter
        }
    }

}
</script>
<style scoped>

</style>