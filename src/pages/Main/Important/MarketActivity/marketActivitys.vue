<template>
  <div>
    <div class="head_box">
      <div class="item blue">
        <span class="el-icon-arrow-left blue"></span>
        <span class="blue">新建</span>
      </div>
    </div>
    <div class="header_sra">
      <div>市场活动（200）</div>
      <el-input placeholder="请输入内容" class="search_inp"  prefix-icon="el-icon-search" v-model="srearch"></el-input>
    </div>
    <div class="info">
      <div class="info_conter" v-for="(item, i) in 10" :key="i">
        <img  src="../../../../assets/imgs/timg.jpg" alt="">
        <div class="info_box">
          <div class="tit">新挖掘机上市</div>
          <div class="state">
            <div class="state_item">已发布</div>
            <div>2018-02-02—2019-02-04</div>
            <div>店庆活动</div>
            <div>展会</div>
          </div>
          <div class="detail">
            <div>主机厂承担30%</div>
            <div class="detail-left">龙工LG6360</div>
          </div>
          <div class="addre">地点：上海市浦东区张江高科路123号</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      srearch: ""
    }
  }
}
</script>
<style lang="less" scoped>
.header_sra {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.2rem;
  padding: 0.3rem 0.17rem;
  .search_inp {
    width: 4.36rem;
    height: 0.4rem;
  }
}
.info {
  padding: 0 0.17rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .info_conter {
    width: 6.12rem;
    height: 4.91rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-top: 0.15rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 3.03rem;
      background: gray;
    }
    .info_box {
      padding: 0 0.3rem;
      .tit {
        font-size: 0.26rem;
        margin-top: 0.1rem;
      }
      .state {
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        color: #979797;
        margin-top: 0.2rem;
        .state_item {
          background: #1ae277;
          line-height: 0.25rem;
          text-align: center;
          color: white;
          border-radius: 0.14rem;
          width: 0.65rem;
          height: 0.25rem;
        }
      }
      .detail {
        font-size: 0.14rem;
        margin-top: 0.2rem;
        display: flex;
        .detail-left {
          margin-left: 0.41rem;
        }
      }
      .addre {
        font-size: 0.14rem;
        color: #979797;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
