


<script lang='jsx'>
// 解决之前在.vue无法解析jsx的原因 是我的script标签忘记加上 lang='jsx'属性
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
                <h2>script标签要加上lang='jsx'才能解析</h2>
                <h2>当前计数: {this.counter}</h2>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
        )
    },
}

</script>
