<template>
<div class="category">
<categorylist v-for="(item,index) in categorys" :categoryitem="item" :key="index"></categorylist>
</div>
</template>

<script>
  import categorylist from 'views/category/childrencategory/categorylist'
  import {getcategory} from 'network/category'
  export default {
    name: "Category",
    components:{
      categorylist
    },
    data(){
      return{
        categorys:[]
      }
    },
    created(){
      this._getcategory();
    },
    methods:{
      _getcategory(){
        getcategory().then(res=>{
          // console.log(res)
          this.categorys = res.data.category.list;
          console.log(this.categorys)
        })
      }
    }
  }
</script>

<style scoped>

</style>
