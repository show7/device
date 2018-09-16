import Vue from "vue"

const urlDict = {
  // 登录
  login: "/CustomerServices.svc/AppUserLogin"
}

export default {
  login (MobilePhone, Password) {
    return Vue.axios.post(urlDict.login, {MobilePhone, Password})
  }
}
