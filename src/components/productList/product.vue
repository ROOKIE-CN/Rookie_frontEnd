<template>
    <div class="product_list">
        <el-row class="path" type="flex" justify="center">
            <el-col :span="16">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                  <el-breadcrumb-item>{{ pathTwo }}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">

            <el-col :span="16">
                <img src="@/assets/iphone.jpg" alt="iphone" class="iphone img-responsive">

                <div class="pdt_nav">
                    <el-row justify="space-around">
                        <el-col :span="2">
                          <div class="pdt_t">分类：</div>
                        </el-col>
                        <el-col :span="20">
                            <ul>
                                <li
                                 v-for="(value , index) in classification"
                                 :key="index"
                                 :class="value.flg?'active':''"
                                 @click="active(value,0)"
                                >
                                    {{ value.title }}
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
                    <hr color="#d2d2d2" size="1px"/>
                    <el-row justify="space-around">
                        <el-col :span="2">
                          <div class="pdt_t">品牌：</div>
                        </el-col>
                        <el-col :span="19">
                            <ul class="brand" :style="`height: ${more?'30':'normol'}px`">
                                <li
                                    v-for="(value , index) in brand"
                                    :key="index"
                                :class="value.flg?'active':''"
                                @click="active(value,1)"
                                >
                                    {{ value.title }}
                                </li>
                            </ul>
                        </el-col>
                        <el-col class="more" :span="3">
                          <el-button plain v-show="more" @click="moreBranch()">更多<i class="el-icon-arrow-down"></i></el-button>
                          <el-button plain v-show="!more" @click="moreBranch()">收起<i class="el-icon-arrow-up"></i></el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="pdt_content">
                  <el-row class="pdt_c" :gutter="15">
                    <el-col
                     :span="6"
                     v-for="(val , index) in 6"
                     :key="index"
                    >
                      <div class="card">
                      </div>
                    </el-col>
                  </el-row>
                  <div class="pga">
                    <el-pagination
                      :background="true"
                      layout="prev, pager, next"
                      :total="100"
                      @click="a($event.target)">
                    </el-pagination>
                  </div>
                </div>
                
            </el-col>

        </el-row>
    </div>
</template>
<script>
export default {
    name : "productList",
    data (){
        return {
            pathOne : '全部维修分类',
            pathTwo : '手机',
            classification : [
                {title : '手机' , id : 'phone' , flg : true},
                {title : '平板电脑' , id : 'iPad' , flg : false},
                {title : '笔记本' , id : 'notebook' , flg : false},
                {title : '摄影摄像' , id : 'camera' , flg : false},
                {title : '智能数码' , id : 'digtal' , flg : false}
            ],
            brand : [
                {title : "苹果" , id : "" , flg : true},
                {title : "华为" , id : "" , flg : false},
                {title : "荣耀" , id : "" , flg : false},
                {title : "vivo" , id : "" , flg : false},
                {title : "OPPO" , id : "" , flg : false},
                {title : "小米" , id : "" , flg : false},
                {title : "三星" , id : "" , flg : false},
                {title : "魅族" , id : "" , flg : false},
                {title : "乐视" , id : "" , flg : false},
                {title : "锤子" , id : "" , flg : false},
                {title : "金立" , id : "" , flg : false},
                {title : "一加" , id : "" , flg : false},
                {title : "联想" , id : "" , flg : false},
                {title : "索尼" , id : "" , flg : false},
                {title : "努比亚" , id : "" , flg : false},
                {title : "黑莓" , id : "" , flg : false},
                {title : "溢出" , id : "" , flg : false},
                {title : "溢出" , id : "" , flg : false},
                {title : "溢出" , id : "" , flg : false},
                {title : "溢出" , id : "" , flg : false},
                {title : "溢出" , id : "" , flg : false},
                {title : "溢出" , id : "" , flg : false}
            ],
            more : true
        }
    },
    methods : {
        active(e,n){
            if(n == 0){
                this.pathTwo = e.title;
                for(let i of this.classification){
                    i.flg = false;
                }
                for(let o of this.brand){
                    o.flg = false;
                }
                this.brand[0].flg = true;
            }else if(n == 1){
                for(let i of this.brand){
                    i.flg = false;
                }
            }
            e.flg = true;
        },
        moreBranch(){
            this.more = !this.more;
        },
        a(e){
          let type = Number(e.innerHTML.trim());
          if(isNaN(type) || type == 0){
            return 
          }else{
            // console.log(type);
          }
        }
    }
}
</script>
<style lang="stylus" scoped>
.product_list
  font-size 0.9em
.iphone
    width 100%
    margin 20px 0
.path
  div
    height 30px
    line-height 30px
    background-color #fff
    // margin-top -30px
.pdt_nav
    background-color #fff
    padding 15px
    user-select none
    line-height 30px
    margin-bottom 15px
.pdt_nav
    ul
        display flex
        flex-wrap wrap
.pdt_nav
    ul
        li
            display flex
            flex-wrap wrap
            margin 0 10px
            cursor pointer
.pdt_nav
    hr
        margin 20px 0
.pdt_t
  width 60px
.active
    color #42b983
.more
    button
      float right
      width 64px !important
      padding 10px 5px
      // border 1px solid #d2d2d2
.brand
    line-height 30px
    overflow hidden
.a
  div
    background-color #fff
    box-sizing border-box
.pga
  text-align center
.pdt_c
  .card
    background-color #fff
    margin-bottom 15px
    box-sizing border-box
    padding 1.5em
.pdt_c
  .card
    img
      width 85%
</style>