<template>
  <div id="price">
    <p class="payMidTitle">
      评价报价
      <span class="iconfont">&#xe668;</span>
    </p>
    <p class="payMidPrice">
      <span>￥</span>
      2010
      <span>(定金金额:￥500)</span>
    </p>
    <div class="payMidButton">
      <el-row>
        <el-button type="success" round @click="repairBtn()"
          >预约维修</el-button
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "price",
  methods: {
    repairBtn() {
      alert("预约维修成功!!!");
    }
  }
};
</script>

<style scoped lang="stylus">
#price
  float left
  width: 576px
  height 380px
  background #fff
  box-sizing border-box
  border-left 1px solid #f5f5f5
  border-right 1px solid #f5f5f5
  padding 36px 0px 0px 36px
  .payMidTitle
    line-height 30px
    color #666
    span
      color #fff
      background #83d838
      border-radius 50%
      font-size 12px
      padding 4px
  .payMidPrice
    line-height 100px
    font-size 32px
    color #ff0101
    span:first-child
      font-size 26px
    span:last-child
      font-size 22px
      color #ff5b1f
  .payMidButton
    position relative
    button
      width 312px
      height 46px
      border-radius 10px
      color #fff
      font-size 18px
    span
      position absolute
      top 24px
      left 316px
</style>
