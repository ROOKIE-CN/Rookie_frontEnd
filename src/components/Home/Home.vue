<template>
  <div class="Hader">
    <Header>
      <template #middle><middle /></template>
      <template #right><right /></template>
    </Header>
    <Main />
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
import Header from './header/Header'
import middle from './header/middle'
import right from './header/right'
// import Main from './main/main'
export default {
  components:{
    Header,
    middle,
    right,
    Main : () => import("./main/main")
  }
}
</script>