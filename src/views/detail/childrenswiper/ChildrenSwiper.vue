<template>
<div>
  <swiper class="swiperimages">
    <swiperitem v-for="(item,index) in topimageitem" :key="index"><img :src="item" @load="swiperload" ></swiperitem>
  </swiper>
</div>
</template>

<script>
  import {swiper, swiperitem} from 'components/common/swiper/index'


  export default {
    name: "ChildrenSwiper",
    props:{
      topimageitem:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isload:true
      }
    },
    components:{
      swiper, swiperitem
    },
    methods:{
      swiperload(){
        if(this.isload){
          this.$emit('loadimgswiper')
          this.isload = false
        }

      }
    }
  }
</script>

<style scoped>
.swiperimages{
  height: 250px;
  overflow: hidden;
}
</style>
