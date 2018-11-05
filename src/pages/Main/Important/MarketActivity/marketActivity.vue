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
    </div>
    <div class="info">
      <div class="info_conter" v-for="(item, i) in tableData" :key="i" @click="$router.push({path: 'marketActInfo', query:{id: item.OEMCampaignId}})">
        <img  src="../../../../assets/imgs/timg.jpg" alt="">
        <div class="info_box">
          <div class="tit">{{item.CampaignName}}</div>
          <div class="state">
            <div class="state_item">{{item.CampaignStatusName}}</div>
            <div>{{item.StartDate}}</div>
            <div>{{item.CampaignTypeName}}</div>
            <div>展会</div>
          </div>
          <div class="detail">
            <div>主机厂承担{{item.CostBearing}}%</div>
            <div class="detail-left">{{item.DeviceModelName}}</div>
          </div>
          <div class="addre">上海市浦东区张江高科路123号</div>
        </div>
      </div>
    </div>
    <div class="pageChange">
      <el-pagination background layout="prev, pager, next" :total="1000" @current-change="changePage" @prev-click="changePage" :next-click="changePage"></el-pagination>
    </div>
  </div>
</template>
<script>
import { ImportMarket } from "api"
export default {
  data () {
    return {
      tableData: [],
      PageNumber: 1
    }
  },
  created () {
    this.queryImMarket()
  },
  methods: {
    async queryImMarket () {
      let state = this.$store.state.Account.userInfo
      try {
        let { OEMCampaignList } = await ImportMarket.queryImMarket(state.DeviceBrandId, state.DeviceClassifyId, this.PageNumber)
        this.tableData = OEMCampaignList
      } catch (err) {
        console.log(err)
      }
    },
    selectRow (e) {
      this.$router.push({path: "marketActInfo", query: {id: e.OEMCampaignId}})
    },
    changePage (e) {
      this.PageNumber = e
      this.queryImMarket()
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
.pageChange {
  display: flex;
  justify-content: center;
  margin-bottom: 2.125rem;
}
</style>
