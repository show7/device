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
      <div class="item" @click="created()">
        <span class="el-icon-circle-close blue"></span>
        <span class="gray">保存并发布</span>
      </div>
    </div>
    <div class="created_box">
      <div class="cread_conter">
        <head-title name="主机厂信息" />
        <div class="form_box">
          <el-form :model="data" :rules="rules" ref="ruleForm"  >
            <div class="demo-ruleForm">
              <el-form-item label="活动主题"  prop="ruleForm.CampaignName"  >
                <el-input v-model="data.ruleForm.CampaignName" class="input"></el-input>
              </el-form-item>
              <el-form-item label="活动时间" prop="activeTime" class="form_item" >
                <el-date-picker v-model="data.activeTime" style="width:7.0rem" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </el-form-item>
            </div>
            <div class="demo-ruleForm">
              <el-form-item label="活动类别" prop="ruleForm.CampaignTypeCode" >
                <el-select v-model="data.ruleForm.CampaignTypeCode" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in CampaignTypeCodes"
                    :key="item"
                    :label="item"
                    :value="index + 1">
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item label="主推车型" class="form_item" prop="delivery" required>
                <el-input v-model="data.ruleForm.DeviceModelId" class="input"></el-input>
              </el-form-item> -->
              <el-form-item label="主机厂承担比例" class="form_item" prop="ruleForm.CostBearing" >
                <el-input v-model="data.ruleForm.CostBearing" class="input"></el-input>
              </el-form-item>
            </div>
            <head-title name="活动内容/要求" />
            <div class="info">
              <el-form-item label="活动内容" prop="ruleForm.Note">
                <el-input class="textar" :rows="6" type="textarea" v-model="data.ruleForm.Note"></el-input>
              </el-form-item>
              <el-form-item label="活动要求"  style="margin-left: 1.40rem;" prop="ruleForm.Requirements" >
                <el-input type="textarea" :rows="6" class="textar" v-model="data.ruleForm.Requirements"></el-input>
              </el-form-item>
            </div>
          </el-form>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CampaignTypeCode } from "@/assets/js/baseData"
import { ImportMarket } from "api"
const CreatedForm = function () {
  Object.assign(this, {
    ruleForm: {
      CampaignName: "", // 活动名称
      CampaignTypeCode: "", // 活动类型
      StartDate: "", // 开始时间
      EndDate: "", // 结束时间
      CampaignStatusCode: 1, // 活动状态
      CostBearing: "", // 费用承担比例
      Note: "", // 活动内容
      Requirements: "" // 活动要求
    },
    activeTime: [] // 开始时间结束时间的数组
  })
}
export default {
  data () {
    return {
      data: new CreatedForm(),
      CampaignTypeCodes: [],
      rules: {
        "ruleForm.CampaignName": [
          { required: true, message: "请输入活动名称", trigger: "change" }
        ],
        "ruleForm.CampaignTypeCode": [
          { required: true, message: "请选择活动类型", trigger: "change" }
        ],
        activeTime: [
          {
            required: true,
            type: "array",
            message: "请选择活动时间",
            trigger: "change"
          }
        ],
        "ruleForm.CostBearing": [
          { required: true, message: "请选择费用承担比例", trigger: "change" }
        ],
        "ruleForm.Note": [
          { required: true, message: "请输入活动内容", trigger: "change" }
        ],
        "ruleForm.Requirements": [
          { required: true, message: "请输入活动要求", trigger: "change" }
        ]
      }
    }
  },
  watch: {
    "data.activeTime" (n) {
      console.log(n)
      this.data.ruleForm.StartDate = n[0]
      this.data.ruleForm.EndDate = n[1]
    }
  },
  created () {
    this.CampaignTypeCodes = CampaignTypeCode
  },
  methods: {
    async created () {
      let state = this.$store.state.Account.userInfo
      this.data.ruleForm.DeviceClassifyId = state.DeviceClassifyId
      this.data.ruleForm.DeviceBrandId = state.DeviceBrandId
      this.data.ruleForm.DeviceModelId = state.DeviceModelId
      this.data.ruleForm.EmployeeId = state.PCUserId
      try {
        await this.$refs["ruleForm"].validate()
        let res = await ImportMarket.createdImMarket(this.data.ruleForm)
        console.log(res)
        if (res.ErrorType) {
          this.$message({message: "创建失败"})
        } else {
          this.$message({message: "创建成功", type: "success"})
          this.$router.push("marketActivity")
        }
      } catch (err) {
        console.log(err)
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
        width: 3.5rem;
      }
    }
    .info {
      margin-top: 0.2rem;
      display: flex;
      .textar {
        width: 8rem;
        // height: 200px !important;
      }
    }
  }
}
</style>
