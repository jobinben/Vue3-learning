<!-- author: 大冰 -->
<template>
    <div>
        <h2>接收emit发送过来的{{count}}</h2>
    </div>
</template>

<script>
import emitter from './emitter'
export default {
    data() {
        return {
            count: 0
        }
    },

    created() {
        emitter.on('add', data => {
            this.count = data
        })

        // 监听所有事件 第一个参数是类型 第二个参数是定义事件的值
        emitter.on('*', (type, info) => {
            console.log('* listener: ', type, info)
        })
    }
}
</script>
<style scoped>

</style>