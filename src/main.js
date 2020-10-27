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

createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus).mount('#app');
axios.get("/user/test")
.then(res => {
  console.log(res)
})