<!-- author: 大冰 -->
<template>
  <div>
    <nav-component>
      <template v-slot:left>
        <button>我是按钮left</button>
      </template>

      <template v-slot:center>
        <h2>我是H2center</h2>
      </template>
    <!-- #号是v-slot:的缩写 -->
      <template #right>
        <i>我是i标签right</i>
      </template>
    </nav-component>
  </div>
</template>

<script>
import navComponent from "./nav.vue";
export default {
  components: {
    navComponent,
  },
};
</script>
<style scoped>
</style>