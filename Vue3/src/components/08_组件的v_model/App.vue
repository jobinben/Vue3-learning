<!-- author: 大冰 -->
<template>
  <div>
    <!-- 1. 这是通过解析v-model语法糖的 -->
    <child-component v-model:title="msg"></child-component>
    <h2>{{ msg }}</h2>
    
    <!-- 2. 这是通过计算属性实现的 -->
    <second-component v-model:second="tips"></second-component>
    <h2>{{ tips }}</h2>
  </div>
</template>

<script>
import ChildComponent from "./child.vue";
import secondComponent from "./second.vue";
export default {
  components: {
    ChildComponent,
    secondComponent,
  },

  data() {
    return {
      msg: "hello",
      tips: "abc",
    };
  },
};
</script>
