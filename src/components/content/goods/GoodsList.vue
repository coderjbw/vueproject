<template>
  <div class="goodslist">
    <GoodsListItem v-for="(item,index) in goods" :goodsitem="item" class="goodsitem" :key="index"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type: Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
.goodslist{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5px;
}
.goodslist .goodsitem{
  width: 48%;
  }
</style>
