
<template>
  <div class="add">
    <!-- element_ui测试 -->
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
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

<style scoped>

</style>