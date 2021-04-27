<template>
<div class="cart">
  <NavBar class="navbar">
    <div slot="center">购物车({{cartlength}})</div>
  </NavBar>
  <scroll class="content" :isload="true">
    <ShopItems :cartlist="cartshop"></ShopItems>
  </scroll>
  <cartbuttonbar></cartbuttonbar>
</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import scroll from 'components/content/scroll/Scroll'
  import ShopItems from 'views/cart/childrencoms/ShopItems'
  import cartbuttonbar from 'views/cart/childrencoms/cartbuttonbar'

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components:{
      scroll,
      NavBar,
      ShopItems,
      cartbuttonbar
    },
    computed:{
      ...mapGetters(['cartlength','cartshop'])
    }
  }
</script>

<style scoped>
  .cart{
    position: relative;
    height: 100vh;
  }
.navbar{
  background-color: var(--color-tint);
  color: #ffffff;
}
  .content{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
