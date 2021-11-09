<!-- author: 大冰 -->
<template>
  <div class="wrapper">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.wrapper{
    display: flex;
}
.left{
    background: red;
}
.center{
    background: blue;
    flex: 1;
}
.right {
    background: yellow;
}
</style>
