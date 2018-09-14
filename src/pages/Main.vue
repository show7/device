<template>
  <el-row class="home" type="flex" justify='center'>
        <!-- 头部 -->
    <el-col  class="header">
        <div  class="logo" > 洽淘-{{role_type}} </div>
        <div  class="userinfo">
          <el-input
              class="search"
              placeholder="请输入订单号"
              prefix-icon="el-icon-search"
              v-model="order_id" @keyup.enter.native="seachOrder">
          </el-input>
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"><img :src="$store.state.Account.userInfo.user.logo_url" /></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="$router.replace('/login')">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
    </el-col>
    <el-col :span="24" class="main">
        <side-navigation-bar />
		<section class="content-container">
			<div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                  <router-view></router-view>
              </transition>
          </el-col>
			</div>
		</section>
	</el-col>
  </el-row>
</template>

<script>
// import { Message } from 'element-ui'

export default {
  name: "Main",
  data () {
    return {
      navList: [],
      isPlay: false,
      //   orderLod,
      order_id: "",
      selectIndex: 0
    }
  },
  computed: {
    role_type () {
      let role_type = ""
      switch (this.$store.state.Account.userInfo.user.role_type) {
        case "sys":
          role_type = "超级后台"
          break
        case "brand":
          role_type = "品牌后台"
          break
        case "store":
          role_type = "门店后台"
          break
        case "trade":
          role_type = "商圈后台"
          break
      }
      return role_type
    }
  },
  methods: {
    // 监听新订单
    // isUpdateMsg() {
    //   window.updateMsgWarn = msg => {
    //     var audio = document.getElementById("music1");
    //     let updateOrder = this.$notify({
    //       title: "通知",
    //       message: "您有新的订单",
    //       type: "success",
    //       duration: 0,
    //       onClick: res => {
    //         this.$router.push(`${this.userInfo.user.role_type}findOrder`);
    //         updateOrder.close();
    //         audio.pause();
    //       }
    //     });
    //     // this.setUpdateOrder(updateOrder)
    //     return this.isPlayMusic(1);
    //   };
    // },
    // 重复播放三次
    // isPlayMusic(num) {
    //   var elem = document.getElementById("music1");
    //   elem.play();
    //   elem.onended = () => {
    //     console.log(elem);
    //     if (num == 3) {
    //       return elem.pause();
    //     } else {
    //       return this.isPlayMusic(++num);
    //     }
    //   };
    // },

    // 切换权限
    /**
     * 传空 回到当前权限  this.$router.push({name:`${this.userInfo.user.role_type}seachOrder`,params:{order_id:this.order_id}})
     */

    // selectStore() {
    //   http.changePower(this.navList[i].uid).then(res => {
    //     if (res) {
    //       this.selectIndex = i;
    //       let response = publicFunc.getUser(res.data.stat);
    //       this.getUserInfo(response);
    //       this.$router.push("index");
    //     }
    //   });
    // },
    seachOrder () {
      if (this.order_id) {
        if (!isNaN(this.order_id)) {
          this.$store.commit("Order/SEARCH_ORDER_ID", this.order_id)
          this.$router.push({path: "/search"})
        } else {
          this.Message.error("请输入订单号")
        }
        this.order_id = ""
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0;
  width: 98%;
  .header {
    height: 60px;
    // line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      display: flex;
      align-items: center;
      justify-content: right;
      .search {
        box-shadow: 0 0 6px #1b3ded !important;
        overflow: hidden !important;
        border-radius: 4px;
        width: 200px;
      }
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
    .logo {
      //width:230px;
      font-size: 22px;
      color: #1b3ded;
      img {
        width: 40px;
        float: left;
        margin: 10px 10px 10px 18px;
      }
      .txt {
        color: #fff;
      }
    }
    .logo-width {
      width: 230px;
    }
    .logo-collapse-width {
      width: 60px;
    }
    .tools {
      padding: 0px 23px;
      width: 14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    box-shadow: 1px 1px 10px #e7e9f4;
    border-radius: 10px;
    aside {
      flex: 0 0 230px;
      width: 230px;
      // position: absolute;
      // top: 0px;
      // bottom: 0px;
      .el-menu {
        height: 100%;
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0px;
          left: 60px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-container {
      // background: #f1f2f7;
      flex: 1;
      position: absolute;
      right: 0px;
      top: 0px;
      bottom: 0px;
      left: 160px;
      overflow-y: scroll;
      // padding: 20px;
      .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>
