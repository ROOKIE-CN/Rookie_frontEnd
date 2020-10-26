import { createRouter, createWebHistory } from "vue-router";
import header from "../components/Home/Header.vue";
import home from "../components/Home/Home.vue";
import Login from "../components/longin/login";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/header",
    name: "header",
    component: header,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
