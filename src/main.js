// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "./assets/font/login-font/iconfont.css";
import "./assets/font/pulice-header-font/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import "../src/assets/style/reset.css";
import qs from "qs";

import axios from "axios";

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://192.168.137.1:25575/";
Vue.config.productionTip = false;
Vue.prototype.qs = qs;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
