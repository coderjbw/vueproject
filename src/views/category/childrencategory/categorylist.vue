<template>
<div class="categorylist1">
  <Scroll class="content" :isload="true">
    <div class="categorylist" v-for="(item,index) in categoryitem" :key="index" @click="listclick(index)" :class="{active:currentIndex === index}">
      {{item.title}}
    </div>
  </Scroll>
</div>
</template>

<script>
  import Scroll from 'components/content/scroll/Scroll'
  export default {
    name: "categorylist",
    data(){
      return{
        currentIndex:0
      }
    },
    components:{
      Scroll
    },
    props:{
      categoryitem:{
        type:Array,
        default(){
          return []
        }
      },
    },
    methods:{
      listclick(index){
        this.currentIndex = index;
        this.$emit('clicknumber',index)
      }
    }
  }
</script>

<style scoped>
  .categorylist1{
    height: 100vh;
    position: relative;
  }
.categorylist{
  background-color: #f6f6f6;
  width: 100px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  /*margin-top: 44px;*/
}
.content{
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
  .active{
    color: var(--color-high-text);
    font-weight: bold;
    background-color: #ffffff;
  }
</style>
