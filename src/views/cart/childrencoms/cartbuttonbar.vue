<template>
  <div class="buttonbar">
    <div class="allselected" @click="Allselected">
      <CheckButton class="button" :value="isAllselected" ></CheckButton>
      <span class="text">全选</span>
    </div>
    <div class="alladd">
      <span>合计：¥{{totalprice}}</span>
      <span></span>
    </div>
    <div class="caluted1">
      <span @click="gopay">去计算({{paycount}})</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/common/CheckButton/CheckButton'
  export default {
    name: "cartbuttonbar",
    components:{
      CheckButton
    },
    computed:{
      totalprice(){
        const cartList = this.$store.state.shopcart
        return cartList.filter(item=>{return item.checked}).reduce((preValue,item)=>{
          return preValue+item.price*item.count
        },0).toFixed(2)
      },
      paycount(){
        return this.$store.state.shopcart.filter(item=>{
          return item.checked
        }).length
      },
      isAllselected(){
        if(this.$store.state.shopcart.length === 0){
          // console.log('123')
          return false
        }else if(this.$store.state.shopcart.filter(item =>
          !item.checked
          ).length > 0){
          return false
        }else {
          return true
        }
        // if(this.$store.state.shopcart.length === 0){
        //   return false}
        // return !this.$store.state.shopcart.find(item => !item.checked)
      },

    },
    methods:{
      Allselected(){
        if(this.isAllselected){
          for(let item in this.$store.state.shopcart){
            this.$store.state.shopcart[item].checked = false
          }
        }else{
          for(let item in this.$store.state.shopcart){
            this.$store.state.shopcart[item].checked = true
          }
        }
      },
      gopay(){
        if(this.$store.state.shopcart.length === 0){
          this.$toast.show("请选择一个商品购买",2000);
        }else if(this.$store.state.shopcart.filter(item=>item.checked).length === 0){
          this.$toast.show("请选择一个商品购买",2000);
        }
      }
    }
  }
</script>

<style scoped>
.buttonbar{
  padding-left: 10px;
  display: flex;
  height:44px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  color: #888;
  background-color: #eee;
}
.allselected{
  width: 70px;
  align-items: center;
  display: flex;
}
  .button{
  display: inline-block;
  }
  .text{
    margin-left: 5px;
  }
  .alladd{
    flex: 1;
    line-height: 44px;
    margin-left: 20px;
  }
  .caluted1{
    width: 100px;
    background-color: orangered;
    color: #fff;
    text-align: center;
    line-height: 44px;
  }
</style>
