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
        <head-title name="基本信息" />
        <div class="form_box">
          <el-form :model="data" :rules="rules" ref="ruleForm"  >
            <div class="demo-ruleForm">
              <el-form-item label="手机号"  prop="ruleForm.CampaignName"  >
                <el-input v-model="data.ruleForm.CampaignName" class="input"></el-input>
              </el-form-item>
              <el-form-item label="姓名"  class="form_item"  prop="ruleForm.CampaignName"  >
                <el-input v-model="data.ruleForm.CampaignName" class="input"></el-input>
              </el-form-item>
              <el-form-item label="身份证号"  class="form_item"  prop="ruleForm.CampaignName"  >
                <el-input v-model="data.ruleForm.CampaignName" class="input"></el-input>
              </el-form-item>
            </div>
            <div class="demo-ruleForm">
              <el-form-item label="角色"  prop="ruleForm.CampaignTypeCode" >
                <el-select v-model="data.ruleForm.CampaignTypeCode" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in CampaignTypeCodes"
                    :key="item"
                    :label="item"
                    :value="index + 1">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="性别"  class="form_item" prop="ruleForm.CampaignTypeCode" >
                <el-select v-model="data.ruleForm.CampaignTypeCode" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in ['男', '女']"
                    :key="item"
                    :label="item"
                    :value="index + 1">
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item label="主推车型" class="form_item" prop="delivery" required>
                <el-input v-model="data.ruleForm.DeviceModelId" class="input"></el-input>
              </el-form-item> -->
              <el-form-item label="出生日期" class="form_item" prop="ruleForm.CostBearing" >
                <el-date-picker v-model="data.activeTime" style="width:7.0rem" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </el-form-item>
            </div>
            <head-title name="职位信息" />
            <div class="demo-ruleForm">
              <el-form-item label="入行日期"  prop="ruleForm.CampaignName"  >
                <el-date-picker v-model="data.activeTime" style="width:7.0rem" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="入职日期" class="form_item" prop="ruleForm.CampaignName"  >
               <el-date-picker v-model="data.activeTime" style="width:7.0rem" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </el-form-item>
            </div>
            <div class="demo-ruleForm">
              <el-form-item label="离职日期"   prop="ruleForm.CampaignName"  >
                <el-date-picker v-model="data.activeTime" style="width:7.0rem" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="状态" class="form_item" prop="ruleForm.CampaignTypeCode" >
                <el-select v-model="data.ruleForm.CampaignTypeCode" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in CampaignTypeCodes"
                    :key="item"
                    :label="item"
                    :value="index + 1">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所属业务小组" class="form_item" prop="ruleForm.CampaignTypeCode" >
                <el-select v-model="data.ruleForm.CampaignTypeCode" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in ['男', '女']"
                    :key="item"
                    :label="item"
                    :value="index + 1">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="demo-ruleForm">
              <el-form-item label="平台使用截止日期" prop="delivery" required>
                <el-date-picker v-model="data.activeTime" style="width:7.0rem" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="创建日期" class="form_item" prop="ruleForm.CostBearing" >
                <el-date-picker v-model="data.activeTime" style="width:7.0rem" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
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
    activeTime (n) {
      this.ruleForm.StartDate = n[0]
      this.ruleForm.EndDate = n[1]
    }
  },
  created () {
    this.CampaignTypeCodes = CampaignTypeCode
  },
  methods: {
    created () {
      let state = this.$store.state.Account.userInfo
      this.data.ruleForm.DeviceClassifyId = state.DeviceClassifyId
      this.data.ruleForm.DeviceBrandId = state.DeviceBrandId
      this.data.ruleForm.DeviceModelId = state.DeviceModelId
      this.data.ruleForm.EmployeeId = state.PCUserId
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          ImportMarket.createdImMarket(this.data.ruleForm).then(res => {
            console.log(res)
          })
        }
      })
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
