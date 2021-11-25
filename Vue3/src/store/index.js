// Vuex的状态管理
import { createStore } from "vuex"

const store = createStore({
    // 1. 存放数据状态
    state() {
        return {
            counter: 0,
            name: 'jobin',
            age: 18,
            height: 1.8,
            gender: 'fale',
            books: [
                { bookName: 'vue3版本入门', price: 50, count: 5 },
                { bookName: 'JavaScript高级程序设计', price: 80, count: 3 },
                { bookName: '你不知道的JavaScript', price: 30, count: 2 }
            ],
            discount: 1
        }
    },

    // 2. 操作数据状态的函数
    mutations: {
        increment(state) {
            state.counter++
        },

        decrement(state) {
            state.counter--
        },
        // 第二个参数payload 额外参数传入
        incrementN(state, payload) {
            console.log(payload)
            state.counter = state.counter + payload.num
        }
    },

    // 3. getter的使用，它类似于计算属性
    getters: {
        // getter里面的属性都包含两个属性 state, 和 getter （指向本身作用域）
        totalBookPrice(state, getters) {
            let totalPrice = 0
            for (const book of state.books) {
                totalPrice += book.price * book.count
            }
            return totalPrice
        },

        getTotalCountGreateN(state, getters) {
            // 通过返回的函数，调用此函数传入参数
            return function (n) {
                let totalPrice = 0
                for (const book of state.books) {
                    if (book.count > n) {
                        totalPrice += book.price * book.count
                    }
                }
                return totalPrice
            }
        },

        currentDiscount(state, getters) {
            return state.discount * 0.5
        },
        // getters的使用
        disCountTotalPrice(state, getters) {
            let totalPrice = 0
            for (const book of state.books) {
                totalPrice += book.price * book.count
            }
            return totalPrice * getters.currentDiscount
        },

        nameInfo(state) {
            return `name: ${state.name}`
        },
        ageInfo(state) {
            return `age: ${state.age}`
        },
        genderInfo(state) {
            return `gender: ${state.gender}`
        },
    }

})


//  1. state存放 => mutation修改 => getter获取
export default store