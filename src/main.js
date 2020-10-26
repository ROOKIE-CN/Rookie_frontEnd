import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/style/reset.css'


import axios from 'axios'
axios.defaults.baseURL = "http://192.168.137.1:25575/"
import VueAxios from 'vue-axios'
// import axios from "axios";
// import api from './http/api';
// import http from './http/http';
// // axios 拦截器
// import './http/axios'

// // 对后端接口 进行全局注册
// Vue.prototype.$api = api;
// // 对请求方式 进行全局注册
// Vue.prototype.$http = http;
createApp(App).use(store).use(router).use(ElementPlus).use(VueAxios, axios).mount('#app');
axios.get("/user/test")
.then(res => {
  console.log(res)
})