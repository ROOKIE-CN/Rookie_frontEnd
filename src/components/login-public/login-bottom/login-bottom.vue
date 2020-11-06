<template>
  <div class="bottom">
    <p class="LJ">
      <span>关于我们</span> | <span>安全保障</span> | <span>帮助中心</span>
    </p>
    <p class="LK">
      <span>友情链接：</span> <span>北京二手手机 </span> |
      <span> 北京二手手机维修 </span> | <span> 信用相机 </span>|
      <span>二手手机</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bottom {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  height: 66px;
  width: 100%;
}
.bottom > .LJ {
  word-spacing: 0.05rem;
}
.bottom > .LJ > span:hover {
  text-decoration: underline;
}
.bottom > .LK {
  margin-top: 10px;
  color: #ccc;
}
.bottom > .LK > span:hover {
  text-decoration: underline;
}
</style>
