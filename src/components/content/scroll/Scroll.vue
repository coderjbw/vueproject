<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      isload:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        scroll:null,
      }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:3,
        click:true,
        pullUpLoad: this.isload,
      });
      this.scroll.on('scroll',(position)=>{
        this.$emit('scrollposition',position);
        this.$emit("detailscroll",position);
        this.$emit('categoryscroll',position);
      })
      this.scroll.on('pullingUp',()=>{
          this.$emit('loadpulling');
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishpullup(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll&&this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
