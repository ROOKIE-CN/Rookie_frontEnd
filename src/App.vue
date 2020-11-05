<template>
  <div>
    <!-- <public-header></public-header> -->
    <router-view />
    <!-- <public-bottom></public-bottom> -->
  </div>
</template>
<script>
import publicHeader from "./components/public/header";
import publicBottom from "./components/public/bottom";
export default {
  components: {
    publicHeader,
    publicBottom
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
