<template>
<div class="goodsitem" @click="itemclick">
  <img :src="showImg" @load="imageload">
  <div class="goodsinfo">
    <p>{{goodsitem.title}}</p>
    <span class="price">{{goodsitem.price}}</span>
    <span class="collect">{{goodsitem.cfav}}</span>
  </div>
</div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsitem:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImg(){
        return this.goodsitem.image || this.goodsitem.showLarge.img
      }
    },
    methods:{
      imageload(){
        // console.log("aaaa")
        this.$bus.$emit("imgload");
      },
      itemclick(){
      //跳转详情页
        this.$router.push('/detail/'+this.goodsitem.iid)
      }
    }
  }
</script>

<style scoped>
.goodsitem{
  padding-bottom: 40px;
  position: relative;
}
.goodsitem img{
  width: 100%;
  border-radius: 5px;
}
.goodsinfo{
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 5px;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }
.goodsinfo p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goodsinfo .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsinfo .collect{
  position: relative;
}
.goodsinfo .collect::before{
  content: '';
  position: absolute;
  top: -1px;
  left: -16px;
  width: 14px;
  height: 14px;
  background:url("~assets/img/common/collect.svg");
  background-size: 14px;
  background-repeat: no-repeat;
}
</style>
