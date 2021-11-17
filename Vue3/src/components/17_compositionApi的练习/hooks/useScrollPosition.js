import {ref} from "vue"
import useThrottle from "./useThrottle"
export default function() {
    const scrollX = ref(0)
    const scrollY = ref(0)

    // 使用节流
 
        document.addEventListener("scroll", () => {
            useThrottle(()=> {
                scrollX.value = window.scrollX
                scrollY.value = window.scrollY
            }, 1000)()
        })
 
    

    return {
        scrollX,
        scrollY
    }
}