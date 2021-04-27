<template>
 <div id="app">
<keep-alive exclude="detail">
  <router-view></router-view>
</keep-alive>
  <mainTarbar></mainTarbar>

  </div>
</template>

<script>
import mainTarbar from 'components/content/mainTarbar/mainTarbar'

export default {
  name: 'App',
  components: {
    mainTarbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
