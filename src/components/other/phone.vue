<template>
  <div id="phone">
    <img
      class="phoneImg"
      src="https://shopstatic.vivo.com.cn/vivoshop/commodity/83/10005883_1601437315978_250x250.png.webp"
      alt
    />
    <p class="phoneName" >8848钛合金手机</p>
    <p>
      <router-link to="/product">重选机型</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "phone"
};
</script>

<style scoped lang="stylus">
#phone
  width 100%
  height 380px
  background #fff
  text-align center
  img
    box-sizing border-box
    height 200px
    margin 0 auto
    padding 40px 70px 0
    display block
  .phoneName
    font-size 18px
    font-weight bold
    line-height 40px
  p
    a
      color #8ddb4c
      line-height 100px
      font-size 16px
</style>
