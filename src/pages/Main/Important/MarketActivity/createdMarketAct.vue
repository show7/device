<template>
  <div>
     <div class="head_box">
      <div class="item blue">
        <span class="el-icon-arrow-left blue"></span>
        <span class="blue"  @click="$router.back()" >返回列表</span>
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
    <div class="created_box">
      <div class="cread_conter">
        <head-title name="主机厂信息" />
        <div class="form_box">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  >
            <div class="demo-ruleForm">
              <el-form-item label="活动主题"  prop="name"  required>
                <el-input v-model="ruleForm.CampaignName" class="input"></el-input>
              </el-form-item>
              <el-form-item label="活动时间" class="form_item" required>
                <el-date-picker v-model="value6" style="width:7.0rem" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </el-form-item>
            </div>
            <div class="demo-ruleForm">
              <el-form-item label="活动类别" prop="delivery" required>
                <el-input v-model="ruleForm.name" class="input"></el-input>
              </el-form-item>
              <el-form-item label="主推车型" class="form_item" prop="delivery" required>
                <el-input v-model="ruleForm.DeviceModelId" class="input"></el-input>
              </el-form-item>
              <el-form-item label="主机厂承担比例" class="form_item" prop="delivery" required>
                <el-input v-model="ruleForm.CostBearing" class="input"></el-input>
              </el-form-item>
            </div>
            <head-title name="活动内容/要求" />
            <div class="info">
              <el-form-item label="活动内容" prop="desc" required>
                <el-input class="textar" :rows="6" type="textarea" v-model="ruleForm.Note"></el-input>
              </el-form-item>
              <el-form-item label="活动要求"  style="margin-left: 1.40rem;" prop="desc" required>
                <el-input type="textarea" :rows="6" class="textar" v-model="ruleForm.Requirements"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {

      }
    }
  }
}
</script>

<style lang="less" scoped>
.created_box {
  padding: 0 0.6rem;
  .cread_conter {
    width: 100%;
    .form_box {
      margin-top: 0.2rem;
    }
    .demo-ruleForm {
      display: flex;
      // flex-wrap: wrap;
      .form_item {
        margin-left: 1.4rem;
      }
      .input {
        width: 3.50rem;
      }
    }
    .info {
      margin-top: 0.2rem;
      display: flex;
      .textar {
        width: 8.00rem;
        // height: 200px !important;
      }
    }
  }
}
</style>
