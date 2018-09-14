import { default as types } from "./mutation-types"
export default {
  [types.SET_USER_INFO] (state, v) {
    state.userInfo = v
  }
}
