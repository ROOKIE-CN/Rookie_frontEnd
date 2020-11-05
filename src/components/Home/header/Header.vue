<template>
  <div class="header">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3" >
        <div class="grid-content bg_logo">
          <a href="#">
            <img src="../../../assets/images/logo.png" alt="">
          </a>
        </div>
        </el-col>
      <el-col :span="3" :offset="1">
        <div class="grid-content">
            <!-- <middle /> -->
            <slot name="middle"></slot>
        </div>
      </el-col>
      <el-col :span="5" :offset="4" class="">
        <div class="grid-content ">
          <slot name="right">
            <!-- <right /> -->
          </slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {
  },
}
</script>

<style lang="stylus" scoped>
.h_input >>> .el-input__inner
  height 56px
  width 300px
  border-radius 0
.header
  font-size 14px
  margin 15px 0
.grid-content
.bg_logo
  height 56px
  width 100%
  min-width 150px
  max-width 168px
  img
    width 100%
    min-width 150px
    max-width 168px


</style>