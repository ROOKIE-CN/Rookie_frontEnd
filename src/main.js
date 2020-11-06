
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import axios from 'axios'
// import VueAxios from 'vue-axios'
axios.defaults.baseURL = "http://192.168.137.1:25575/"
// Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;

import './assets/style/reset.css'


import "./assets/font/login-font/iconfont.css";
import "./assets/font/pulice-header-font/iconfont.css";
import qs from "qs";
Vue.prototype.qs = qs;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
