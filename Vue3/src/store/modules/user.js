const userModules = {
    namespaced: true, // 加上命名空间，使模块达到独立状态
    state() {
        return {
            userName: 'dabing',
            userCounter: 10
        }
    },

    getters:{
        // 在模块的getters多出两个参数，可以获取根数据
        doubleCounter(state, getters, rootState, rootGetters) {
            return state.userCounter * 2
        }
    },
    mutations:{
        increment(state) {
            state.userCounter++
        },
    },
    actions: {
        incrementAction(context) {
            context.commit('increment')
            // 也可以同时给根数据发送commit
            // context.commit('increment', null, {root: true})
        }
    }
}

export default userModules