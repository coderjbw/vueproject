<template>
  <div>
    <div v-if="Object.keys(comments).length !== 0" class="comments">
      <div class="commentstop">
        <span class="usercomments top">用户评价</span>
        <span class="more top">更多</span>
      </div>
      <div class="user">
        <img :src="comments.list[0].user.avatar" >
        <span class="username">{{comments.list[0].user.uname}}</span>
      </div>
      <div class="comment">
        <div class="usercomment">{{comments.list[0].content}}</div>
        <span class="commenttime">{{comments.list[0].created | showDate}}</span>
        <span class="buystyle">{{comments.list[0].style}}</span>
      </div>
      <div v-if="comments.list[0].images !== undefined" class="commentimg">
        <img :src="item" v-for="item in comments.list[0].images" >
      </div>
    </div>
  </div>

</template>

<script>
  import {formatDate} from 'common/utlies'
  export default {
    name: "ShopComments",
    props:{
      comments:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
.comments{
  margin: 10px 15px;
}
  .commentstop{
    display: flex;
    height: 50px;
    line-height: 50px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
.commentstop .top{
  color: #333;
}
.commentstop .usercomments{
  font-size: 15px;
}
.commentstop .more{
  font-size: 13px;
}
  .user{
    margin: 10px 0;

  }
  .user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
.user .username{
  font-size: 15px;
  margin-left: 10px;
  position: relative;
  top: -15px;
}
.comment{
  font-size: 14px;
  margin-bottom: 15px;
  color: #777;
}
.comment .usercomment{
  margin-bottom: 10px;
  line-height: 1.3;

}
.comment .commenttime{
  font-size: 12px;
  color: #999;
}
.comment .buystyle{
  font-size: 12px;
  color: #999;
  margin-left: 10px;
}
.commentimg img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
