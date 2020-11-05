<template>
  <div id="sing">
    <!-- 头部 -->
    <login-header></login-header>
    <div class="mid">
      <div class="sing">
        <div class="sing_img">
          <img src="../../assets/login-pic/logo.png" alt="" />
        </div>
        <div class="sing_input">
          <div class="sing_phone">
            <p>
              手机验证登录
            </p>
            <span>
              账号密码登录
            </span>
          </div>

          <div class="sing_user">
            <el-input
              type="text"
              placeholder="手机号"
              class="el-input iconfont"
              v-model="registerData.value"
              @input="lo()"
              maxlength="11"
            ></el-input>

            <button
              @click="YZ_btn()"
              :class="this.registerData.value.length == 11 ? 'active' : ''"
            >
              获取验证码
            </button>
          </div>
          <div class="sing_pas">
            <el-input
              type="text"
              placeholder="短信验证码"
              class="el-input iconfont"
              v-model="registerData.YZ_value"
            ></el-input>
            <button @click="submitForm('registerForm')">登录</button>
            <router-link class="register" to="/register"
              >没账号？点击注册</router-link
            >

            <p class="one">
              未注册二手兔账号的手机号，登录时将自动创建二手兔账号
            </p>
            <p class="two">
              我已阅读并同意<span>《用户协议》</span>及<span>《隐私政策》</span>
            </p>
          </div>
        </div>
        <div class="sing_treaty">
          其他登录方式
          <div class="Third_party_font">
            <br />
            <router-link to="/" class="iconfont WX">&#xe606;</router-link>
            <router-link to="/" class="iconfont QQ">&#xe609;</router-link>
            <router-link to="/" class="iconfont WB">&#xe621;</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <login-bottom></login-bottom>
  </div>
</template>

<script>
import loginHeader from "../login-public/login-header/login-header";
import loginBottom from "../login-public/login-bottom/login-bottom";
export default {
  name: "login",
  components: {
    loginHeader,
    loginBottom
  },
  data() {
    return {
      registerData: {
        YZ_num1: "",
        YZ_num2: "",
        value: "",
        flg: false,
        YZ_if: false,
        YZ_value: ""
      }
    };
  },

  methods: {
    // 手机号验证登录
    lo() {
      if (this.registerData.value.length == 11) {
        this.registerData.flg = true;
        this.registerData.YZ_if = true;
      }
      this.axios
        .get(`api/user/sendCaptcha`, {
          params: {
            account: this.registerData.value
          }
        })
        .then(res => {
          this.registerData.YZ_num1 = res.data.data;
          console.log(this.registerData.YZ_num1.captcha.code);
        });
    },
    YZ_btn() {
      if (this.registerData.YZ_if == true) {
        alert(this.registerData.YZ_num1.captcha.code);
      } else {
        console.log("未填写手机号");
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.$axios
            .post(
              `api/user/login?account=${this.registerData.username}`,
              this.registerData
            )
            .then(res => {
              console.log(res);
              this.$message({
                type: "success",
                message: "用户注册成功"
              });
              this.$router.replace("/home");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.router-link-active {
  text-decoration: none;
}

.active{
    background: #8cD838 !important;
}
#sing{
    background: #f8f8f8;

    /* 登录框 */
    .mid{
      width: 100%;

    }

    .sing{
      width: 40%;
      height: 600px;
      margin: 50px auto;
      background: white;
    }

    /* 登录logo */
    .sing_img{
      width: 100px;
      height: 50px;
      margin:50px auto;
      padding-top 20px
    }

    /* 登录框中心部分 */
    /* 登录框标题 */
    .sing_input{
      width: 50%;
      height: 300px;
      margin: 0 auto;

      .sing_phone{
        position: relative;
      }
      .sing_user{
        margin-top: 20px;
        position: relative;

        .el-input{
          position: absolute;
          top: 39px ;
          outline: none;
          font-size: 14px;
          width: 60%;
          height: 40px;

        }
      }
    }
  .sing_treaty{
    text-align: center;
    margin-top:85px;

        .QQ:hover{
            color: royalblue;
            transition: 0.2s;
        }
        .QQ{
          font-size:30px;
          letter-spacing:30px;
          color: #ccc;
          margin-top:25px;
        }
        .WX:hover{
          color: #8cD838;
          transition: 0.2s;
        }
        .WX{
          color: #CCC;
          letter-spacing:30px;
          margin-top:25px;
          font-size:35px;
        }
        .WB:hover{
          color: red;
          transition: 0.2s;
        }
        .WB{
          color: #CCC;
          letter-spacing:30px;
          margin-top:25px;
          font-size:30px;
        }
  }

}






.sing>.sing_input>div>p{
  font-weight: 600;
  font-size: 15px;
    position:absolute;
    left: 0;
    top: 0;
}
.sing>.sing_input>div>span{
    position: absolute;
    color: #ccc;
    right: 0;
    top: 0;
}
/* 手机用户名 */
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
.sing>.sing_input>.sing_pas>.register{
  position absolute
  top:155px;
  right :0px;
}
.sing>.sing_input>.sing_pas>.register:hover{
  text-decoration underline
}
.sing>.sing_input>.sing_pas>.el-input{
    position: absolute;
    top: 100px ;
    font-size: 14px;
    outline: none;
    width: 100%;
    height: 40px;
}
.sing>.sing_input>.sing_pas>button{
    position: absolute;
    top: 190px ;
    outline: none;
    width: 100%;
    height: 40px;
    background:#8cD838;
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
    color: rgb(40,117,225);
}
.sing>.sing_input>.sing_pas>.two span:hover{
  text-decoration:underline;
}
</style>
