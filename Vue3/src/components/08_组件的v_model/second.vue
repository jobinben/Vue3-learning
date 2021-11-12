<!-- author: 大冰 -->
<template>
  <div>
    <!-- 2. 通过计算属性实现 -->
    <input v-model="value">
  </div>
</template>

<script>
export default {
  props: {
    second: {
      type: String
    }
  },
  // 注册事件
  emits: ['update:second'],

  computed: {
    value: {
      set(val) {
        this.$emit('update:second', val)
      },
      get() {
        return this.second
      }
    }
  },

};
</script>
<style scoped>
</style>    