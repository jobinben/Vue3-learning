<!-- author: 大冰 -->
<template>
  <div>
    <emit-component />
    <on-component />
  </div>
</template>

<script>
import emitComponent from "./emit.vue";
import onComponent from "./on.vue";
export default {
  components: {
    emitComponent,
    onComponent,
  },
};
</script>
<style scoped>
</style>