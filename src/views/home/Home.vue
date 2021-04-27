<template>
    <div id="home" class="wrapper">
      <navbar class="home-nav"><div slot="center">购物街</div></navbar>
      <TarControl :titles="['流行','新款','精品']" class="TarControl1" @typeclick="tabclick" ref="tarcontrol1" v-show="tarshow"></TarControl>
      <BScroll class="content" ref="wrapper1" :isload="true" @loadpulling="loadMore" @scrollposition="positionscroll">
        <homeswiper :results="results" @swiperload="taroffsettop"></homeswiper>
        <RecommandView :recommends="recommends"></RecommandView>
        <FeatureView></FeatureView>
        <TarControl :titles="['流行','新款','精品']" class="TarControl2" @typeclick="tabclick" ref="tarcontrol2"></TarControl>
        <GoodsList :goods=" showgoods"></GoodsList>
      </BScroll>
      <BackTop @click.native="backtopclick" v-show="isshowimg"></BackTop>
    </div>
</template>

<script>
  import homeswiper from 'views/home/children/HomeSwiper'
  import RecommandView from 'views/home/children/RecommandView'
  import FeatureView from 'views/home/children/FeatureView'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/BackTop/BackTop'

  import navbar from 'components/common/navbar/NavBar'
  import TarControl from 'components/content/TarControl/TarControl'

  import {getHomeMultidata,getHomeData} from 'network/home'
  import {debounce} from 'common/utlies'
  import {itemlist} from 'common/mixin'

  import BScroll from 'components/content/scroll/Scroll'
  export default {
    name: "Home",
    components:{
      FeatureView,
      RecommandView,
      navbar,
      homeswiper,
      TarControl,
      GoodsList,
      BScroll,
      BackTop
    },
    data(){
      return{
        results:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isshowimg:false,
        tarcontrolheight:0,
        tarshow:false,
        saveY:0
      }
    },
    mixins:[itemlist],
    computed:{
        showgoods(){
          return this.goods[this.currentType].list
        },
    },
    activated(){
        this.$refs.wrapper1.scrollTo(0,this.saveY,0);
        // console.log("123")
        this.$refs.wrapper1.refresh()
    },
    deactivated(){
      this.$bus.$off("imgload",()=>{
        refresh()})
      this.saveY = this.$refs.wrapper1.scroll.y;
      console.log(this.saveY)
      // console.log(this.saveY);
    },
    created(){
      this.getHomeMultidata();
      this.getHomeData('pop');
      this.getHomeData('new');
      this.getHomeData('sell');

    },
    mounted(){

      this.$bus.$on('swiperload',()=>{
        this.tarcontrolheight = this.taroffsettop();
        // console.log(this.tarcontrolheight)
      })
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.results = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeData(type){
        const page = this.goods[type].page + 1;
        getHomeData(type,page).then(res =>{
          const newList = res.data.list;
          this.goods[type].list.push(...newList);
          this.goods[type].page += 1;

          this.$refs.wrapper1.finishpullup();
          this.$refs.wrapper1.scroll.refresh()
        })
      },
      //事件监听相关
      tabclick(index){
        if(index === 0){
          this.currentType = 'pop'
        }else if(index === 1){
          this.currentType = 'new'
        }else{
          this.currentType = 'sell'
        }
        this.$refs.tarcontrol1.activenumber = index;
        this.$refs.tarcontrol2.activenumber = index;
      },
      backtopclick(){
        this.$refs.wrapper1.scrollTo(0,0);
      },
      loadMore(){
        this.getHomeData(this.currentType);
        this.$refs.wrapper1.scroll.refresh()
      },
      positionscroll(position){
        if(-position.y>1000){
          this.isshowimg = true;
        };
        if(-position.y>this.tarcontrolheight){
          this.tarshow = true
        }else{
          this.tarshow = false
        }
      },
      taroffsettop(){
        this.tarcontrolheight = this.$refs.tarcontrol2.$el.offsetTop;
        // console.log(this.tarcontrolheight)
      }

    }
  }
</script>

<style scoped>
#home{
    height: 100vh;
    padding-top: 44px;
    position: relative;
  }
.home-nav{
  color:#fff;
  background-color: var(--color-tint);
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 9;
}
/*.TarControl{*/
  /*position: sticky;*/
  /*top:44px;*/

  /*z-index: 8;*/
/*}*/
.content{
    overflow: hidden;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 44px;
    bottom: 49px;
  }
  .TarControl1{
    position: relative;
    left: 0;
    right: 0;
    top: 0px;
    z-index: 10;
  }
</style>
