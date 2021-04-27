<template>
<div>
  <div v-if="Object.keys(shopimage).length !== 0" class="shopimage">
    <div class="shopimgtop">
      <div class="start"></div>
      <div class="text">{{shopimage.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="shopimgmiddle">
      <div class="key">{{shopimage.detailImage[0].key}}</div>
      <div class="shopimgbuttom">
        <img v-for="item in shopimage.detailImage[0].list" :src="item" @load="imageload" class="shopimg">
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "shopImage",
    props:{
      shopimage:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        count:0,
        imagelenth:0

      }
    },
    methods:{
      imageload(){
        this.count++;
        if(this.count === this.imagelenth){
          this.$emit("imgrefresh")
        }
      }
    },
    watch:{
      shopimage(){
        this.imagelenth = this.shopimage.detailImage[0].list.length;
      }
    }
  }
</script>

<style scoped>
  .shopimage{
    padding: 20px 15px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shopimgtop .start,
  .shopimgtop .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .shopimgtop .start{
    float: left;
  }
  .shopimgtop .end{
    float: right;
  }
  .shopimgtop .start::before,
  .shopimgtop .end::after{
    content: '';
    position: absolute;
    top: -5px;
    width: 5px;
    height: 5px;
    background-color: #333;
  }
  .shopimgtop .end::after{
    right: 0;
    top: 0px;
  }
  .shopimgtop .text{
    padding: 15px 0;
    font-size: 14px;
  }
  .shopimgmiddle .key{
    text-align: center;
    margin: 15px 0;
    color: #333;
    font-size: 15px;
  }
  .shopimgbuttom .shopimg{
    width: 100%;
  }
</style>
