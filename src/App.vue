<template>
  <div>
    <home />
    <!-- <login /> -->
    <router-link to="/Login"></router-link>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import login from './components/longin/login'
import home from './components/Home/Home'
export default {
  components:{
    home,
    // login
  }
}
</script>