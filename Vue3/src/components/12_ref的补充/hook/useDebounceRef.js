import {customRef} from "vue"
// 通过customRef实现debounce防抖
// 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制
// 防抖主要是清楚定时器，而节流主要是要定时器走完再执行下一个
export default function(value, delay = 300) {
    let timer = null
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timer)
                // 一个定时器就可以实现简易的防抖
                timer = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay);
            }
        }
    })
}