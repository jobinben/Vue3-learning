import {createApp} from "vue"
import  vuex from "./store"
import App from "./components/26_vuex状态管理的使用/App.vue"

const app = createApp(App)

app.use(vuex) // 使用Vuex状态管理

app.mount("#app")