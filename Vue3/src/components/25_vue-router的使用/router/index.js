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
        name: 'home',
        path: '/home',
        component: () => import("../page/Home.vue"),
        // 配置嵌套路由
        children: [
            { path: 'message', component: () => import('../page/HomeMsg.vue') },
            { path: 'goods', component: () => import('../page/HomeGoods.vue') }
        ]
    },
    { path: '/about', component: () => import("../page/About.vue") },
    { path: '/user/:username', component: () => import("../page/User.vue") },
    { path: '/login', component: () => import("../page/Login.vue") },
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

// 动态添加顶级路由
router.addRoute({
    path: '/category',
    component: () => import('../page/Category.vue')
})

// 动态添加二级路由
// 第一个参数传入路由name
router.addRoute('home', {
    path: 'comment',
    component: () => import("../page/HomeComment.vue")
})


// 导航守卫- 全局前置守卫
/**
 * 返回值问题:
 * 1. false : 不进行导航
 * 2. undefined或者不写返回值: 进行默认导航
 * 3. 字符串: 路径, 跳转到对应的路径中
 * 4. 对象: {} 类似于router.push({path: '/login', query:{...}}) 可以传入其他参数如meta，query
 */
let counter = 0
router.beforeEach((to, from) => {
    console.log(`进行了${++counter}次路由跳转`)

    if (to.path !== '/login') {
        const token = window.localStorage.getItem('token')
        if (!token) {
            return '/login'
        }
    }
})


export default router
