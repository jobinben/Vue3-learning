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
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        component: () => import("../page/Home.vue"),
        // 配置嵌套路由
        children: [
            {path: 'message', component: () => import('../page/HomeMsg.vue')},
            {path: 'goods', component: () => import('../page/HomeGoods.vue')}
        ]
    },
    { path: '/about', component: () => import("../page/About.vue") },
    { path: '/user/:username', component: () => import("../page/User.vue") },

    // 配置not found 页面
    { path: '/:pathMatch(.*)', component: () => import('../page/NotFound.vue') }
    // 多一个*匹配符就是把route.params.pathMatch参数的字符串以/分割为数组
    // {path: '/:pathMatch(.*)*', component: () => import('../page/NotFound.vue')}


]

// 创建路由对象
// 路由有两种模式: HTML的history模式， URL的hash模式 ==> createWebHistory, createWebHashHistory
const router = createRouter({
    routes,
    // history: createWebHashHistory(), // 指定hash模式
    history: createWebHistory(), // 指定history模式

})

export default router
