<template>
  <div class="Hader">
    <Header>
      <template #middle><middle /></template>
      <template #right><right /></template>
    </Header>
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
import Header from './head/Header'
import middle from './head/middle'
import right from './head/right'
export default {
  components:{
    Header,
    middle,
    right
  }
}
</script>