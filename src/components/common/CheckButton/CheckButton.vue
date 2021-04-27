<template>
  <div>
    <div class="checkbutton1" :class="{actived111:ischeck}" @click="checked" >
      <img src="~assets/img/cart/tick.svg">
    </div>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    data(){
      return{
        ischeck:this.value
      }
    },
    props:{
      value:{
        type:Boolean,
        default(){
          return null
        }
      }
    },
    methods:{
      checked(){
        this.$emit("isChecked");
        // console.log(this.ischeck)
        // console.log(this.value)
        // this.ischeck = !this.ischeck
      }
    },
    watch:{
      value(){
        this.ischeck = this.value
      }
    }
  }
</script>

<style scoped>
.checkbutton1{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #ccc;
}
  .actived111{
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
