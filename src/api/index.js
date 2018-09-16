import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
// import router from "@/router"
// import store from "@/store"
import { Message } from "element-ui"

Vue.use(VueAxios, axios)

axios.defaults.baseURL = "/JX" // 本地
// axios.defaults.baseURL = "http://www.qunlss.com/JX" // 开发

Vue.axios.interceptors.response.use(response => {
  if (response.data.ReturnStatus == "E") {
    Message.error(response.data.ErrorMessage)

    // if (response.data.code === "10008") {
    //   router.push({
    //     name: "SignIn"
    //   })
    // }
    return Promise.reject(new Error(response.data.ErrorMessage))
  } else {
    return response.data
  }
}, err => {
  Message.error("服务器开小差啦")
  return Promise.reject(err)
})

axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // if (store.state.Account.userInfo.user) config.headers["refresh-token"] = store.state.Account.userInfo.refresh_token
  console.log(config)
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export { default as Account } from "./Account"
