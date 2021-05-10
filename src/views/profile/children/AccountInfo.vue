<template>
<div class="AccountInfo">
  <div class="account">
    <div><span class="money">0.00</span>元</div>
    <div class="text">我的余额</div>
  </div>
  <div class="account">
    <div><span class="money">0</span>个</div>
    <div class="text">我的优惠</div>
  </div>
  <div class="account">
    <div><span class="money">0</span>分</div>
    <div class="text">我的积分</div>
  </div>
</div>
</template>

<script>
  export default {
    name: "AccountInfo"
  }
</script>

<style scoped>
.AccountInfo{
  /*margin: 15px 0;*/
  display: flex;
  background-color:  #f2f2f2;
}
  .account{
    flex: 1;
    text-align: center;
    padding: 15px 0;
    background-color:  #ffffff;
    margin-right: 1px;
  }
.account:nth-child(3){
  margin-right: 0;
}
.money{
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }
  .text{
    font-size: 13px;
    margin-top: 6px;
  }
</style>
