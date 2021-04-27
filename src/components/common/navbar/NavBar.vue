<template>
  <div class="nav-bar">
    <div id="left"><slot name="left"></slot></div>
    <div id="center"><slot name="center"></slot></div>
    <div id="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.nav-bar #left{
  width: 60px;
}
.nav-bar #right{
  width: 60px;
}
.nav-bar #center{
  flex: 1;
}
</style>
