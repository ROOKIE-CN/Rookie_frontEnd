<template>
  <div id="payList">
    <ul>
      <li v-for="(value, index) in payList" :key="index">
        {{ value.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "payList",
  data() {
    return {
      payList: [
        { text: "大陆国行" },
        { text: "全网通" },
        { text: "纯白色" },
        { text: "6G+128G" },
        { text: "正常开机进入桌面" },
        { text: "通话正常" },
        { text: "无维修情况" },
        { text: "指纹功能正常" },
        { text: "拍照摄影正常" },
        { text: "充电正常" },
        { text: "无线正常" },
        { text: "显示完美，无瑕疵" },
        { text: "屏幕完美，无划痕" },
        { text: "全新包装未拆封" },
        { text: "机身无进水" },
        { text: "机身无弯曲" },
        { text: "触摸功能正常" },
        { text: "账号可退出" },
        { text: "光线、距离感应正常" },
        { text: "振动正常" }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
#payList
  margin-top 380px
  background #fff
  border-top 1px solid #f5f5f5
  border-bottom 1px solid #f5f5f5
  padding 30px 20px 30px 20px
  ul
    overflow hidden
    li
      float left
      border 1px solid #ccc
      padding 5px
      color #ccc
      border-radius 20px
      margin 5px 10px
      user-select none
      cursor pointer
    li:hover
      color #8ddb4c
      border 1px solid #8ddb4c
</style>
