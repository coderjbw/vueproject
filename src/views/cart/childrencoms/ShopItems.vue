<template>
  <div>
    <ShopItem v-for="(item,index) in cartlist" :key="index" :cartitem="item"></ShopItem>
  </div>
</template>

<script>
  import ShopItem from 'views/cart/childrencoms/ShopItem'
  export default {
    name: "ShopItems",
    props:{
      cartlist:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      ShopItem
    }
  }
</script>

<style scoped>

</style>
