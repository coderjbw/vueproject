<template>
<div class="bar">
<div class="left items">
    <div class="left1 item">
      <i class="icon"></i>
      <div class="client">客服</div>
    </div>
    <div class="left2 item">
      <i class="icon icon1"></i>
      <div class="shop">店铺</div>
    </div>
    <div class="left3 item">
      <i class="icon icon2"></i>
      <div class="collect">收藏</div>
    </div>
  </div>
  <div class="right items">
    <div class="cart" @click="addtocart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</div>
</template>

<script>
  export default {
    name: "BottonBar",
    methods:{
      addtocart(){
        this.$emit('addcart')
      }
    }
  }
</script>

<style scoped>
.bar{
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  text-align: center;


  display: flex;
}
.bar .items{
    flex: 1;
  display: flex;
  font-size: 13px;
  }
  .item{
    flex: 1;
  }
  .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin-bottom: 3px;
    margin-top: 5px;
    margin-left: 16px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 0/100%;
  }
  .icon1{
    background-position:0px -53px ;
  }
  .icon2{
    background-position:0px -96px ;
  }
  .right{
    line-height: 49px;
    text-align: center;
    font-size: 15px;
    color: #fff;
  }
.right>div{
  flex: 1;
}
  .cart{
    background-color: #ffe817;
    color: #333;
  }
  .buy{
    background-color: #f69;
  }
</style>
