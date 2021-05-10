<template>
  <div class="normallistview">
    <div v-for="(item,index) in itemlist" :key="index" class="list">
      <img :src="iconUrl(item.icon)" class="listicon">
      <span class="text">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NormalListView",
    props:{
      itemlist:{
        type:Array,
        default(){
          return []
        }
        }
      },
    methods:{
      iconUrl(item){
        return require('assets/img/profile/' + item)
      }
    }
  }
</script>

<style scoped>
.normallistview{
  margin-top: 15px;
  padding: 0px 10px;
  color: #333;
  font-size: 15px;
  background-color: #ffffff;
}
.list{
  /*margin-top: 10px;*/
  /*width: 100%;*/
  height: 44px;
  line-height: 44px;

}
  .listicon{
    width: 20px;
    height: 20px;
    margin-right: 5px;
    vertical-align: middle;
  }
  .text{
    display: inline-block;
    padding-top: 1px;
    width: 90%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
.list:last-child .text{
  border-bottom: 0;
}
</style>
