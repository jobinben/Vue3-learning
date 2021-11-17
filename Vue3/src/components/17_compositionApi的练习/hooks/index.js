// 把hook统一一起导出入口

import useCounter from "./useCounter"
import useLocalStorage from "./useLocalStorage"
import useThrottle from "./useThrottle"
import useScrollPosition from "./useScrollPosition"
import useTitle from "./useTitle"

export {
    useCounter,
    useLocalStorage,
    useThrottle,
    useScrollPosition,
    useTitle
}