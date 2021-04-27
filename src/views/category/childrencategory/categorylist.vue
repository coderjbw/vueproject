<template>
<div>
{{categoryitem.title}}
</div>
</template>

<script>
  export default {
    name: "categorylist",
    props:{
      categoryitem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>
