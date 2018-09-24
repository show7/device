<template>
  <div class="main">
    <div>
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
    <div>
     <router-view/>
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
  width: 2.61rem;
  height: 2.8rem;
  background: rgba(47, 49, 62, 1);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06),
    0px -2px 8px 0px rgba(0, 0, 0, 0.06);
  border-radius: .04rem;
  position: fixed;
  top: .8rem;
  right: .3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .user_img {
    width: .8rem;
    height: .8rem;
    margin-top: .3rem;
    background: red;
    margin: 0 auto;
  }
  .name {
    font-size: .14rem;
    color: rgba(255, 255, 255, 1);
    margin-top: .1rem;
    text-align: center;
  }
  .updatePwd {
    font-size: .14rem;
    color: rgba(32, 185, 255, 1);
    text-align: center;
    margin-top: .3rem;
  }
}
</style>
