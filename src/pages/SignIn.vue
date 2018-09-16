<template>
  <div class="signin">
    <div class="header">
      <div class="logo"><img src="" alt=""></div>
      <div class="rember_pwd">
        <div >没有账号?</div>
        <div class="no_user_name">免费注册体验</div>
      </div>
    </div>
    <div class="signin_form">
      <h2>51销冠<br>专注工程机械行业的移动CRM云平台</h2>
      <!-- <div></div> -->
      <div class="title_signin">{{isLogin ? '登录' : '找回密码'}}</div>
      <div v-show="isLogin">
        <div class="input_box">
          <img src="../assets/imgs/3. Icons_ic_search@2x.png" alt="">
          <input v-model="MobilePhone" class="pas_box" placeholder="请输入用户名" type="text">
        </div>
        <div class="input_box">
          <img src="../assets/imgs/3. Icons_ic_search(1).png" alt="">
          <div class="pas_box">
            <input v-model="Password" placeholder="请输入密码" type="password">
            <div @click="isLogin = !isLogin">忘记密码？</div>
          </div>
        </div>
      </div>
      <div v-show="!isLogin">
        <div class="input_box">
          <img src="../assets/imgs/3. Icons_ic_search@3x.png" alt="">
          <input class="pas_box" placeholder="请输入手机号" type="text">
        </div>
        <div class="input_box">
          <img src="../assets/imgs/3. Icons_ic_search Copy 2@3x.png" alt="">
          <div class="pas_box">
            <input placeholder="请输入验证码" type="text">
            <div class="get_code">获取验证码</div>
          </div>
        </div>
        <div class="input_box">
          <img src="../assets/imgs/3. Icons_ic_search(1).png" alt="">
          <div class="pas_box">
            <input placeholder="请输入密码" type="text">
            <div>忘记密码？</div>
          </div>
        </div>
        <div class="input_box">
          <img src="../assets/imgs/3. Icons_ic_search(1).png" alt="">
          <div class="pas_box">
            <input placeholder="请再次输入密码" type="text">
            <div>忘记密码？</div>
          </div>
        </div>
      </div>
      <el-button style="margin-top:50px;" @click="operation"  type="primary">{{isLogin ? '登录' : '找回密码'}}</el-button>
    </div>
  </div>
</template>
<script>
import { Account } from "api"
export default {
  data () {
    return {
      isLogin: true,
      MobilePhone: "18700000004",
      Password: "18700000004"
    }
  },

  methods: {
    operation () {
      this.isLogin ? this.login() : this.seekPwd()
    },
    login () {
      if (!this.MobilePhone || !this.Password) {
        return this.$message({
          message: "请输入账号或密码",
          type: "warning"
        })
      }
      Account.login(this.MobilePhone, this.Password).then(res => {
        console.log(res)
        // if (res.data == )
      })
    },
    seekPwd () {
      console.log("找回密码")
    }
  }
}
</script>
<style lang="less" scoped>
  .signin {
    // background: url(../assets/imgs/timg.jpg);
    background: black;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 16px;
      .logo {
        width:69px;
        height:69px;
        background:gray;
        border-radius: 69px;
        margin-left: 60px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .rember_pwd {
        display: flex;
        align-items: center;
        margin-right: 30px;
        color: white;
        .no_user_name {
          border:1px solid white;
          margin-left: 20px;
          padding: 5px;
        }
      }
    }
    .signin_form {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      color: white;
      text-align: center;
      h2 {
        line-height: 50px;
      }
      .title_signin {
        margin-top: 50px;
      }
      .input_box {
        width: 370px;
        height: 50px;
        border-bottom: 1px solid white;
        display: flex;
        align-items: center;
        font-family:MicrosoftYaHei;
        .pas_box {
          width: 370px-18px;
          display: flex;
          align-content: center;
          justify-content: space-between;
          input {
            width: 370px-18px-100px;
          }
          .get_code {
            background: #20B9FF;
            padding: 5px;
            border-radius:4px;
          }
        }
        input {
          border:none;
          margin-left: 5px;
          background: rgba(0,0,0,0);
          color: white;
          &::-webkit-input-placeholder {
            color: white;
          }
          &:-webkit-autofill {
            background: rgba(0,0,0,0) !important;
          }
        }
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

</style>
