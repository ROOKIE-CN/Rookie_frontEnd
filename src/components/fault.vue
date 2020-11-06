<template>
  <div id="fault">
    <div class="container">
      <crumbs></crumbs>
      <div class="problemLeft">
        <phone></phone>
        <apple></apple>
        <program></program>
        <router-view />
      </div>
      <div class="problemRight">
        <attribute></attribute>
        <problem></problem>
      </div>
    </div>
  </div>
</template>

<script>
import crumbs from "./other/crumbs";
import phone from "./other/phone";
import apple from "./other/apple";
import program from "./other/program";
import attribute from "./other/attribute";
import problem from "./other/problem";
export default {
  name: "fault",
  components: {
    phone,
    apple,
    program,
    crumbs,
    attribute,
    problem
  }
};
</script>

<style scoped lang="stylus">
#fault
  overflow: hidden;
  .container
    overflow hidden
    width 1200px
    margin 0 auto
    .problemLeft
      width 312px
      float left
    .problemRight
      float right
      width 866px
</style>
