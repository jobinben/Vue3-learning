<!-- author: 大冰 -->
<template>
  <div>
    readonly的基本使用
    <h2>{{ msg }}</h2>
    <!-- 现在都是深入解包 -->
    <h2>普通对象info: {{ infoReadonly }}</h2>
    <h2>reactive对象info: {{ infoReadonly2 }}</h2>
    <h2>ref对象info: {{ infoReadonly3 }}</h2>
    <button @click="updateState">更新name</button>
  </div>
</template>

<script>
import { readonly, reactive, ref } from "vue";
export default {
  props: {
    msg: {
      type: String,
    },
  },

  setup() {
    let info = {
      name: "jobin",
    };

    let info2 = reactive(info);

    let info3 = ref(info);

    let infoReadonly = readonly(info);
    let infoReadonly2 = readonly(info2);
    let infoReadonly3 = readonly(info3);
    // 局部函数
    const updateState = () => {
      infoReadonly.name = "jobin_1";
      infoReadonly2.name = "jobin_2";
      infoReadonly3.name = "jobin_3";
    };

    return {
      infoReadonly,
      infoReadonly2,
      infoReadonly3,
      updateState,
    };
  },
};
</script>
<style scoped>
</style>