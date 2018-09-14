import Vue from "vue"

const urlDict = {
  // 登录
  login: "/admin/login"
}

export default {
  login (data) {
    return Vue.axios.post(urlDict.login, data)
  }
}
