// <!-- author: 大冰 -->
// 1. Vite在启动时会做依赖的预构建
// 2. 预构建，运行时默认都只会对jsx与tsx做语法转换。不会对js做jsx的语法转换。
// 目前vite不支持.vue单文件的jsx编译
export default {
    data() {

        return {
            counter: 0
        }
    },

    render() {
        const increment = () => this.counter++
        const decrement = () => this.counter--

        return (
            <div>
                <h2>当前计数: {this.counter}</h2>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
        )
    },
}
