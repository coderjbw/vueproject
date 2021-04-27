<template>
    <TarBar>
      <TarBaritem path="/home" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </TarBaritem>
      <TarBaritem path="/category" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </TarBaritem>
      <TarBaritem path="/cart" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </TarBaritem>
      <TarBaritem path="/profile" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </TarBaritem>
    </TarBar>
</template>

<script>
  import TarBar from "components/common/tarbar/TarBar";
  import TarBaritem from "components/common/tarbar/TarBaritem";
  export default {
    name: "mainTarbar",
    components: {TarBaritem, TarBar},
  }
</script>

<style scoped>

</style>
