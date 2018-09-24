<template>
    <div class="page_box">
        <div class="page_conter">
            <div>共{{total}}条</div>
            <div class="pageSize">
                <div>每页</div>
                <div class="select" @click="isShowSelect = !isShowSelect">
                    {{pageSize[select]}}条
                    <div :class="isShowSelect ? 'selectShow' : 'selectClose'" >
                        <div  @click="changeSize(index)" :value="index"  v-for="(item,index) in pageSize" :key="index">{{item}}</div>
                    </div>
                </div>
            </div>
            <div class="pageIndex_box">
                <div @click="upperPage">上一页</div>
                <div class="pageIndex">
                    <div v-for="(item,index) in currentMaxPage" :key="index" class="transition" :class="pageIndex == item ? 'isBlue' : ''" v-if="item > minNum && item <= maxNum" @click="directPage(item)">{{item}}</div>
                </div>
                <div @click="nextPage">下一页</div>
            </div>
        </div>
    </div>
</template>
<script>
/**
 * 分页组件
 * 接受一个total 总条数
 * 返回一个changPage方法
 */
export default {
  name: "page-ination",
  props: {
    total: {
      default: 100
    }
  },
  data () {
    return {
      pageSize: [10, 20, 40, 100],
      select: 0,
      isShowSelect: false,
      changePage: "",
      maxNum: 0,
      minNum: 0,
      pageIndex: 1,
      isNext: true,
      currentMaxPage: 0,
      isUpdate: ""
    }
  },
  // 这里要等到组件接收到值在搞事情
  mounted () {

    // this.changeNum(1);
  },
  // 个人理解  因为初始值以及挂载的值都是 data里面默认的值 所以要等到父组件挂载完成后，给子组件传值，这个时候 子组件就会更新 所以在这里调用
  updated () {
    // console.log(this.currentMaxPage)
    // if(!this.isUpdate) {
    this.changeNum()
    // }
  },
  methods: {
    // 上一页
    upperPage () {
      this.isNext = true
      if (this.pageIndex <= 1) return
      this.pageIndex--
      this.changeNum()
      this.isSendPage()
    },
    // 下一页
    nextPage () {
      // 判断还有没有必要继续分页
      if (this.isNext) {
        ++this.pageIndex
        this.changeNum()
        this.isSendPage()
      }
    },
    // 直接点击页码
    directPage (num) {
      this.pageIndex = num
      this.changeNum()
      this.isSendPage()
    },
    // 页数变化
    changeSize (i) {
      this.select = i
      // 重新更换页数之后页码回来
      this.pageIndex = 1
      this.isNext = true
      this.changeNum()
      this.isSendPage()
    },
    // 改变现实的页码
    changeNum (e) {
      this.isUpdate = e
      // 判断是否能整除
      let a = this.total % this.pageSize[this.select]
      let b = parseInt(this.total / this.pageSize[this.select])
      // 如果不能再商 上面 加一 就是最大的页码
      let c = a ? b + 1 : b
      this.currentMaxPage = c
      // 最大展示
      this.maxNum = c - 5 > 0 ? this.pageIndex + 4 : c
      if (c <= this.maxNum) {
        this.maxNum = c
      }
      // 最小
      if (this.maxNum - 5 > 0) {
        this.minNum = this.maxNum - 5
      } else {
        this.minNum = 0
      }
    },
    // 往父组件传值
    isSendPage () {
      this.$emit("changPage", {
        page_index: this.pageIndex,
        page_size: this.pageSize[this.select]
      })
      if (this.pageIndex >= this.currentMaxPage) {
        this.isNext = false
      }
    }
  }
}
</script>
<style scoped>
.page_box {
  margin-top: .3rem;
  margin-bottom: 2rem;
}
.page_conter {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.page_conter > div {
  margin-left: .1rem;
}
.pageSize {
  display: flex;
  align-items: center;
}
.pageSize > div:nth-child(1) {
  margin-right: .1rem;
}
.select {
  width: .8rem;
  height: .3rem;
  border-radius: .05rem;
  position: relative;
  box-shadow: 0 0 5px #ccc;
  text-align: center;
  line-height: .3rem;
}
.select > div {
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-bottom: none;
  border-top: none;
  top: .35rem;
  background: white;
  height: 0;
  overflow: hidden;
}
.select > div > div {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.selectShow {
  height: 1.24rem !important;
  transition: height 0.2s;
}
.selectClose {
  height: 0 !important;
  transition: height 0.2s;
}
.pageIndex_box {
  display: flex;
  margin-right: .1rem;
}
.pageIndex_box > div {
  margin-left: .2rem;
}
.pageIndex {
  display: flex;
}

.pageIndex > div {
  margin-left: .15rem;
}
.isBlue {
  color: #1b3ded;
}
.transition{
    transition: all 0.5s;
}
</style>
