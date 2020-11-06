<template>
  <div id="advantage">
    <ul>
      <li v-for="(value, index) in payRightList" :key="index">
        <span class="iconfont" v-html="value.icon"></span>
        {{ value.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "advantage",
  data() {
    return {
      payRightList: [
        { icon: "&#xe611;", text: "价格公道" },
        { icon: "&#xe611;", text: "服务快捷" },
        { icon: "&#xe611;", text: "隐私保护" },
        { icon: "&#xe611;", text: "服务快捷" }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
#advantage
  float left
  width 312px
  height 380px
  background #fff
  box-sizing border-box
  padding 40px 20px 0px 20px
  ul
    width 100%
    overflow hidden
    li
      width 50%
      float left
      text-align center
      line-height 30px
      font-weight 100
      span
          color: #83d838;
          font-size: 18px;
          margin-right: 2px;
</style>
