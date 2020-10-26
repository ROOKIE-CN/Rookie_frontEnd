<template>
  <div id="sing">
    <div class="images">
      <!-- <img src="../../assets/logo.png" alt=""> -->
    </div>
    <div class="sing">
      <div class="sing_img">
        <!-- <img src="" alt=""> -->
      </div>
      <div class="sing_input">
        <div class="sing_phone">
          <h3>
            手机验证登录
          </h3>
          <span>
            账号密码登录
          </span>
        </div>
        <div class="sing_user">
          <input 
          type="text" 
          placeholder=" &#xe88b;手机号" 
          class='iconfont'
          v-model="value" 
          @input="lo()" 
          maxlength="11"
          >

          <button 
          :class="value.length==11?'active':''" 
          @click="YZ_btn()"
          >获取验证码</button>
        </div>
        <div class="sing_pas">
          <input type="text" placeholder="&#xe67f;短信验证码" class="iconfont">
          <button>登录</button>
          <p class="one">未注册二手兔账号的手机号，登录时将自动创建二手兔账号</p>
          <p class="two">我已阅读并同意<span>《用户协议》</span>及<span>《隐私政策》</span></p>
        </div>
      </div>
      <div class="sing_treaty">
        其他登录方式
        <div class="Third_party_font">        
          <br>
          <router-link to="/" class="iconfont WX" @click="on_WX">&#xe606;</router-link>
          <router-link to="/"  class="iconfont QQ" @click="on_QQ">&#xe651;</router-link>
          <router-link to="/" class="iconfont WB" @click="on_WB">&#xe600;</router-link>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>关于我们  | 安全保障 | 帮助中心</p>
      <p class="LJ">友情链接 ： 北京二手手机 | 北京二手手机维修 | 信用相机 | 二手手机</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"sing",
  data(){
    return {
      value:"",
      flg :false,
      YZ_if:false
    }
  },
  methods:{
    // 手机号验证登录
    lo(){
      if(this.value.length == 11){
        this.flg = true;
        this.YZ_if = true
      }
    },
    YZ_btn(){
      if (this.YZ_if == true) {
        alert("123")
      }
    }

    // 第三方登录

  }
}
</script>


<style scoped >
.router-link-active {
  text-decoration: none;
}
 
.active{
    background: springgreen !important;
}
#sing{
    background: #f8f8f8;
}
.images{
    width: 100%;
    height: 170px;
    background: red;
}
/* 登录框 */
.sing{
    width: 40%;
    height: 600px;
    margin: 50px auto;
    background: white;
}
/* 登录logo */
.sing>.sing_img{
    width: 100px;
    height: 50px;
    background: red;
    margin:50px auto;
}


/* 登录框中心部分 */
/* 登录框标题 */
.sing>.sing_input{
    width: 50%;
    height: 300px;
    margin: 0 auto;
}
.sing>.sing_input>.sing_phone{
    position: relative;
}
.sing>.sing_input>div>h3{
    position:absolute;
    left: 0;
    top: 0;
    /* float: left; */
}
.sing>.sing_input>div>span{
    /* float: right; */
    position: absolute;
    color: #ccc;
    right: 0;
    top: 0;
}
/* 手机用户名 */
.sing>.sing_input>.sing_user{
    margin-top: 20px;
    position: relative;
    /* border: 1px solid black; */
}
.sing>.sing_input>.sing_user>input{
    position: absolute;
    top: 39px ;
    outline: none;
    font-size: 20px;
    width: 60%;
    height: 40px;

}
.sing>.sing_input>.sing_user>span{
    position: absolute;
    font-size: 30px;
    top: 50px;
    left: 0;
}
.sing>.sing_input>.sing_user>button{
    width: 35%;
    height: 45px;
    margin-right: -10px;
    color: white;
    position: absolute;
    border: 1px solid #ccc;
    outline: none;
    border:none;
    border-radius: 3px;
    top: 39px;
    right: 10px;
}
/* 手机验证码 */
.sing>.sing_input>.sing_pas{
    position: relative;
}
.sing>.sing_input>.sing_pas>input{
    position: absolute;
    top: 100px ;
    font-size: 20px;
    outline: none;
    width: 100%;
    height: 40px;
}
.sing>.sing_input>.sing_pas>button{
    position: absolute;
    top: 170px ;
    outline: none;
    width: 100%;
    height: 40px;
    background:#83d838;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    border: none;
}
.sing>.sing_input>.sing_pas>.one{
    position: absolute;
    font-size: 14px;
    top: 240px ;
}
.sing>.sing_input>.sing_pas>.two{
     position: absolute;
    top: 260px ;
    font-size: 14px;
}
.sing>.sing_input>.sing_pas>.two span{
    cursor:pointer;
    color: blue;
}

/* 中间框协议部分 */

.sing>.sing_treaty{
    text-align: center;
    margin-top:25px;
}
.sing>.sing_treaty>.Third_party_font .QQ{
    font-size:60px;
    letter-spacing:30px;
    color: royalblue;
    margin-top:25px;
}
.sing>.sing_treaty>.Third_party_font .WX{
    color: chartreuse;
    letter-spacing:30px;
    margin-top:25px;
    font-size:65px;
}
.sing>.sing_treaty>.Third_party_font .WB{
    color: red;
    letter-spacing:30px;
    margin-top:25px;
    font-size:60px;
}


.bottom{
    display: inline-block;
    text-align: center;
    cursor:pointer;
    height: 100px;
    width: 100%;
}
.bottom>.LJ{
    margin-top:10px;
    color: #ccc;
}
</style>