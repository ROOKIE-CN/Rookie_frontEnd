<template>
  <div>
    <public-header></public-header>
    <!-- <router-link to="/Fault">商家</router-link>
    <router-link to="/Home">商家</router-link> -->
    <router-view />
    <public-bottom></public-bottom>
  </div>
</template>
<script>
import publicHeader from "./components/public/header";
import publicBottom from "./components/public/bottom";
import Home from './components/Home/Home'
  export default {
    components:{
      Home,
      publicHeader,
      publicBottom
    }
  };
</script>
<style lang='stylus'  scoped>

</style>
