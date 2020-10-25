<template>
  <div>
    <!-- element_ui测试 -->
    <div class="element_ui">
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    <!-- stylus测试 -->
    <div class="stylus">
      1231231111111111111111111111
    </div>
    <!-- 子组件 -->
    <Header />
  </div>
</template>

<script>
import Header from './Header'
  export default {
    methods: {

    },
    components: {
      Header
    }
  };
</script>

<style lang="stylus" scoped>
.stylus
  font-size 100px
</style>