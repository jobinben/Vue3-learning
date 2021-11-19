import { createApp } from "vue"
import App from "./components/21_directive自定义指令/App.vue"

// createApp(App).mount("#app")
const app = createApp(App)


// 全局指令
app.directive('focus', {
    mounted(el, bindings, vnode, preVnode) {
        el.focus()
    }
})

app.mount('#app')
