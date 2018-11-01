import Vue from "vue"

const baseUrl = "/CustomerServices.svc"
const urlDict = {
  // 登录
  login: `${baseUrl}/PCUserLogin`
}

export default {
  login (MobilePhone, Password) {
    return Vue.axios.post(urlDict.login, {MobilePhone, Password})
  }
}
