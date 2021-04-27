<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TarBaritem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path) ;
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) == -1;
      },
      activeStyle() {
        return this.isActive ? {} : {color: this.activeColor}
      }
    }
  }
</script>

<style scoped>
  .tar-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tar-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
