<template>
  <div id="program">
    <div class="programImg">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603357808992&di=76731ebb9b52b908894379cc03ea3112&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fhn%2Fpics%2Fhv1%2F236%2F36%2F2290%2F148916666.jpg"
        alt
      />
    </div>
    <div class="programText">
      <h3>扫码关注小程序</h3>
      <p>更多活动更高价</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "program"
};
</script>

<style scoped lang="stylus">
#program
  width: 100%;
  margin-top: 30px;
  height: 170px;
  background: #fff;
  overflow: hidden;
  border-radius 10px
  .programImg
    padding 10px 0 10px 10px;
    float left
    img
      width 150px
      height 150px
  .programText
    float left
    h3
      margin-top 64px
      line-height 30px
    p
      line-height 24px
      color #a8a8a8
</style>
