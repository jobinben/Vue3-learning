import dayjs from "dayjs"
export default function (app) {
    app.directive('format-time', {
        
        beforeMount(el, bindings, vnode, preVnode) {
            let formatType = bindings.value || "YYYY-MM-DD HH:mm:ss"

            const textContent = el.textContent
            let timestamp = parseInt(textContent)
            // 长度为10时，是秒级的时间戳 为13的话是毫秒级的时间戳
            if(textContent.length === 10) {
                timestamp = timestamp * 1000;
            }
            el.textContent = dayjs(timestamp).format(formatType)
            
        },

    })
}