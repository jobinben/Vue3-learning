import { computed } from "vue"
import { useStore } from "vuex"

// 重置版- 组合mapState和mapGetters
export default function(keys, mapFn) {
    const store = useStore()

    const storeGettersFns = mapFn(keys)

    const storeGetters = {} 

    Object.keys(storeGettersFns).forEach( fnkey => {
        const fn = storeGettersFns[fnkey].bind({$store: store})
        storeGetters[fnkey] = computed(fn)
    }) 
    
    return storeGetters
}