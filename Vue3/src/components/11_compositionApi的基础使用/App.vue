<!-- author: 大冰 -->
<template>
  <div>
      <home message="我是message"/>
      <reactive-demo msg="reactive的使用"></reactive-demo>
      <ref-demo msg="ref的使用"></ref-demo>
      <readonly-demo msg="readonly的使用"></readonly-demo>
  </div>
</template>

<script>
import Home from "./home.vue";
import ReactiveDemo from "./reactive的使用/reactive.vue"
import RefDemo from "./ref的基本使用/ref.vue"
import ReadonlyDemo from "./readonly的使用/readonly.vue"
export default {
  components: {
    Home,
    ReactiveDemo,
    RefDemo,
    ReadonlyDemo
  },
};
</script>
<style scoped>
</style>