<template>
<div class="tar-control">
  <div v-for="(item,index) in titles" @click="activeclikc(index)" :class="{active: index === activenumber}">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
  export default {
    name: "TarControl",
    props:{
      titles:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        activenumber: 0
      }
    },
    methods:{
      activeclikc(index){
        this.activenumber = index;
        this.$emit('typeclick',index);
      }
    }
  }
</script>

<style scoped>
.tar-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #eee;
}
.tar-control  div{
  flex: 1;
  height: 40px;
  line-height: 40px;

}
.active {
  color: var(--color-high-text);
}
.active span{
  padding-bottom: 5px;
  border-bottom: 2px solid var(--color-high-text);
}
</style>
