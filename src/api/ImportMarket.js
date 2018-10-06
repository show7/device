import Vue from "vue"

const urlDict = {
  // 查询
  queryImMarket: "/CampaignServices.svc/GetOEMCampaignList",
  // 创建
  createdImMarket: "/CampaignServices.svc/CreateOEMCampaign",
  // 更新
  updateImMarket: "/CampaignServices.svc/UpdateOEMCampaign",
  // 详情
  queryDetailImMarket: "/CampaignServices.svc/GetOEMCampaignInfo",
  // 结果
  queryResultImMarket: "/CampaignServices.svc/GetOEMCampaignResult"

}

export default {
  queryImMarket (DeviceBrandId, DeviceClassifyId, PageNumber) {
    return Vue.axios.post(urlDict.queryImMarket, {DeviceBrandId, DeviceClassifyId, PageNumber})
  },
  createdImMarket (data) {
    return Vue.axios.post(urlDict.createdImMarket, data)
  }
}
