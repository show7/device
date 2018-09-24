<template>
  <div>
    <div class="head_box">
      <div class="item blue">
        <span class="el-icon-arrow-left blue"></span>
        <span class="blue">商机分配</span>
      </div>
      <div class="item">
        <span class="el-icon-circle-close blue"></span>
        <span class="gray">导出</span>
      </div>
      <div class="item">
        <span class="el-icon-circle-close blue"></span>
        <span class="gray">清楚筛选条件</span>
      </div>
      <div class="item">
        <span class="el-icon-circle-close blue"></span>
        <span class="gray" @click="$router.push('createdMarketAct')">新建主机厂活动</span>
      </div>
    </div>
    <el-table class="table_box" @row-click="selectRow" :data="tableData" style="width: 100%">
      <el-table-column type="selection"  width="55"></el-table-column>
      <!-- <el-table-column  prop="date"  label="日期"   width="180" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]" :filter-method="filterHandler"> -->
      <!-- </el-table-column> -->
      <el-table-column  prop="name"  label="编号"> </el-table-column>
      <el-table-column  prop="name"  label="活动主题"> </el-table-column>
      <el-table-column  prop="name"  label="开始时间"> </el-table-column>
      <el-table-column  prop="name"  label="结束时间"> </el-table-column>
      <el-table-column  prop="name"  label="活动类别"> </el-table-column>
      <el-table-column  prop="name"  label="主推车型"> </el-table-column>
      <el-table-column  prop="name"  label="主机厂承担比例"> </el-table-column>
      <el-table-column  prop="name"  label="活动状态"> </el-table-column>
      <el-table-column  prop="name"  label="参与经销商数"> </el-table-column>
      <el-table-column  prop="name"  label="参与顾问数"> </el-table-column>
      <el-table-column  prop="name"  label="参与客户数"> </el-table-column>
      <el-table-column  prop="name"  label="新增商机数"> </el-table-column>
      <el-table-column  prop="name"  label="加热商机数"> </el-table-column>
      <el-table-column  prop="name"  label="下订单成交数"> </el-table-column>
      <el-table-column  prop="name"  label="发布时间"> </el-table-column>
  </el-table>
  </div>
</template>
<script>
import { ImportMarket } from "api"
export default {
  data () {
    return {
      tableData: [
        { name: "哈哈哈哈" },
        { name: "哈哈哈哈" },
        { name: "哈哈哈哈" },
        { name: "哈哈哈哈" },
        { name: "哈哈哈哈" },
        { name: "哈哈哈哈" },
        { name: "哈哈哈哈" },
        { name: "哈哈哈哈" }
      ],
      PageNumber: 1
    }
  },
  methods: {
    queryImMarket () {
      ImportMarket.queryImMarket().then(res => {
        console.log(res)
      })
    },
    selectRow () {
      this.$router.push('marketActInfo')
    }
  }
}
</script>
<style lang="less" scoped>
.page_name {
  color: #494A4E;

  display: flex;
  justify-content: space-between;
  // height: .6rem;
  padding: 20px 0;
  align-items: center;
  font-family:MicrosoftYaHei;
  .tit {
    margin-left: .3rem;
      font-size: .2rem;
  }
  .search {
    margin-right: 2.1rem;
    height: .4rem;
    width: 4.36rem;
  }
}
.table_box {
  // margin-top: 
}

</style>
