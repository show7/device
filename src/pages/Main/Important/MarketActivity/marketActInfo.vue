<template>
  <div>
    <div class="head_box">
      <div class="item blue">
        <span class="el-icon-arrow-left blue"></span>
        <span class="blue" @click="$router.back()" >返回列表</span>
      </div>
      <div class="item">
        <span class="el-icon-circle-close blue"></span>
        <span class="gray">取消活动</span>
      </div>
      <div class="item">
        <span class="el-icon-circle-close blue"></span>
        <span class="gray">转为已完成</span>
      </div>
    </div>
    <div class="info_box">
      <div class="title">
        <div>艾瑞泽GX预售试驾订单（小程序）</div>
        <div class="info_state">已发布</div>
      </div>
      <div class="filtet_tit">
        <div v-for="(item, i) in ['基本信息', '活动明细']" :class="isSelect == i ? 'isSelect' : ''" @click="isSelect = i" :key="i" >{{item}}</div>
      </div>
      <div class="info" v-show="isSelect == 0">
        <div>
          <span>活动编号：</span>
          <span class="code">{{marketDetail.CampaignTypeCode}}</span>
        </div>
        <div>
          <span>活动主题：</span>
          <span class="code">{{marketDetail.CampaignName}}</span>
        </div>
        <div>
          <span>活动地点：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>开始日期：</span>
          <span class="code">{{marketDetail.StartDate}}</span>
        </div>
        <div>
          <span>结束日期：</span>
          <span class="code">{{marketDetail.EndDate}}</span>
        </div>
        <div>
          <span>一级来源渠道：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>二级来源渠道：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>目标车型：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>活动链接：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>集客目标：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>集客结果：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>参与潜客目标：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>参与潜在结果：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>新增潜客目标：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>新增潜客结果：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>订单目标：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>订单结果：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>活动状态：</span>
          <span class="code">00000001</span>
        </div>
        <div style="width:100%">
          <span>动发起方：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>预览数：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>参与顾问数：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>参与客户：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>新增商机数：500</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>加热商机数：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>下订单成交数：</span>
          <span class="code">00000001</span>
        </div>
        <div class="bottom_image"></div>
      </div>
      <div v-show="isSelect == 1" class="result">
        <el-table :data="marketDetail" style="width: 100%">
          <el-table-column prop="name" label="编号" width="180"></el-table-column>
          <el-table-column prop="name" label="顾问名称" width="180"></el-table-column>
          <el-table-column  prop="name" label="时间"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { ImportMarket } from "api"
export default {
  data: () => ({
    isSelect: 0,
    marketDetail: [
      { name: "哈哈哈哈" },
      { name: "哈哈哈哈" },
      { name: "哈哈哈哈" },
      { name: "哈哈哈哈" },
      { name: "哈哈哈哈" }
    ]
  }),
  created () {
    this.queryDetailImMarket()
  },
  methods: {
    async queryDetailImMarket () {
      try {
        this.marketDetail = await ImportMarket.queryDetailImMarket(this.$route.query.id)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.info_box {
  padding-left: 0.6rem;
  padding-right: 0.27rem;
  .title {
    display: flex;
    color: #494a4e;
    font-size: 0.26rem;
    width: 100%;
    height: 0.8rem;
    align-items: center;
    border-bottom: 1px solid #e6eaee;
    .info_state {
      width: 0.65rem;
      height: 0.25rem;
      border-radius: 0.14rem;
      background: #1ae277;
      color: white;
      font-size: 0.14rem;
      line-height: 0.25rem;
      text-align: center;
    }
  }
  .filtet_tit {
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    color: #979797;
    border-bottom: 1px solid #e6eaee;
    .isSelect {
      color: #20b9ff;
      border-bottom: 2px solid #20b9ff;
    }
    div {
      width: 1.24rem;
      text-align: center;
      height: .6rem;
      line-height: .6rem;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    padding: .2rem .3rem;
    div {
      width: 5.05rem;
      margin-top: .3rem;
      font-size: .16rem;
      color: #979797;
      .code {
          color: #494A4E;
      }
    }
  }
  .bottom_image {
    width: 5.9rem;
    height: 3.03rem;
    border-radius: 4px  4px  0px  0px;
    margin:0 auto;
    background: #DDDDDD;
  }
}
</style>
