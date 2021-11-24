import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

// import Home from "../page/Home.vue"
// import About from "../page/About.vue"

// 配置路由规则
// const routes = [
//     // { path: '/', component: Home },
//     {path: '/', redirect: '/home'}, // 重定向方式
//     { path: '/home', component: Home },
//     { path: '/about', component: About }
// ]
// 懒加载配置模式
const routes = [
    {path: '/', redirect: '/home'},
    { path: '/home', component: () => import(/* webpackChunkName: "myHome" */"../page/Home.vue")},
    { path: '/about', component: () => import(/* webpackChunkName: "myAbout" */"../page/About.vue") }
]

// 创建路由对象
// 路由有两种模式: HTML的history模式， URL的hash模式 ==> createWebHistory, createWebHashHistory
const router = createRouter({
    routes,
    // history: createWebHashHistory(), // 指定hash模式
    history: createWebHistory(), // 指定history模式

})

export default router
