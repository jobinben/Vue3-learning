<!-- author: 大冰 -->
<template>
  <div>
    <async-component></async-component>

    <!-- 3. 利用suspense加载异步组件失败时调用哪个组件 -->
    <suspense>
        <template #default>
            <async-component></async-component>
        </template>
        <template #fallback>
            <loading></loading>
        </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import loading from "./loading.vue";

// 2. 不做处理写法
const asyncComponent = defineAsyncComponent(() =>
  import("./asyncComponent.vue")
);

// 1. 加载前显示loading组件
// const asyncComponent = defineAsyncComponent( {
//     loader: () => import('./asyncComponent.vue'),
//     loadingComponent: loading,
// })
export default {
  components: {
    asyncComponent,
    loading,
  },
};
</script>
<style scoped>
</style>