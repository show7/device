<template>
  <div>
    <div class="head_box">
      <div class="item blue">
        <span class="el-icon-arrow-left blue"></span>
        <span class="blue" @click="$router.back()" >返回列表</span>
      </div>
      <div class="item" v-for="(item, i) in 2" :key="i">
        <span class="el-icon-circle-close blue"></span>
        <span class="gray" @click="updateImMarket(i)">{{i ? '转为以完成' : '取消活动'}}</span>
      </div>
      <!-- <div class="item">
        <span class="el-icon-circle-close blue"></span>
        <span class="gray" @click="ImportMarket.updateImMarket(updateDetailFinish)">转为已完成</span>
      </div> -->
    </div>
    <div class="info_box">
      <div class="title">
        <div>{{marketDetail.DeviceModelName}}（小程序）</div>
        <div class="info_state">{{marketDetail.CampaignStatusName}}</div>
      </div>
      <div class="filtet_tit">
        <div v-for="(item, i) in ['基本信息', '活动明细']" :class="isSelect == i ? 'isSelect' : ''" @click="isSelect = i" :key="i" >{{item}}</div>
      </div>
      <div class="info" v-show="isSelect == 0">
        <div>
          <span>活动主题：</span>
          <span class="code">{{marketDetail.CampaignName}}</span>
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
          <span>活动类别：</span>
          <span class="code">{{marketDetail.CampaignTypeName}}</span>
        </div>
        <div>
          <span>主推车型：</span>
          <span class="code">{{marketDetail.DeviceModelName}}</span>
        </div>
        <div>
          <span>主机厂承担比例：</span>
          <span class="code">{{marketDetail.CostBearing}}</span>
        </div>
        <div>
          <span>活动发布人：</span>
          <span class="code">{{marketDetail.EmployeeName}}</span>
        </div>
        <div>
          <span>发布时间：</span>
          <span class="code">00000001</span>
        </div>
        <div>
          <span>活动状态：</span>
          <span class="code">{{marketDetail.CampaignStatusName}}</span>
        </div>
        <div style="width:100%">
          <span>活动内容：</span>
          <span class="code">{{marketDetail.Note}}</span>
        </div>
        <div style="width:100%">
          <span >活动要求：</span>
          <span class="code">{{marketDetail.Requirements}}</span>
        </div>
        <div>
          <span>参与经销商数：</span>
          <span class="code">{{marketResult.DealerCount}}</span>
        </div>
        <div>
          <span>参与顾问数：</span>
          <span class="code">{{marketResult.SalesCount}}</span>
        </div>
        <div>
          <span>参与顾客数：</span>
          <span class="code">{{marketResult.CustomerCount}}</span>
        </div>
        <div >
          <span>新增商机数：</span>
          <span class="code">{{marketResult.NewOpportunityCount}}</span>
        </div>
        <div>
          <span>加热商机数：</span>
          <span class="code">{{marketResult.UpgradeOpportunityCount}}</span>
        </div>
        <div>
          <span>下单成交数：</span>
          <span class="code">{{marketResult.OrderCount}}</span>
        </div>
        <div style="width:100%">
          <div class="bottom_image"></div>
        </div>
      </div>
      <div v-show="isSelect == 1" class="result">
        <el-table :data="tradeResult" style="width: 100%">
          <el-table-column prop="ProvinceName" label="省市" width="180"></el-table-column>
          <el-table-column prop="DealerName" label="经销商名称" width="180"></el-table-column>
          <el-table-column  prop="StartDate" label="开始时间"> </el-table-column>
          <el-table-column  prop="EndDate" label="结束时间"> </el-table-column>
          <el-table-column  prop="SalesCount" label="参与顾问数"> </el-table-column>
          <el-table-column  prop="NewOpportunityCount" label="新增商机数"> </el-table-column>
          <el-table-column  prop="UpgradeOpportunityCount" label="加热商机数"> </el-table-column>
          <el-table-column  prop="OrderCount" label="下订单成交数"> </el-table-column>
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
    marketDetail: [],
    marketResult: {},
    tradeResult: [],
    updateDetail: {}
  }),
  created () {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      try {
        this.marketDetail = await ImportMarket.queryDetailImMarket(this.$route.query.id)
        this.marketResult = await ImportMarket.queryResultImMarket(this.$route.query.id)
        this.tradeResult = await ImportMarket.tradeResult(this.$route.query.id)
      } catch (err) {
        console.log(err)
      }
    },
    async updateImMarket (i) {
      try {
        this.updateDetail.CampaignStatusCode = i ? "100000001" : "100000002"
        this.updateDetail.CampaignId = this.$route.query.id
        if (!i) await this.$confirm("取消活动后，销售顾问无法将当前活动转为自己的活动")
        await ImportMarket.updateImMarket(this.updateDetail)
        this.getDetail()
        this.$message({type: "success", message: `${i ? "活动已完成" : "活动已取消"}`})
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
