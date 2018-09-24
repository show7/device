<template>
  <div class="head_box">
    <div class="item blue">
      <span class="el-icon-arrow-left blue"></span>
      <span class="blue">返回列表</span>
    </div>
    <div class="item">
      <span class="el-icon-circle-close blue"></span>
      <span class="gray">取消</span>
    </div>
    <div class="item">
      <span class="el-icon-circle-close blue"></span>
      <span class="gray">保存并发布</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "head-back"
}
</script>

<style lang="less" scoped>
.head_box {
  width: 100%;
  height: 0.6rem;
  background: #F7F7FB;
  display: flex;
  align-items: center;
  .item {
    margin-left: .25rem;
  }
  .blue {
    color: #20B9FF;
  }
  .gray {
    color:#979797;
  }
}
</style>
