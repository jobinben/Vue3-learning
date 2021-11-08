/**
 * 因为Vue3 已经移除 on off 的事件总线
 * 因此我们借助第三方库来实现事件总线
 */

import mitt from "mitt"

const emitter = mitt()

export default emitter