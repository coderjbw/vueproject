<template>
  <div v-if="Object.keys(shopparams).length !== 0" class="shopdetail">
    <table class="shoptable">
      <tr v-for="items in shopparams.tables[0]">
        <td v-for="item in items">{{item}}</td>
      </tr>
    </table>
    <div>
      <table class="shopset">
        <tr v-for="item in shopparams.set">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div v-if="shopparams.image.length !== 0" class="shopimg">
      <img :src="shopparams.image">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopDetail",
    props:{
      shopparams:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
.shopdetail{
  margin: 20px 15px;
  font-size: 14px;
}
  .shopdetail .shoptable{
    width: 100%;
    border-collapse: collapse;
  }
.shopdetail .shoptable tr{
  height: 42px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.shopset{
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid rgba(100,100,100,.1);
}
.shopset tr{
  height: 42px;
}
.shopset .key{
  width: 95px;
}
.shopset .value{
  color: #eb4868;
}
.shopimg img{
    width: 100%;
  }
</style>
