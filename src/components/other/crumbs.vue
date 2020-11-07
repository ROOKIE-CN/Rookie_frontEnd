<template>
  <div id="crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>
        <router-link to="/">首页</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>预约维修</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "crumbs"
};
</script>

<style scoped lang="stylus">
#crumbs
  div
    height 76px
    line-height 76px
</style>
