<template>
<div id="detail">
  <childrendetail @scrolldetail="scrolldetail1" ref="detailbar"></childrendetail>
  <Scroll class="content" ref="detailscroll" :isload="true" @detailscroll="detailsc">
    <ChildrenSwiper :topimageitem="topimages" @loadimgswiper="loadimgswiper"></ChildrenSwiper>
    <GoodsTitles :goods="goods"></GoodsTitles>
    <ShopsDetail :shops="shops"></ShopsDetail>
    <shopImage :shopimage="shopImage" @imgrefresh="imgload" ref="shopimages1"></shopImage>
    <ShopDetail :shopparams="shopparams" ref="conments"></ShopDetail>
    <ShopComments :comments="shopcomments" ></ShopComments>
    <GoodsList :goods="recommends" ref="recommends1"></GoodsList>
  </Scroll>
    <BottonBar @addcart="addcart"></BottonBar>
</div>
</template>

<script>
  import childrendetail from 'views/detail/childrendetail/childrendetail'
  import ChildrenSwiper from 'views/detail/childrenswiper/ChildrenSwiper'
  import GoodsTitles from  'views/detail/childrengoodstitle/GoodsTitle'
  import ShopsDetail from 'views/detail/childrenshop/ShopsDetail'
  import Scroll from 'components/content/scroll/Scroll'
  import shopImage from 'views/detail/childrenshopImage/shopImage'
  import ShopDetail from 'views/detail/childrenshopdetail/ShopDetail'
  import ShopComments from 'views/detail/childrenshopcomment/ShopComments'
  import GoodsList from 'components/content/goods/GoodsList'
  import BottonBar from 'views/detail/childrenbottonbar/BottonBar'

  import {getDetaildata,goodsdetail,shopnews,shopdetails,getrecommend} from 'network/detail'
  import {debounce} from 'common/utlies'

  export default {
    name: "detail",
    data(){
      return{
        iid:null,
        topimages:[],
        goods:{},
        shops:{},
        shopImage:{},
        shopparams:{},
        shopcomments:{},
        recommends:[],
        shopdetailY:0,
        shopcommentY:0,
        shoprecommendY:0
      }
    },
    components:{
      GoodsTitles,
      childrendetail,
      ChildrenSwiper,
      ShopsDetail,
      Scroll,
      shopImage,
      ShopDetail,
      ShopComments,
      GoodsList,
      BottonBar
    },
    created(){
      this.iid = this.$route.params.id

      getDetaildata(this.iid).then(res=>{
        console.log(res)
        this.topimages = res.result.itemInfo.topImages;
        // console.log(this.topimages)
        this.goods = new goodsdetail(res.result,res.result.itemInfo,res.result.shopInfo)
        // console.log(this.goods)

        this.shops = new shopnews(res.result.shopInfo);
        // console.log(this.shops)
        // this.$refs.detailscroll.scroll.refresh()
        this.shopImage = res.result.detailInfo;

        this.shopparams = new shopdetails(res.result.itemParams.info,res.result.itemParams.rule);
        // console.log(this.shopparams)

        if(res.result.rate.list !== undefined){
          this.shopcomments = res.result.rate;
          // console.log(this.shopcomments)
        }else{
          this.shopcomments = undefined
        }
        // this.$nextTick()
        }
      );
      getrecommend().then(res=>{
        this.recommends = res.data.list;
        // console.log(res)
      })

    },
    mounted(){
      const refresh = debounce(this.$refs.detailscroll.refresh,50);
      this.$bus.$on("imgload",()=>{
        refresh()
      });
    },
    destroyed(){
      this.$bus.$off("imgload",()=>{
        refresh()})
    },
    methods:{
      imgload(){
        this.shopcommentY = this.$refs.conments.$el.offsetTop;
        this.shoprecommendY = this.$refs.recommends1.$el.offsetTop;
        console.log(this.shoprecommendY)
        this.$refs.detailscroll.refresh();
      },
      loadimgswiper(){
        this.shopdetailY = this.$refs.shopimages1.$el.offsetTop
        // console.log(this.shopdetailY)
      },
      scrolldetail1(index){
        if(index === 1){
          this.$refs.detailscroll.scroll.scrollTo(0,-this.shopdetailY,300);
          console.log('123')
        }else if (index === 2){
          this.$refs.detailscroll.scroll.scrollTo(0,-this.shopcommentY,300);
        }else if (index === 3){
          this.$refs.detailscroll.scroll.scrollTo(0,-this.shoprecommendY,300);
        }else{
          this.$refs.detailscroll.scroll.scrollTo(0,0,300);
        }

      },
      detailsc(position){
        // console.log(position)
        if(-position.y >= this.shopdetailY && -position.y<this.shopcommentY ){
          this.$refs.detailbar.currentitem = 1;
        }else if(-position.y >= this.shopcommentY && -position.y<this.shoprecommendY ){
          this.$refs.detailbar.currentitem = 2;
        }else if(-position.y >= this.shoprecommendY ){
          this.$refs.detailbar.currentitem = 3;
        }else {
          this.$refs.detailbar.currentitem = 0;
        }
        // switch (true) {
        //   case -position.y >= this.shopdetailY:
        //     this.$refs.detailbar.currentitem = 1;
        //     break;
        //   case -position.y >= this.shopcommentY:
        //     this.$refs.detailbar.currentitem = 2;
        //     break;
        //   case -position.y >= this.shoprecommendY:
        //     this.$refs.detailbar.currentitem = 3;
        //     break;
        //   default:this.$refs.detailbar.currentitem = 0;
        //     break;
        // }
      },
      addcart(){
        const product = {};
        product.title = this.goods.title;
        product.price = this.goods.realprice;
        product.desc = this.goods.desc;
        product.image = this.topimages[0];
        product.checked = true
        product.id = this.iid
        console.log(product)
        this.$store.dispatch('addtocart',product).then(res=>{
          this.$toast.show(res,2000)
        })

      }
    }


  }
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
}
.content{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    top:44px;
  }
</style>
