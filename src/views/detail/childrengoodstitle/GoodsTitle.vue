<template>
<div v-if="Object.keys(goods).length !== 0" class="infogood">
  <div class="goodstitle">{{goods.title}}</div>
  <div class="infoprice">
    <span class="realprice">{{goods.price}}</span>
    <span v-if="goods.oldprice" class="oldprice">{{goods.oldprice}}</span>
    <span v-if="goods.discountDesc" class="discount">{{goods.discountDesc}}</span>
  </div>
  <div class="infoOthers">
    <span>{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span>{{goods.services[goods.services.length-1].name}}</span>
  </div>
  <!--<div class="infoserverices">-->
    <!--<span class="info-service-item" v-for="index in goods.services.length-1" :key="index">-->
        <!--<img :src="goods.services[index-1].icon">-->
        <!--<span>{{goods.services[index-1].name}}</span>-->
      <!--</span>-->
  <!--</div>-->
  <div class="infoserverices">
    <span><img :src="goods.services[2].icon">{{goods.services[2].name}}</span>
    <span>{{goods.columns[2]}}</span>
    <span > <img v-if="goods.services[0].icon" :src="goods.services[0].icon">{{goods.services[0].name}}</span>
  </div>
</div>
</template>

<script>
  export default {
    name: "GoodsTitle",
    props:{
      goods:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .infogood{
    padding: 0 10px;
    border-bottom: 5px solid #f2f5f8;
  }
.goodstitle{
  margin-top: 10px;
  /*padding-left: 5px;*/
  /*padding-right: 5px;*/
  color: #222
}
.infoprice{
    margin-top: 10px;
  }
.infoprice  .realprice{
  font-size: 24px;
  color: var( --color-high-text);
}
.infoprice  .oldprice{
  font-size: 13px;
  margin-left: 5px;
  color: #999;
  text-decoration: line-through;
}
.infoprice .discount{
  position: relative;
  left: 7px;
  top: -7px;
  font-size: 13px;
  background-color: var(--color-high-text);
  color: #fff;
  border-radius: 5px;
  margin-left: 5px;
  padding: 2px 3px;
}
  .infoOthers{
    display: flex;
    margin-top: 15px;
    font-size: 13px;
    color: #999 ;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100,100,100,.1);
    line-height: 30px;
  }
.infoserverices{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #333;
    line-height: 60px;
  }
.infoserverices img{
  width: 14px;
  height: 14px;
  margin-right: 3px;
  vertical-align: middle;
  padding-bottom: 2px;
  /*position: relative;*/
  /*left: 0px;*/
  /*top: 0px;*/
}
</style>
