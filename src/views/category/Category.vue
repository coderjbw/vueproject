<template>
<div class="category">
<NavBar class="navbar"><div slot="center">商品分类</div></NavBar>
<categorylist :categoryitem="categorys" @clicknumber="clicknumber"></categorylist>
  <Scroll class="content2" :isload="true" ref="categoryscroll1" @categoryscroll="categoryscroll">
    <categoryitem :categoryitems="cateitem"></categoryitem>
    <TarControl class="TarControl" :titles="['流行','精品','新款']" @typeclick="itemclick"></TarControl>
    <GoodsList :goods="goodsdata"></GoodsList>
  </Scroll>
  <BackTop v-show="Isshow" @click.native="ToTop"></BackTop>
</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import categorylist from 'views/category/childrencategory/categorylist'
  import categoryitem from 'views/category/childrencategory/categoryitem'
  import Scroll from 'components/content/scroll/Scroll'
  import TarControl from 'components/content/TarControl/TarControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/BackTop/BackTop'

  import {getcategory,subcategory,subcategorydetail} from 'network/category'
  export default {
    name: "Category",
    components:{
      categorylist,
      NavBar,
      categoryitem,
      Scroll,
      TarControl,
      GoodsList,
      BackTop
    },
    data(){
      return{
        categorys:[],
        currentindex:0,
        categoryitems:{},
        maitKey:0,
        clickindex:0,
        cateitem:[],
        miniWallkey:[],
        subcategorydetail:{
          'pop':[],
          'sell':[],
          'new':[]
        },
        currenttype:'pop',
        Isshow:false
      }
    },
    created(){
      this._getcategory();
    },
    mounted(){

      this.$bus.$on('imgload',()=>{
        this.$refs.categoryscroll1.refresh()
      })
    },
    computed:{
        goodsdata(){
          return this.subcategorydetail[this.currenttype]
        }
    },
    methods: {
      //请求数据
      _getcategory() {
        getcategory().then(res => {
          // console.log(res)
          this.categorys = res.data.category.list;
          // console.log(this.categorys)
          for(let i=0;i<this.categorys.length;i++){
            this.maitKey = this.categorys[i].maitKey
            this.miniWallkey[i] = this.categorys[i].miniWallkey
            subcategory(this.maitKey).then(res => {
              // console.log(res)
              this.categoryitems[i] = res.data.list
              if(i == 0){
                this.cateitem = this.categoryitems[0];
              }
              // console.log(this.cateitem)
            })
          }
          // console.log(this.categoryitems)

          this._getsubcategorydetail(this.miniWallkey[0],'pop')
          this._getsubcategorydetail(this.miniWallkey[0],'sell')
          this._getsubcategorydetail(this.miniWallkey[0],'new')
          console.log(this.subcategorydetail)
        })
      },
      clicknumber(number){
        this.clickindex = number;
        // console.log(this.clickindex)
        this.cateitem = this.categoryitems[this.clickindex];
        // console.log(this.cateitem)
        this._getsubcategorydetail(this.miniWallkey[this.clickindex],'pop')
        this._getsubcategorydetail(this.miniWallkey[this.clickindex],'sell')
        this._getsubcategorydetail(this.miniWallkey[this.clickindex],'new')
        console.log(this.subcategorydetail)
      },
      _getsubcategorydetail(miniWallkey,type){
        subcategorydetail(miniWallkey,type).then(res=>{
          // const detaildata = res;
          this.subcategorydetail[type] = res

        })
      },
      itemclick(index){
        if(index === 0){
          this.currenttype = 'pop'
        }else if(index === 1){
          this.currenttype = 'sell'
        }else {
          this.currenttype = 'new'
        }
      },
      categoryscroll(position){
        // console.log(position)
        if(-position.y >= 500){
          this.Isshow=true
        }else {
          this.Isshow=false
        }
      },
      ToTop(){
        this.$refs.categoryscroll1.scrollTo(0,0);
      }
      }

  }
</script>

<style scoped>
.category{
    position: relative;
    /*display: inline-block;*/
    height: 100vh;
  }
.navbar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  width: 100%;
  color: #ffffff;
  font-weight: bold;
  background-color: var(--color-high-text);
  z-index: 9;
}
.content2{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
  left: 100px;
    overflow: hidden;
}
.TarControl{
  margin-top: 20px;
}
  /*.back-top{*/
    /*z-index: 9;*/
  /*}*/
</style>

