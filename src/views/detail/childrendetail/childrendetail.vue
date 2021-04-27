<template>
<div>
  <navbar>
    <div slot="left" class="backimg" @click="backitem"><img src="~assets/img/common/back.svg"></div>
    <div slot="center" class="itemsgoods">
      <div v-for="(items,index) in titles" class="goodsdetail" @click="itemclick(index)" :class="{active:currentitem === index}">{{items}}</div>
    </div>
  </navbar>
</div>
</template>

<script>
  import navbar from 'components/common/navbar/NavBar'
  export default {
    name: "childrendetail",
    data(){
      return{
        titles:['商品','详情','参数','推荐'],
        currentitem:0,
      }
    },
    components:{
      navbar
    },
    methods:{
      itemclick(index){
        this.currentitem = index;
        this.$emit('scrolldetail',index)
      },
      backitem(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.itemsgoods{
  display: flex;
  font-size: 13px;
}
  .goodsdetail{
    flex: 1;
  }
  .active{
    color:var(--color-tint)
  }
  .backimg{
 margin-top: 2px;
  }
.backimg img{
width: 15px;
  height: 15px;
}
</style>
