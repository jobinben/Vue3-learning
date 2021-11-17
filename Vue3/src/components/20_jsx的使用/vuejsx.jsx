
// vite对JSX的支持 目前是.jsx后缀文件才行
// Vite在启动时会做依赖的预构建
// 预构建，运行时默认都只会对jsx与tsx做语法转换。不会对js做jsx的语法转换。
import {defineComponent} from "vue"

export default defineComponent({ render() { return <div>Test</div> }})