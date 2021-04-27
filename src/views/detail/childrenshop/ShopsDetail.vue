<template>
<div class="shopinfo">
  <div class="shoplogo">
    <img :src="shops.shopLogo">
    <span>{{shops.name}}</span>
  </div>
  <div class="shopmiddle">
    <div class="shopitem shopmiddleleft">
      <div class="shopitems shopsells">
        <div class="sellcount">{{shops.cSells}}</div>
        <div class="selltext">总销量</div>
      </div>
      <div class="shopitems shopgoods">
        <div class="goodscount">{{shops.cGoods}}</div>
        <div class="goodstext">全部宝贝</div>
      </div>
    </div>
    <div class="shopitem shopmiddleright">
      <table>
        <tr v-for="item in shops.score">
          <td>{{item.name}}</td>
          <td class="score" :class="{socrebetter:item.isBetter}">{{item.score}}</td>
          <td class="better" :class="{betterbetter:item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
        </tr>
      </table>
    </div>
  </div>
  <div class="shopin">
    <div class="inshop">进店逛逛</div>
  </div>
</div>
</template>

<script>
  export default {
    name: "ShopsDetail",
    props:{
      shops:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shopinfo{
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shoplogo{
  line-height: 45px;
    display: flex;
    align-items: center;
  }
.shoplogo img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.shoplogo span{
  margin-left: 10px;
   vertical-align: center;
  }
  .shopmiddle{
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .shopitem{
    flex: 1;
  }
  .shopmiddleleft{
    display: flex;
    color: #333;
    border-right: 1px solid rgba(0,0,0,.1);

  }
  .shopmiddleleft .sellcount{
    font-size: 18px;
  }
  .shopmiddleleft .selltext{
    font-size: 12px;
    margin-top: 10px;
  }
  .shopgoods .goodscount{
    font-size: 18px;
  }
  .shopgoods .goodstext{
    font-size: 12px;
    margin-top: 10px;
  }
  .shopitems{
    flex: 1;
    text-align: center;
  }
  .shopmiddleright{
    margin-left: 8px;
    font-size: 13px;
    color: #333;
  }
  .shopmiddleright table {
    width: 120px;
    margin-left: 30px;
  }
  .shopmiddleright table td{
    padding: 5px 0;
  }
  .shopmiddleright .score{
    color: #5ea732;
  }
  .shopmiddleright .socrebetter{
    color: #f13e3a;
  }
  .shopmiddleright .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .shopmiddleright .betterbetter span{
    background-color: #f13e3a;
  }
  .shopin{
    margin-top: 15px;
    text-align: center;
    /*font-size: 14px;*/
    /*background-color: #f2f5f8;*/
  }
  .shopin .inshop{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
