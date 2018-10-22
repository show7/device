<template>
  <div class="head_title">
    <div class="head_item">
      <div class="hegi"></div>
      <div >{{name}}</div>
    </div>
    <div class="update"  v-show="isShowRight"><i class="el-icon-edit"></i>编辑</div>
  </div>
</template>
<script>
export default {
  name: "head_title",
  props: {
    name: {
      type: String
    },
    isShowRight: {
      type: Boolean
    }
  }
}
</script>
<style lang="less" scoped>
.head_title {
  width: 100%;
  height: 0.8rem;
  display: flex;
  align-items: center;
  // box-shadow:0px -1px 0px 0px rgba(230,234,238,1);
  justify-content: space-between;
  border-bottom: 1px solid #e6eaee;
  .head_item {
     display: flex;
     align-items: center;
    .hegi {
      margin-right: 0.2rem;
      background: #20b9ff;
      height: 0.26rem;
      width: 0.04rem;
      border-radius: 0.08rem;
    }
    div {
      color: #494a4e;
      font-size: 0.2rem;
      font-family: MicrosoftYaHei;
    }
  }

  .update {
    color: #20b9ff;
    font-size: 0.14rem;
  }
}
</style>
