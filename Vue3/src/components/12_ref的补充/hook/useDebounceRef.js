import {customRef} from "vue"
// 通过customRef实现debounce防抖
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
                timer = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay);
            }
        }
    })
}