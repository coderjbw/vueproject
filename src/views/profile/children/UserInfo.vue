<template>
<div class="UserInfo">
  <div class="left UserInfo1">
    <img src="~/assets/img/profile/avatar.svg">
  </div>
  <div class="right UserInfo1">
    <div class="text">登录/注册</div>
    <div class="phone">
      <img src="~/assets/img/profile/phone.svg">
      <span>暂无绑定手机号</span>
      </div>
  </div>
  <div class="bottom ">
    <img src="~/assets/img/common/arrow-left.svg">
  </div>
</div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
.UserInfo{
  height: 85px;
  padding: 5px 10px;
  color: #ffffff;
  background-color: var(--color-tint);

  display: flex;
}
.UserInfo1{
  flex: 1;
}
/*.left{*/
  /*width: 70px;*/
/*}*/
.left>img{
  width: 70px;
  height: 70px;
  }
.right{
  position: relative;
  top: 12px;
  left: -70px;
}
.text{
  padding-left: 5px;
  margin-bottom: 3px;
}
.phone{
  display: flex;
  align-items: center;
  font-size: 13px;
}
.phone>img{
  width: 20px;
  height: 30px;
}
.bottom{
  width: 20px;
  line-height: 85px;
}
  .bottom>img{
    width: 20px;
  }
</style>
