import Vue from "vue";
import Router from "vue-router";
import login from "../components/longin/login.vue";
import register from "../components/register/register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    }
  ]
});
