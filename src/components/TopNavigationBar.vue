<template>
  <div class="header" >
    <div class="header_content">
      <div class="header_log_path">
        <div class="logo"><img src="" alt=""></div>
        <div class="router_box">
          <div :class="index == isRouter ? 'isRouter' : ''" @click="navigateTo(index)" v-for="(item,index) in navigation" :key="index">{{item.name}}</div>
        </div>
      </div>
      <div class="user_info"  @click="isShowUsers">
        <span class="el-icon-setting"></span>
        <div>
          <img src="" alt="">
          <div>孙悟空</div>
          <span class="el-icon-arrow-down"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 左侧导航栏
 */

export default {
  name: "top-navigation-bar",
  data () {
    return {
      isRouter: 0,
      isShowUser: false,
      navigation: [
        {
          name: "市场活动",
          path: "marketActivity"
        },
        {
          name: "商机",
          path: "tradeOpportunity"
        },
        {
          name: "订单",
          path: "orders"
        },
        {
          name: "报表",
          path: "report_form"
        },
        {
          name: "员工",
          path: "queryStaff"
        }
      ]
    }
  },
  methods: {
    navigateTo (i) {
      this.isRouter = i
      this.$router.push(this.navigation[i].path)
    },
    isShowUsers () {
      this.isShowUser = !this.isShowUser
      this.$emit("isShow", this.isShowUser)
    }
  }
}
</script>
<style lang="less" scoped>
  .header {
    width: 100%;
    height: .6rem;
    background: #2F313E;
    .header_content {
      padding: 0 .3rem;
      color:rgba(221,221,221,1);
      display:flex;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      .header_log_path {
        display: flex;
        .logo {
          width:1.93rem;
          height:.47rem;
          font-size:.36rem;
          font-family:MicrosoftYaHei;
          color:rgba(32,185,255,1);
          line-height:.47rem;
          img {
            width:100%;
            height:100%;
          }
        }
        .router_box {
          display: flex;
          div {
            width:1.8rem;
            height:.6rem;
            line-height: .6rem;
            display: flex;
            justify-content: center;
          }
          .isRouter {
            width:1.8rem;
            height:.6rem;
            background:rgba(32,185,255,1) !important;
            color:rgba(255,255,255,1) !important;
          }
        }
      }
      .user_info {
        display: flex;
        align-items: center;
        div {
          display: flex;
        }
        .el-icon-setting {
          margin-right: .44rem;
        }
      }
    }
  }
</style>
