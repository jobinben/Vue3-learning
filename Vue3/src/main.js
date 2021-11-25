import {createApp} from "vue"
import  vuex from "./store"
import App from "./components/28_vuex的mutation属性使用/App.vue"

const app = createApp(App)

app.use(vuex) // 使用Vuex状态管理

app.mount("#app")