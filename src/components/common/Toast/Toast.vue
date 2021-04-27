<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // props:{
    //   message:{
    //     type: String,
    //     default(){
    //       return ''
    //     }
    //   },
    //   show:{
    //     type:Boolean,
    //     default(){
    //       return false
    //     }
    //   }
    // }
    data(){
      return{
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message,duration){
        this.message = message;
        this.isShow = true;
        setTimeout(()=>{
          this.isShow = false;
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  /*transform: translateY(-50%);*/
  background-color: rgba(0,0,0,.75);
  color: #ffffff;
  padding: 5px 5px;
  border-radius: 7px;
  z-index: 999;
}
</style>
