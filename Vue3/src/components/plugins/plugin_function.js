export default function(app) {
    // 如果插件是函数方式创建，第一个形参就是vue的实例

    console.log('vue App: ', app)

    // 也来注册一个属性
    app.config.globalProperties.$showAge = 18
}