<template>
  <div id="pay">
    <div class="container">
      <crumbs></crumbs>
      <div class="payLeft">
        <phone></phone>
      </div>
      <price></price>
      <advantage></advantage>
      <payList></payList>
      <security></security>
    </div>
  </div>
</template>

<script>
import crumbs from "./other/crumbs";
import phone from "./other/phone";
import price from "./other/price";
import advantage from "./other/advantage";
import payList from "./other/payList";
import security from "./other/security";
export default {
  name: "pay",
  components: {
    phone,
    crumbs,
    price,
    advantage,
    payList,
    security
  }
};
</script>

<style scoped lang="stylus">
#pay
  overflow hidden
  .container
    overflow hidden
    width 1200px
    margin 0 auto
    .payLeft
      width 312px
      float left
</style>
