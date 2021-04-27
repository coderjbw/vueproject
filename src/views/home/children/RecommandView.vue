<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommenditem">
    <a :href="item.link">
      <img :src="item.image">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
  export default {
    name: "RecommandView",
    props:{
      recommends:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 10px solid #eee;
}
.recommenditem{
    flex: 1;
  }
.recommenditem img{
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}
</style>
