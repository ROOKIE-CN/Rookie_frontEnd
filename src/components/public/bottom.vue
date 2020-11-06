<template>
  <div>
    <div id="public-buttom">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="3"
          ><div class="grid-content bg-purple">
            <p>交易方式</p>
            <ul v-for="(trans, index) in transaction" :key="index">
              <li>{{ trans.value }}</li>
            </ul>
          </div></el-col
        >
        <el-col :span="3"
          ><div class="grid-content bg-purple-light">
            <p>质检说明</p>
            <ul v-for="(qual, index) in quality" :key="index">
              <li>{{ qual.value }}</li>
            </ul>
          </div></el-col
        >
        <el-col :span="3"
          ><div class="grid-content bg-purple">
            <p>帮助中心</p>
            <ul v-for="(help, index) in help" :key="index">
              <li>{{ help.value }}</li>
            </ul>
          </div></el-col
        >
        <el-col :span="3"
          ><div class="grid-content bg-purple-light">
            <p>关于我们</p>
            <ul v-for="(about, index) in about" :key="index">
              <li>{{ about.value }}</li>
            </ul>
          </div></el-col
        >
        <el-col :span="3"
          ><div class="grid-content bg-purple">
            <p>合作伙伴</p>
            <ul v-for="(cooper, index) in cooperation" :key="index">
              <li>{{ cooper.value }}</li>
            </ul>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="bottom-link">
      <div>
        <font>友情链接：</font>&nbsp; <font>北京二手手机</font>
        <span>&nbsp; | &nbsp;</span> <font>北京二手手机维修</font>
        <span>&nbsp; | &nbsp;</span>
        <font>信用相机</font>
        <span>&nbsp; | &nbsp;</span>
        <font>二手手机</font>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: publicButtom,
  data() {
    return {
      transaction: [
        {
          id: 1,
          value: "上海交易方式"
        },
        {
          id: 2,
          value: "北京交易方式"
        },
        {
          id: 3,
          value: "全国交易方式"
        }
      ],
      quality: [
        {
          id: 1,
          value: "质检名词解释"
        },
        {
          id: 2,
          value: "专业质检说明"
        }
      ],
      help: [
        {
          id: 1,
          value: "常见问题"
        },
        {
          id: 2,
          value: "用户协议"
        },
        {
          id: 3,
          value: "隐私政策"
        }
      ],
      about: [
        {
          id: 1,
          value: "了解我们"
        },
        {
          id: 2,
          value: "加入我们"
        },
        {
          id: 3,
          value: "商务合作"
        },
        {
          id: 4,
          value: "维修商合作"
        },
        {
          id: 5,
          value: "门店加盟"
        }
      ],
      cooperation: [
        {
          id: 1,
          value: "京东"
        }
      ]
    };
  }
};
</script>

<style>
#public-buttom {
  margin-left: -100px;
}
#public-buttom p {
  text-align: center;
  line-height: 36px;
  font-size: 18px;
  font-weight: 600;
}
#public-buttom ul li {
  color: rgb(188, 188, 188);
  font-size: 10px;
  text-align: center;
  margin-top: 12px;
  cursor: pointer;
}
.bottom-link div {
  text-align: center;
  margin: 30px 350px;
  padding-top: 30px;
  cursor: pointer;
  border-top: 1px solid #ccc;
  width: 1103.76px;
}
.bottom-link div font {
  text-align: center;
}
.bottom-link div span {
  cursor: default;
}
</style>
