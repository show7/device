<template>
    <div class="nav_page">
      <div class="nav_conter">
        <div @click="$router.go(-1)">
          <span class="el-icon-back"></span>
          <span>返回</span>
        </div>
        <div>{{routeName}}</div>
      </div>
      <div>{{description}}</div>
    </div>
</template>
<script>
/**
 * 顶部待返回的导航栏 接受一个上一个页面名字的参数
 */
export default {
  name: "navigation-head-back",
  props: {
    routeName: {
      type: String
    },
    description: {
      type: String,
      default: () => ""
    }
  }
}
</script>
<style scoped>
.nav_page {
  width: 100%;
  border-bottom: 1px solid rgba(111, 111, 111, 0.32);
  display: flex;
  justify-content: space-between;
}
.nav_conter {
  display: flex;
  padding: 10px 0;
}
.nav_conter > div {
  padding: 0 20px;
  border-left: 1px solid rgba(111, 111, 111, 0.32);
}
.nav_conter > div:nth-child(1) {
  border: none;
}
</style>
