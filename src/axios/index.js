// import Vue from 'vue';
// import router from '../router/index.js'
// const myVue = new Vue();

// const base_url = 'http://dushu.test01.qcw100.com/rest/2.0';
// //const base_url = 'https://api.tuijiemingpian.net/rest/2.0';
// import axios from 'axios';
// axios.defaults.timeout = 10000;     // 请求延迟时间
// const timeOut = 100;                // 请求加载条显示

// // console.log('当前环境', process.env.NODE_ENV);

// // 线上请求地址
// // process.env.NODE_ENV === 'development' ? axios.defaults.baseURL = '/api' : axios.defaults.baseURL = base_url;
// process.env.NODE_ENV === 'development' ? axios.defaults.baseURL = '/api' : axios.defaults.baseURL = base_url;
// //http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         let access_token = localStorage.getItem('access_token');                               // 注意使用的时候需要引入cookie方法，推荐js-cookie

//         if (config.method == 'post' || config.method == 'upload') {                                      // 如果是post请求 请求体自动加上token
//             config.data = config.data;
//             if (access_token) {
//                 config.data.access_token = access_token;
//             } else {
//                   console.error('token失效');
//             }
//             config.headers = {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             }
//         } else if (config.method == 'get') {                                    // 如果是get请求 url中拼接上
//             config.params.access_token = access_token;
//             config.headers = {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             }
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(err);
//     }
// );


// //http response 拦截器
// axios.interceptors.response.use(
//     // token 可以判断已过期，重定向到登录页面
//     response => {
//       if(response.data.error_msg == '密码过期，请重新登录' && response.data.error_code == 113602){
//         localStorage.removeItem('access_token')
//           router.push({
//             path:"/notLoggedIn",
//             query:{}          // 从哪个页面跳转
//           })
//       }
//         // if (response.data.errCode == 2) {
//         //     //   router.push({
//         //     //     path:"/login",
//         //     //     querry:{redirect:router.currentRoute.fullPath}          // 从哪个页面跳转
//         //     //   })
//         // }
//         return response;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )


// /**
//  * 封装get方法
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function get(url, params = {}) {
//     return new Promise((resolve, reject) => {
//         if(!(url.indexOf('hotLists') > -1 || url.indexOf('nearby') > -1)) {
//             myVue.$toast.loading({
//                     duration: 5000, // 持续展示 toast
//                     mask: true,
//                     message: "加载中..."
//             });
//         }
//         axios({
//             url: url,
//             method: 'GET',
//             params: params,
//             transformRequest: [function (data) {
//                 let ret = ''
//                 for (let it in data) {
//                     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//                 }
//                 return ret
//             }],
//         })
//             .then(res => {
//                 if (res.data.code == 1001) {

//                     // this.$toast('登录超时,' + res.data.message);

//                     // this.$router.push({ path: '/' });

//                     return

//                 }
//                 resolve(res.data);
//                 myVue.$toast.clear();
//             })
//             .catch(err => {
//                 reject(err)
//                 myVue.$toast.clear();
//             })
//     })
// }


// /**
//  * 封装post请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function post(url, data = {}) {
//     return new Promise((resolve, reject) => {

//                 if(!(url.indexOf('hotLists') > -1 || url.indexOf('nearby') > -1)) {
//                     myVue.$toast.loading({
//                             duration: 5000, // 持续展示 toast
//                             mask: true,
//                             message: "加载中..."
//                     });
//                 }
//         axios({
//             url: url,
//             method: 'POST',
//             data: data,
//             transformRequest: [function (data) {
//                 let ret = ''
//                 for (let it in data) {
//                     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//                 }
//                 return ret
//             }],
//         })
//             .then(res => {
//                 myVue.$toast.clear();
//                 if (res.data.code == 1001) {
//                     // this.$toast('登录超时,' + res.data.message);
//                     // this.$router.push({ path: '/' })
//                     return
//                 }
//                 resolve(res.data);

//             })
//             .catch(err => {
//                 myVue.$toast.clear();
//                 reject(err)
//             })
//     })
// }
// /**
//  * 封装upload上传请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function upload(url, data = {}) {
//     return new Promise((resolve, reject) => {
//         myVue.$toast.loading({
//             duration: 0, // 持续展示 toast
//             mask: true,
//             message: "加载中..."
//         });
//         console.log(data,'图片格式')
//         axios({
//             url: url,
//             method: 'POST',
//             data: data
//         })
//             .then(res => {
//                 myVue.$toast.clear();
//                 if (res.data.code == 1001) {
//                     return
//                 }
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 myVue.$toast.clear();
//                 reject(err)
//             })
//     })
// }
// /**
//  * 语音对话使用上传
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function postRecording(url, data = {}) {
//     return new Promise((resolve, reject) => {

//         axios({
//             url: url,
//             method: 'POST',
//             data: data,
//         })
//             .then(res => {
//                 if (res.data.code == 1001) {
//                     // this.$toast('用户超时' + res.data.message);
//                     // this.$router.push({ path: '/' })
//                     return
//                 }
//                 resolve(res.data);

//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

// /**
//  * from 表单
//  */
// export function get_from(URL, PARAMS) {

//     var p = new Promise((resolve, reject) => {        //做一些异步操作
//         var temp = document.createElement("form");
//         temp.action = URL;
//         temp.method = "get";
//         temp.style.display = "none";
//         for (var x in PARAMS) {
//             var opt = document.createElement("textarea");
//             opt.name = x;
//             opt.value = PARAMS[x];
//             temp.appendChild(opt);
//         }
//         document.body.appendChild(temp);
//         temp.submit();
//         resolve(temp)

//     });
//     return p;
// }

// /**
//  * 上传 excel
//  */

// export function up_excel(URL, PARAMS) {
//     return new Promise((resolve, reject) => {

//         let token = localStorage.getItem('token');
//         let config = {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         }
//         PARAMS.append('token', token)

//         axios.post(URL, PARAMS, config)
//             .then(res => {
//                 resolve(res.data)

//             })
//             .catch(err => {
//                 reject(err)

//             })
//     })
// }