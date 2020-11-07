import Vue from "vue";
import Router from "vue-router";
import login from "../components/longin/login.vue";
import Home from "../components/Home/Home.vue"
import register from "../components/register/register.vue";
// 商品列表
import product from "../components/productList/product.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'App',
      component: () => import("../App.vue")
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/product",
      name: "product",
      component: product
    }
  ]
});
