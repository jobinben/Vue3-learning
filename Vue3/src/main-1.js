import { createApp } from "vue"
import App from "./components/23_获取vue实例的全局属性/App.vue"
// import registerDirectives from "./components/directives/index"

// createApp(App).mount("#app")
const app = createApp(App)

// 注册指令方法一
// registerDirectives(app)

// 全局指令
// app.directive('focus', {
//     mounted(el, bindings, vnode, preVnode) {
//         el.focus()
//     }
// })

// 使用插件
import pluginsObject from "./components/plugins/plugin_object"
import pluginsFunction from "./components/plugins/plugin_function"

app.use(pluginsObject) // 注册安装对象插件

app.use(pluginsFunction) // 注册安装函数插件

app.mount('#app')
