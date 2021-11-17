// 实现一个简易版节流
// 节流主要是让定时器走完，才进行下一步操作
export default function(fn, delay = 500) {
    let flag = true
    return (...arg) => {
        if(!flag) return;
        flag = false
        setTimeout(() => {
            fn.apply(this, arg)
            flag = true
        }, delay)
    }
}