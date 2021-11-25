// Vuex的状态管理
import {createStore} from "vuex"

const store = createStore({
    // 1. 存放数据状态
    state() {
        return {
            counter: 0,
            name: 'jobin',
            age: 18,
            height: 1.8
        }
    },

    // 2. 操作数据状态的函数
    mutations: {
        increment(state) {
            state.counter++
        },

        decrement(state) {
            state.counter--
        }
    }

})

export default store