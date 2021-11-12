<!-- author: 大冰 -->
<template>
  <div>
    <!-- 1. 这个是v-model的语法题 -->
    <input :value="title" @input="handleInput">

  
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
   
  },
  // 注册事件
  emits: ['update:title'],

  methods: {
    handleInput(event) {
      // 触发事件更新value
      this.$emit("update:title", event.target.value);
    },
  },
};
</script>
<style scoped>
</style>    