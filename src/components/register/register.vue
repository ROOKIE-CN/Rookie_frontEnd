<template>
  <div>
    <public-header></public-header>
    <div id="register">
      <div>
        <div class="text">注册</div>
        <div class="mid">
          <el-form
            :model="registerData"
            :rules="rules"
            ref="registerForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="请输入账号:"
              prop="username"
              class="mid_nav"
              style="line-height:'100px'"
            >
              <el-input
                v-model="registerData.username"
                class="input"
              ></el-input>
            </el-form-item>
            <el-form-item label="输入验证码:" prop="captcha" class="mid_nav">
              <el-input
                type="text"
                v-model="registerData.captcha"
                class="mid_YZ"
              ></el-input>
              <el-button type="primary" @click="YZ_btn()" class="YZ_btn"
                >获取验证码</el-button
              >
            </el-form-item>

            <el-form-item
              label="请输入密码:"
              prop="passwordone"
              class="mid_nav"
            >
              <el-input
                type="password"
                v-model="registerData.passwordone"
                class="input"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="请确认密码:"
              prop="passwordtwo"
              class="mid_nav"
            >
              <el-input
                type="password"
                v-model="registerData.passwordtwo"
                class="input"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('registerForm')"
                class="register_btn"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <br />
    <public-bottom></public-bottom>
  </div>
</template>

<script>
import publicHeader from "../login-public/login-header/login-header";
import publicBottom from "../login-public/login-bottom/login-bottom";
// import { mapMutations } from "vuex";
export default {
  components: {
    publicHeader,
    publicBottom
  },
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerData.passwordone) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerData: {
        username: "",
        captcha: "",
        passwordone: "",
        passwordtwo: "",
        val: ""
      },
      rules: {
        username: [
          { require: true, message: "账号长度不得为空", trigger: "blur" },
          { min: 3, max: 32, message: "用户长度在3~32之间", trigger: "blur" }
        ],
        captcha: [
          { require: true, message: "账号长度不得为空", trigger: "blur" },
          { min: 6, max: 6, message: "用户长度为6", trigger: "blur" }
        ],
        passwordone: [
          { require: true, message: "密码长度不得为空", trigger: "blur" },
          { min: 3, max: 32, message: "用户长度在3~32之间", trigger: "blur" }
        ],
        passwordtwo: [
          { require: true, message: "确认密码长度不得为空", trigger: "blur" },
          { min: 3, max: 32, message: "用户长度在3~32之间", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    YZ_btn() {
      this.$axios
        .get(`api/user/sendCaptcha`, {
          params: {
            account: this.registerData.username
          }
        })
        .then(res => {
          this.registerData.val = res.data.data;
          console.log(this.registerData.val.captcha.code);
        });
    },
    submitForm(formName) {
      if (
        this.registerData.username !== "" ||
        this.registerData.captcha !== "" ||
        this.registerData.passwordone !== "" ||
        this.registerData.passwordtwo !== ""
      ) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$axios
              .post(
                "api/user/register",
                this.qs.stringify({
                  account: this.registerData.username,
                  captcha: this.registerData.captcha,
                  password: this.registerData.password
                })
              )
              .then(res => {
                console.log(res);
                this.$message({
                  type: "success",
                  message: "用户注册成功"
                });
                lconlhost.setitem("elementID");
                this.$router.replace("/login");
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      } else {
        this.$message({
          type: "error",
          message: "信息填充错误，请检查您填充的信息"
        });
      }
    }
  }
};
</script>
<style lang="stylus">
.action{
  width 70%
}
.el-form-item{
  margin 20px 100px
}
.el-form-item__label
  margin-left 20px
  line-height 100px !important
#register
  width 50%
  background #fff
  height 600px
  margin 30px auto
  .text
    padding-top 20px
    font-size 20px
    height 30px
    text-align center
    line-height 30px
  .mid
    margin 0 auto
    width 83%
    height 600px
    .mid_YZ
      width 38.4%
      height 100px
      line-height 100px
    .YZ_btn
      float right
      width 28%
      margin-right 130px
      margin-top 30px
    .input
      margin 0 auto
      width 70%
      height 100px
      line-height 100px
    .register_btn
      width 50%
      margin-left 60px
      font-size 18px
</style>
