<template>
    <div class="left">
        <!--  -->
        <el-menu :default-active="$store.state.Account.userInfo.user.functions + ''"  unique-opened router class="el-menu-vertical-demo" @select="handSelect">
            <div  v-for="(item,index) in navigation" :key="index">
                <template>
                    <div v-if="item.subs.length">
                        <template >
                            <el-submenu  :index="item.func_name + ''" :key="item.functions" >
                                <template slot="title"><i :class="item.icon"></i>{{ item.func_name }}</template>
                                <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.func_url + ''">{{ subItem.func_name }}</el-menu-item>
                            </el-submenu>
                        </template>
                    </div>
                    <div  v-else>
                        <template>
                            <el-menu-item :index="item.func_url + ''" :key="item.functions">
                                <i :class="item.icon"></i>{{ item.func_name }}
                            </el-menu-item>
                        </template>
                    </div>
                </template>
            </div>
        </el-menu>
    </div>
</template>

<script>
/**
 * 左侧导航栏
 */

export default {
  name: "side-navigation-bar",
  data () {
    return {
      pathIndex: 0,
      active: 0,
      navigation: []
    }
  },
  created () {
    this.navigation = this.$store.state.Account.userInfo.user.functions
  },
  updated () {
    this.navigation = this.$store.state.Account.userInfo.user.functions
  },
  methods: {
    handSelect (index) {
      this.pathIndex = index
    }
  }
}
</script>
<style lang='less' scoped>
.el-submenu .el-menu-item {
  min-width: 0;
}
.el-menu-vertical-demo {
  width: 160px;
  padding-top: 40px;
}
.left {
  height: 85vh;
  ul {
    height: 100%;
  }
}
</style>
