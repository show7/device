import { Message } from "element-ui"

/**
     * 滚动分页方法
     * 接受四个参数
     * 滚动的元素 id （也就是overflow属性为sroll 的id）
     * 页码
     * 页数
     * 分页总共的页码
     *
     * 返回一个promise
     * resolve 携带分页参数
     * reject 携带停止分页
     */

export const pageInation = (elemId, pageIndex, pageSize, totalCount) => {
  return new Promise((resolve, reject) => {
    let clientHeight = document.getElementById(elemId).clientHeight // 可见区域高度
    let scrollTop2 = document.getElementById(elemId).scrollTop // 滚动条到顶部的距离
    let scrollHeight = document.getElementById(elemId).scrollHeight // 整个页面高度
    if (scrollTop2 + clientHeight === scrollHeight && Number(pageIndex) * Number(pageSize) < Number(totalCount)) {
      resolve(++pageIndex)
    }
    // 如果分页到底
    if (Number(pageIndex) * Number(pageSize) >= Number(totalCount)) {
      // reject 需要传入Error对象
      if (scrollTop2 + clientHeight === scrollHeight) {
        Message.error("已经是最后一条")
      }
      resolve(false)
    }
  })
}
