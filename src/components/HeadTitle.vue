<template>
  <div class="head_title">
    <div class="hegi"></div>
    <div >{{name}}</div>
  </div>
</template>
<script>
export default {
  name: "head_title",
  props: {
    name: {
      type: String
    }
  }
}
</script>
<style lang="less" scoped>
.head_title {
  width: 100%;
  height:.8rem;
  display: flex;
  align-items: center;
  // box-shadow:0px -1px 0px 0px rgba(230,234,238,1);
  border-bottom: 1px solid #E6EAEE;
  .hegi {
    margin-right: .2rem;
    background:#20B9FF;
    height:.26rem;
    width: .04rem;
    border-radius: .08rem;
  }
  div {
    color: #494A4E;
    font-size:.2rem;
    font-family:MicrosoftYaHei;
  }
}
</style>
