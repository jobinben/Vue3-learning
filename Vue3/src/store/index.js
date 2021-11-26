// Vuex的状态管理
import { createStore } from "vuex"
import axios from "axios"
import userModule from "./modules/user"

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
            discount: 1,

            bannerData: [],
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
        },

        addBannerData(state, payload) {
            state.bannerData = payload
        }
    },

    // 3. getters的使用，它类似于计算属性
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
    },

    // 4. actions的使用
    actions: {
        // 参数: {context => 上下文(commit, dispatch,getters...)}  {payload => 传递过来的参数}
        incrementAction(context, payload) {
            console.log('来自dispatch的参数: ', payload)
            // 1. 正常异步
            // setTimeout(() => {
            //     context.commit('increment')
            // }, 1000);

            // 2. 通过promise的异步
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('increment')
                    resolve('+1成功')
                }, 1000);
            })

        },

        // 异步请求
        getHomeMultidata(context) {
            // 1. 正常异步操作
            // axios.get('http://123.207.32.32:8000/home/multidata').then( res => {
            //     context.commit('addBannerData', res.data.data.banner.list)
            // })

            // 2. promise异步操作可以返回成功失败
            return new Promise((resolve, reject) => {
                axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
                    context.commit('addBannerData', res.data.data.banner.list)
                    resolve('请求成功')
                }).catch(err => {
                    reject('请求失败: ', err)
                })
            })
        }


    },

    // 5. modules的使用
    modules: {
        user:　userModule
    }

})


export default store

//  对应的操作: state存放 => action可异步操作mutation => mutation修改 => getter获取
// 逻辑: vue-Component => dispatch(actions) => commit(mutations) => state => getter => vue-Component