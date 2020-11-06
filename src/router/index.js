import Vue from "vue";
import Router from "vue-router";
import Fault from "../components/fault";
import Pay from "../components/pay";
import Artificial from "../components/artificial";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Fault",
      component: Fault
    },
    {
      path: "/pay",
      name: "Pay",
      component: Pay
    },
    {
      path: "/artificial",
      name: "Artificial",
      component: Artificial
    }
  ]
});
