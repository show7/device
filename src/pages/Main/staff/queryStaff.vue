<template>
  <div>
    <div class="head_box">
      <div class="item blue">
        <span class="el-icon-arrow-left blue"></span>
        <span class="blue" @click="isCreated = true">新建</span>
      </div>
    </div>
    <div class="header_sra">
      <div>员工（200）</div>
      <el-input placeholder="请输入内容" class="search_inp"  prefix-icon="el-icon-search" v-model="srearch"></el-input>
    </div>
    <el-table class="table_box" @row-click="selectRow" :data="tableData" style="width: 100%">
      <el-table-column type="selection"  width="55"></el-table-column>
      <!-- <el-table-column  prop="date"  label="日期"   width="180" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]" :filter-method="filterHandler"> -->
      <!-- </el-table-column> -->
      <el-table-column  prop="name"  label="编号"> </el-table-column>
      <el-table-column  prop="name"  label="手机号"> </el-table-column>
      <el-table-column  prop="name"  label="姓名"> </el-table-column>
      <el-table-column  prop="name"  label="身份证号"> </el-table-column>
      <el-table-column  prop="name"  label="角色"> </el-table-column>
      <el-table-column  prop="name"  label="性别"> </el-table-column>
      <el-table-column  prop="name"  label="出身日期"> </el-table-column>
      <el-table-column  prop="name"  label="入行日期"> </el-table-column>
      <el-table-column  prop="name"  label="入职日期"> </el-table-column>
      <el-table-column  prop="name"  label="离职日期"> </el-table-column>
      <el-table-column  prop="name"  label="状态"> </el-table-column>
      <el-table-column  prop="name"  label="所属业务小组"> </el-table-column>
      <el-table-column  prop="name"  label="平台使用截止日期"> </el-table-column>
      <el-table-column  prop="name"  label="创建日期"> </el-table-column>
    </el-table>
    <el-dialog title="新增员工" width="25%" :visible.sync="isCreated">
      <el-form :model="form">
        <el-form-item class="form_item"  >
          <el-input prefix-icon="el-icon-mobile-phone" placeholder="请输入用户手机号" v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="created">
        <el-button  type="primary" @click="dialogFormVisible = false">关联微信用户</el-button>
      </div>
      <div style="text-aglin:center">如果关联微信用户没有成功，请提醒员工在51销冠小程序上我的 & #8594注册，成为CRM用户</div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      srearch: "",
      isCreated: false,
      tableData: [],
      form: {
        name: ""
      }
    }
  },
  methods: {
    selectRow () {
      console.log(1)
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
.form_item {
  margin: auto;
  display: flex;
  justify-content: center;
}
.created {
  display: flex;
  justify-content: center;

  margin-top: 0.49rem;
  margin-bottom: 0.45rem;
  button {
    width: 2.08rem;
    height: 0.8rem;
    font-size: 0.16rem;
  }
}
</style>
