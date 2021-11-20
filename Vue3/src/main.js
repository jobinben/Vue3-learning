import { createApp } from "vue"
import App from "./components/21_directive自定义指令/App.vue"
import registerDirectives from "./components/directives/index"

// createApp(App).mount("#app")
const app = createApp(App)

// 注册指令方法一
registerDirectives(app)

// 全局指令
// app.directive('focus', {
//     mounted(el, bindings, vnode, preVnode) {
//         el.focus()
//     }
// })

app.mount('#app')
