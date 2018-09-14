<template>
    <div class="timeFilter sale_name" :class="border ? 'border' : ''">
        <div v-for="(item,index) in filterTime" :key="index" :class="`${isTimeIndex == index ? 'isSelect' : ''} ${isClass}`" @click='isSleectTime(index)'>{{item}}</div>
    </div>
</template>
<script>
export default {
  /**
     * 筛选组件
     * 接受一个过滤条件数组 filterTime
     * 接受一个大小仅small big isClass
     * 返回选择数组项的下标 getIndex
     */
  name: "top-tool-bar",
  props: {
    filterTime: {
      type: Array,
      default: () => ["选项一", "选项二", "选项三"]
    },
    isClass: {
      default: () => "small"
    },
    border: {
      default: () => false
    }
  },
  data () {
    return {
      isTimeIndex: 0
    }
  },
  methods: {
    isSleectTime (i) {
      this.isTimeIndex = i
      this.$emit("getIndex", i)
    }
  }
}
</script>
<style scoped>
.timeFilter {
  display: flex;
  font-size: 16px;
  font-family: Avenir Heavy;
  margin: 17px 0;
}
.timeFilter>.big {
  padding: 12px 28px;
}
.timeFilter>.small {
    padding: 5px 15px;
}
.isSelect {
  background: rgba(44, 150, 255, 0.28);
  box-shadow: 0 0 6px #2c96ff;
  color: #1b3ded;
}
.border{
  border:1px solid rgba(112,112,112,0.28);
  border-radius: 5px;
}
.border>div {
  border-right: 1px solid rgba(112,112,112,0.28);
}
.border>div:nth-last-child(1) {
  border:none;
}
</style>
