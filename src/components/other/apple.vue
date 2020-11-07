<template>
  <div id="apple">
    <div class="appleTitle">
      <p>
        <span class="iconfont">&#xe626;</span>
        苹果安全小贴士
      </p>
    </div>
    <div class="appleContent">
      <p>
        苹果手机只要回复出厂设置，是无需担心数据泄露风险的，请放心回收。这是真的！美国FBI都破解不了。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "apple"
};
</script>

<style scoped lang="stylus">
#apple
  width 100%
  height 210px
  background #f7fdf2
  border 1px solid #cdf0ad
  box-sizing border-box
  text-align center
  .appleTitle
    height 80px
    line-height 80px
    p
      font-size 20px
      span
        font-size 30px
  .appleContent
    p
      width 200px
      font-size 14px
      margin 0 auto
</style>
