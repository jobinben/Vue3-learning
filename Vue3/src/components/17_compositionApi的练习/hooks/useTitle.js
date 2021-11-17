import {ref, watch} from "vue"

export default function(title = "默认title") {
    const titleRef = ref(title)

    watch(titleRef, (newV, oldV) => {
        document.title = newV
    },{
        immediate: true
    })

    return titleRef
}