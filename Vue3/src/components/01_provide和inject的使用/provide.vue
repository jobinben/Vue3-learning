<!-- author: 大冰 -->
<template>
  <div>
    <inject-component></inject-component>
    <h2>Provide:</h2>
    <button @click="addSkills">push</button>
  </div>
</template>

<script>
/* 父组件 向 inject 子组件 provide */
// provide 提供的是静态的变量
// 如果需要提供响应式的变量，需要用到component方法 返回一个ref
import injectComponent from "./inject.vue";
import { computed } from "vue";

export default {
  components: {
    injectComponent,
  },

  provide() {
    return {
      name: "jobin",
      age: "18",
      length: computed(() => this.skills.length),
    };
  },

  data() {
    return {
      skills: ["a", "b", "c"],
    };
  },

  methods: {
    addSkills() {
      this.skills.push("fucked!");
      console.log(this.skills);
    },
  },
};
</script>
<style scoped>
</style>