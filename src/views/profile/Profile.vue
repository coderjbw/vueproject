<template>
<div class="Profile">
  <NavBar class="Navbar"><div slot="center">我的档案</div></NavBar>
  <UserInfo></UserInfo>
  <AccountInfo></AccountInfo>
  <NormalListView :itemlist="orderlist"></NormalListView>
  <NormalListView :itemlist="services"></NormalListView>
</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import UserInfo from 'views/profile/children/UserInfo'
  import AccountInfo from 'views/profile/children/AccountInfo'
  import NormalListView from 'views/profile/children/NormalListView'
  export default {
    name: "Profile",
    components:{
      NavBar,
      UserInfo,
      AccountInfo,
      NormalListView
    },
    data(){
      return{
        orderlist:[
          {icon:'message.svg',text:'我的消息'},
          {icon:'pointer.svg',text:'积分商城'},
          {icon:'vip.svg',text:'会员卡'}
        ],
        services:[
          {icon:'cart.svg',text:'我的购物车'},
          {icon:'shopping.svg',text:'下载购物APP'}
        ]
      }
    }
  }
</script>

<style scoped>
  .Profile{
    background-color:  #f2f2f2;
  }
.Navbar{
  color: #ffffff;
  background-color: var( --color-tint);
}
</style>
