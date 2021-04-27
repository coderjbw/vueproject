<template>
  <div class="itemlist">
    <CheckButton class="checkbutton" @isChecked="checked1" :value="cartitem.checked"></CheckButton>
    <div class="left">
      <img :src="cartitem.image">
    </div>
    <div class="right">
      <div class="title">{{cartitem.title}}</div>
      <div class="desc">{{cartitem.desc}}</div>
      <div class="botton">
        <span class="price">￥{{cartitem.price}}</span>
        <span class="count">x{{cartitem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/common/CheckButton/CheckButton'

  export default {
    name: "ShopItem",
    // data(){
    //   return{
    //     selected:false
    //   }
    // },
    props:{
      cartitem:{
        type: Object,
        default(){
          return{}
        }
      }
    },
    components:{
      CheckButton
    },
    methods:{
      checked1(){
        this.cartitem.checked = !this.cartitem.checked
      }
    }
  }
</script>

<style scoped>
.itemlist{
  border-bottom:1px solid #ccc;
  padding: 5px;
  width: 100%;
  display: flex;
  padding-right: 10px;
}
.checkbutton{
  margin-right: 10px;
  position: relative;
  top: 45px;
}
.left img{
  width:80px;
  height: 100px;
  margin-right: 15px;
}
.right{
overflow: hidden;
  /*margin-bottom: 10px;*/
}
  .title{
    font-size: 17px;
    color: #333333;
    margin-bottom: 15px;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .desc{
    font-size: 14px;
    color: #666666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .botton{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
.right{
  color: orangered;;
}
</style>
