export default {
    // 导出一个对象的插件，在install函数可以取到app也就是vue的实例
    install(app) {
        // 尝试给vue添加一个全局属性
        app.config.globalProperties.$showName = 'jobin---18'
    }
}