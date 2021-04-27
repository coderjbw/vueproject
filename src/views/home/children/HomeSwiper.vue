<template>
<swiper>
  <swiperitem v-for="(item,index) in results" :key="index">
    <a :href="item.link">
      <img :src="item.image" @load="imgload" >
    </a>
  </swiperitem>
</swiper>
</template>

<script>
  import {swiper,swiperitem} from 'components/common/swiper/index'
  export default {
    name: "HomeSwiper",
    props:{
     results:{
       type: Array,
       default(){
         return []
       }
     }
    },
    data(){
      return{
        isload:false
      }
    },
    components: {
      swiper,
      swiperitem},
    methods:{
      imgload(){
        if (!this.isload){
          this.$emit('swiperload');
        }
        this.isload = true
      }
    }
  }
</script>

<style scoped>

</style>
