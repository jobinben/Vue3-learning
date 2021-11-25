import { computed } from "vue"
import { mapGetters, useStore } from "vuex"

export default function(keys) {
    const store = useStore()

    const storeGettersFns = mapGetters(keys)

    const storeGetters = {} 

    Object.keys(storeGettersFns).forEach( fnkey => {
        const fn = storeGettersFns[fnkey].bind({$store: store})
        storeGetters[fnkey] = computed(fn)
    }) 
    
    return storeGetters
}