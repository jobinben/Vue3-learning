import { computed } from "vue"
import { mapState, useStore } from "vuex"

export default function (state) {
    // 1. 获取实例 $store
    const store = useStore()

    // 2. 遍历状态数据
    const storeStateFns = mapState(state)

    // 3. 存放处理好的数据对象
    const storeState = {}

    // 4. 对每个函数进行computed
    Object.keys(storeStateFns).forEach(fnKey => {
        // mapState在解析state的数据时，是需要通过this.$store去解析
        // 在setup里面是没有this的，所以我们给它的函数绑定ctx
        // this => {$store: store}
        const fn = storeStateFns[fnKey].bind({ $store: store })
        // 遍历生成这种数据结构 => {name: ref(), age: ref()}
        storeState[fnKey] = computed(fn)
    })

    return storeState
}

/**
 * mapState返回的数据结构:
 * {
 *  name: function(){return 'xxx'},
 *  age: function(){return 'xxx'}
 * }
 */