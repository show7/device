import Vue from "vue"

const baseUrl = "/CampaignServices.svc"
const urlDict = {
  // 查询
  queryImMarket: `${baseUrl}/GetOEMCampaignList`,
  // 创建
  createdImMarket: `${baseUrl}/CreateOEMCampaign`,
  // 更新
  updateImMarket: `${baseUrl}/UpdateOEMCampaign`,
  // 详情
  queryDetailImMarket: `${baseUrl}/GetOEMCampaignInfo`,
  // 结果
  queryResultImMarket: `${baseUrl}/GetOEMCampaignResult`,
  // 市场活动接口经销商
  tradeResult: `${baseUrl}/GetOEMCampaignDealerResult`

}

export default {
  queryImMarket (DeviceBrandId, DeviceClassifyId, PageNumber) {
    return Vue.axios.post(urlDict.queryImMarket, {DeviceBrandId, DeviceClassifyId, PageNumber})
  },
  createdImMarket (data) {
    return Vue.axios.post(urlDict.createdImMarket, data)
  },
  queryDetailImMarket (OEMCampaignId) {
    return Vue.axios.post(urlDict.queryDetailImMarket, {OEMCampaignId})
  },
  queryResultImMarket (OEMCampaignId) {
    return Vue.axios.post(urlDict.queryResultImMarket, {OEMCampaignId})
  },
  updateImMarket (data) {
    return Vue.axios.post(urlDict.updateImMarket, data)
  },
  tradeResult (OEMCampaignId) {
    return Vue.axios.post(urlDict.tradeResult, {OEMCampaignId})
  }
}
