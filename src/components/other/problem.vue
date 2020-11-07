<template>
  <div id="problem">
    <!-- 问题部分 -->
    <div class="faultCondition">
      <h2>功能性问题</h2>
      <div
        v-for="(value, indexOne) in buttonTextContent"
        :key="indexOne"
        @click="buttonColor(value, indexOne)"
        :class="value.flg ? 'active' : ''"
      >
        {{ value.content }}
      </div>
    </div>

    <!-- 预约维修按钮 -->
    <div class="problemButton">
      <router-link to="/pay">预约维修</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "attribute",
  data() {
    return {
      buttonTextContent: ""
    };
  },
  mounted() {
    // 请求问题数据
    let arr = null;
    this.$axios
      .get("/api/model/malfunction/findAll")
      .then(res => {
        arr = res.data.data.list;
        console.log(arr);
        for (let i of arr) {
          i.flg = false;
        }
        arr.flg = !arr.flg;
      })
      .catch(err => {
        console.log(err);
      });
    setTimeout(() => {
      this.buttonTextContent = arr;
    }, 600);
  },
  methods: {
    buttonColor(value) {
      value.flg = !value.flg;
    }
  }
};
</script>

<style scoped lang="stylus">
#problem
  background #fff
  width 100%
  padding 30px 5%
  box-sizing border-box
  border-radius 10px
  margin-top 20px
  .faultCondition
    float left
    h2
      height 50px
    div
      width 48%
      height 46px
      line-height 46px
      text-align center
      margin 0 1% 10px
      border 1px solid #e7e7e7
      background #ffffff
      border-radius 5px
      color #ccc
      padding 0 55px
      /* 点击之后边框不变色 */
      outline none
      box-sizing border-box
      float left
      cursor pointer
      /* 文字不被选中 */
      user-select none
    div:hover
      border 1px solid #83d838
      color #83d838
    .active
      color #83d838 !important
      border 1px solid #83d838 !important
  .problemButton
    width 100%
    overflow hidden
    a
      width 310px
      height 48px
      line-height 48px
      color #fff
      display block
      background #67C23A
      border-radius 10px
      font-size 18px
      font-weight 100
      margin 50px auto 0
      text-align center
    a:hover
      opacity 0.8
</style>
