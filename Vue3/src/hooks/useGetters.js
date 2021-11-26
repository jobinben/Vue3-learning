import { mapGetters, createNamespacedHelpers } from "vuex"
import useMapper from "./useMapper"

// 重置版 支持模块
export default function (name, getters) {
    let mapFn = mapGetters
    if (typeof name === 'string' && name.length > 0) {
        mapFn = createNamespacedHelpers(name).mapGetters
    }
    return useMapper(getters, mapFn)
}