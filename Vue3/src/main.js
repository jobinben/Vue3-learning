import {createApp} from "vue"
import  router from "./components/25_vue-router的使用/router"
import App from "./components/25_vue-router的使用/App.vue"

const app = createApp(App)

app.use(router) // 使用路由

app.mount("#app")