<!-- author: 大冰 -->
<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="getParentAndRoot">获取父元素和根元素</button>

    <template v-if="$parent.names">
      <h2>我是在other组件里渲染App组件的names : </h2>
      <span  v-for="item in $parent.names" :key="item">{{ item }},</span>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是other组件",
    };
  },
  methods: {
    getParentAndRoot() {
      console.log("parent Element:", this.$parent);
      console.log("root Element", this.$root);
    },
  },
};
</script>
<style scoped>
</style>