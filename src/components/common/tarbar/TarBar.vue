<template>
  <div id="bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TarBar"
  }
</script>

<style scoped>
  #bar{
    display: flex;
    text-align: center;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0px -3px 1px rgba(100,100,100,0.3);
  }

</style>
