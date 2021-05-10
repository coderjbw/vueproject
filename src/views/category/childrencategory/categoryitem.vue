<template>
<div class="categoryitem" v-if="categoryitems">
  <div v-for="(item,index) in categoryitems" :key="index" class="items">
    <a :href="item.link">
      <img :src="item.image" class="img" >
      <div class="title">{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
  export default {
    name: "categoryitem",
    props:{
      categoryitems:{
        type:Array,
        default(){
          return []
        }
      },
    },
    methods:{
      // xxaa(){
      //   console.log("123")
      // }
    }
  }
</script>

<style scoped>
  .categoryitem{
    position: relative;
    left: 0px;
    width: 200px;
    /*margin-left: 100px;*/
    font-size: 12px;
    /*z-index: 10;*/
  }
  .items{
    width: 100px;
    display: inline-block;
  }
.img{
  width: 54.13px;
  height: 54.13px;
}
</style>
