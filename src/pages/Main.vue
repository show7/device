<template>
  <div class="main">
    <div>
      <top-navigation-bar @isShow="isShowCard" />
    </div>
    <div @click="isShow = false"></div>
    <div v-show="isShow" class="fix_usr_info">
      <div class="user_img"><img src="" alt=""></div>
      <div class="name">孙悟空</div>
      <div class="name">销售</div>
      <div class="updatePwd">修改密码</div>
    </div>
  </div>
</template>

<script>
// import { Message } from 'element-ui'

export default {
  name: "Main",
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    isShowCard (val) {
      this.isShow = val
    }
  }
}
</script>

<style lang="less" scoped>
  .fix_usr_info {
        width:261px;
        height:280px;
        background:rgba(47,49,62,1);
        box-shadow:0px 2px 8px 0px rgba(0,0,0,0.06),0px -2px 8px 0px rgba(0,0,0,0.06);
        border-radius:4px;
        position: fixed;
        top: 80px;
        right: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .user_img {
          width: 80px;
          height: 80px;
          margin-top: 30px;
          background: red;
          margin: 0 auto;
        }
        .name {
          font-size:14px;
          color:rgba(255,255,255,1);
          margin-top: 10px;
          text-align: center;
        }
        .updatePwd {
          font-size:14px;
          color:rgba(32,185,255,1);
          text-align: center;
          margin-top: 30px;
        }
  }
</style>
