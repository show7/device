<template>
  <el-row class="home" type="flex" justify='center'>
        <!-- 头部 -->
    <el-col  class="header">
      <div  class="logo" > 洽淘-{{role_type}} </div>
      <div  class="userinfo">

      </div>
    </el-col>
    <router-view></router-view>
  </el-row>
</template>

<script>
// import { Message } from 'element-ui'

export default {
  name: "Main"
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
