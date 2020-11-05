<template>
  <div id="public-header">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="header-left">
            <el-dropdown class="mune">
              <span class="el-dropdown-link">
                {{ cityname }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="city">
                <el-dropdown-item
                  v-for="(val, index) in city"
                  :key="index"
                  class="city-mune"
                  @click.native="cityCli(val.value)"
                  >{{ val.value }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="header-right">
            <ul class="header-right-list">
              <li class="li">
                <router-link to="/login">登录</router-link>
                <span style="margin-top:10px" class="span">&nbsp; |</span
                >&nbsp;&nbsp;
              </li>
              <li class="li">
                购物车<span style="color:red">0</span>件<span class="span"
                  >&nbsp;&nbsp;|&nbsp;&nbsp;</span
                >
              </li>
              <li class="li" style="color:red">
                关于我们&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
              <li class="li">
                企业回收<span class="span">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              </li>
              <li class="li">
                开放平台<span class="span">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              </li>
              <li class="li">
                帮助中心<span class="span">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              </li>
              <li class="li">
                <el-dropdown class="website">
                  <span class="el-dropdown-link">
                    网站导航<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="website-list">
                    <el-dropdown-item
                      ><span class="iconfont baidu">&#xe646;</span
                      >百度一下</el-dropdown-item
                    >
                    <el-dropdown-item
                      ><span class="iconfont daohang">&#xe721;</span
                      >360导航</el-dropdown-item
                    >
                    <el-dropdown-item
                      ><span class="iconfont toutiao">&#xe6a4;</span
                      >今日头条</el-dropdown-item
                    >
                    <el-dropdown-item
                      ><span class="iconfont zuiyou">&#xe600;</span
                      >最右APP</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "public-header",
  data() {
    return {
      cityVal: "",
      cityname: "请选择城市",
      city: [
        {
          id: 1,
          value: "黑龙江"
        },
        {
          id: 2,
          value: "吉林省"
        },
        {
          id: 3,
          value: "辽宁省"
        },
        {
          id: 4,
          value: "河北省"
        },
        {
          id: 5,
          value: "甘肃省"
        },
        {
          id: 6,
          value: "青海省"
        },
        {
          id: 7,
          value: "陕西省"
        },
        {
          id: 8,
          value: "河南省"
        },
        {
          id: 9,
          value: "山东省"
        },
        {
          id: 10,
          value: "山西省"
        },
        {
          id: 11,
          value: "安徽省"
        },
        {
          id: 12,
          value: "湖北省"
        },
        {
          id: 13,
          value: "湖南省"
        },
        {
          id: 14,
          value: "江苏省"
        },
        {
          id: 15,
          value: "四川省"
        },
        {
          id: 16,
          value: "贵州省"
        },
        {
          id: 17,
          value: "云南省"
        },
        {
          id: 18,
          value: "浙江省"
        },
        {
          id: 19,
          value: "江西省"
        },
        {
          id: 20,
          value: "广东省"
        },
        {
          id: 21,
          value: "福建省"
        },
        {
          id: 22,
          value: "台湾省"
        },
        {
          id: 23,
          value: "海南省"
        },
        {
          id: 24,
          value: "北京省"
        },
        {
          id: 25,
          value: "上海省"
        },
        {
          id: 26,
          value: "天津省"
        },
        {
          id: 27,
          value: "重庆省"
        },
        {
          id: 28,
          value: "西藏自治区"
        },
        {
          id: 29,
          value: "新疆维吾尔自治区"
        },
        {
          id: 30,
          value: "内蒙古自治区"
        },
        {
          id: 31,
          value: "宁夏回族自治区"
        },
        {
          id: 32,
          value: "广西壮族自治区"
        },
        {
          id: 33,
          value: "香港特别行政区"
        },
        {
          id: 34,
          value: "澳门特别行政区"
        }
      ]
    };
  },
  methods: {
    cityCli(e) {
      this.cityname = e;
    }
  }
};
</script>
<style scoped lang="stylus">
.template{
  background #fff
}
.el-dropdown-menu{
  width 605px
}
.el-dropdown-menu__item{
  font-size 10px
  text-align center
  float left
  width 150px
}
.website-list{
  width 152px
}
.baidu{
  margin-left 15px
  font-size 20px
}
.daohang{
  font-size 23px
}
.toutiao{
  font-size 18px
}
.zuiyou{
  font-size 23px
  border-radius 20px
}
#public-header
  background rgb(244,244,244)
  height 34px
  .bg-purple
    background rgb(244,244,244)
    .header-left
      height 34px
      .mune
        .el-dropdown-link
          line-height 34px
          cursor:pointer;
    .header-right
      height 34px
      .header-right-list
        line-height 34px
        float left
        .li
          float left
          cursor:pointer;
          .website
            .website-list
              width 100px !inportant
              color red
          .span
            cursor default
</style>
