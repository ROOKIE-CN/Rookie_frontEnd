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
                            <ul class="type">
                                <li
                                 v-for="(value , index) in classification"
                                 :key="index"
                                 :class="value.flg?'active':''"
                                 @click="active(value,0);changeBrand(value.id)"
                                >
                                    {{ value.classifyName }}
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
                            <ul class="brand">
                                <li
                                 v-for="(value , index) in brand"
                                 :key="index"
                                 :class="value.flg?'active':''"
                                 @click="active(value,1);changeList(value.id)"
                                >
                                  <span v-if="index <= 12">
                                    {{ value.brandName }}
                                  </span>
                                  <transition v-else-if="index==13" name="el-fade-in-linear">
                                    <span v-show="more">{{ value.brandName }}</span>
                                  </transition>
                                  <transition v-else-if="index>13" name="el-fade-in">
                                    <span v-show="more">{{ value.brandName }}</span>
                                  </transition>
                                </li>
                            </ul>&nbsp;
                        </el-col>
                        <el-col class="more" :span="3">
                          <el-button plain v-show="!more" @click="moreBranch()">更多<i class="el-icon-arrow-down"></i></el-button>
                          <el-button plain v-show="more" @click="moreBranch()">收起<i class="el-icon-arrow-up"></i></el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="pdt_content">
                  <div class="pdt_c">
                    <div
                     v-for="(val , index) in list"
                     :key="index"
                     v-show="val.flg"
                    >
                      <a
                       href="javascript:;"
                       v-for="(value , ind) in val.content"
                       :key="ind"
                       @click="jump(value.id)"
                      >
                        <div class="card">
                          <div>
                            <img :src="value.contentImg" alt="">
                          </div>
                          <p>{{ value.modelName }}</p>
                        </div>
                      </a>
                      <a v-if="sas(val) >= 1"></a>
                      <a v-if="sas(val) >= 2"></a>
                      <a v-if="sas(val) == 3"></a>
                    </div>
                    
                  </div>
                  <div class="pga">
                    <el-pagination
                      :background="true"
                      layout="pager"
                      :total="listLength"
                      @click.native="pit($event.target)"
                    >
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
    mounted (){
      // 分类
      let arr_classify = null;
      this.$axios.get("/api/classify/findAll").then(function (res){
        arr_classify = res.data.data.list;
        for(let i of arr_classify){
          i.flg = false;
        }
        arr_classify[0].flg = true;
      }).catch(err => {
        console.log(err);
      });
      setTimeout(() => {
        this.classification = arr_classify;
        
        // 品牌
        let arr_brand = null;
        this.$axios.get(`/api/brand/findAll?classifyId=${this.classification[0].id}`).then(function (res){
          arr_brand = res.data.data.list;
          if(arr_brand.length != 0){
            for(let i of arr_brand){
              i.flg = false;
            }
            arr_brand[0].flg = true;
          }
        }).catch(err => {
          console.log(err);
        });
        setTimeout(() => {
          this.brand = arr_brand;

          // 商品列表
          if(this.brand.length != 0){
            let arr_list = [];
            let sum = null;
            this.$axios.get(`/api/model/search?brandId=${this.brand[0].id}`).then(function (res){
              sum = Math.ceil(res.data.data.list.length/20);
              for(let i = 0; i < sum; i++){
                let arr = res.data.data.list.splice(0,20);
                let obj = {flg : false};
                obj.content = arr;
                arr_list.push(obj);
                arr_list[0].flg = true;
              };
            }).catch(err => {
              console.log(err);
            });
            setTimeout(() => {
              this.list = arr_list;
              this.listLength = sum * 10;
            }, 200);
          }

        }, 200);

      }, 300);

    },
    data (){
        return {
            show : true,
            pathOne : '全部维修分类',
            pathTwo : '手机',
            classification : [],
            brand : [],
            more : false,
            pdtList : [
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"},
              {title : "aaaaaa"}
            ],
            list : [],
            listLength : null
        }
    },
    methods : {
      active(e,n){
          if(n == 0){
              this.pathTwo = e.classifyName;
              for(let i of this.classification){
                  i.flg = false;
              }
              if(this.brand.length != 0){
                for(let o of this.brand){
                  o.flg = false;
                }
                this.brand[0].flg = true;
              }
              
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
      pit(e){
        let type = Number(e.innerHTML.trim());
        if(isNaN(type) || type == 0){
          return 
        }else{
          for(let i of this.list){
            i.flg = false;
          }
          this.list[e.innerHTML-1].flg = true;
        }
      },
      sas(e){
        if(window.innerWidth <= 769){
          return e.content.length % 2;
        }else if(window.innerWidth > 769 && window.innerWidth <= 1024){
          return e.content.length % 3;
        }else if(window.innerWidth > 1024){
          return e.content.length % 4;
        }
      },
      changeBrand(id){
        let arr = null;
        this.$axios.get(`/api/brand/findAll?classifyId=${id}`).then(function (res){
          arr = res.data.data.list;
          if(arr.length != 0){
            for(let i of arr){
              i.flg = false;
            }
            arr[0].flg = true;
          }
        }).catch(err => {
          console.log(err);
        });
        setTimeout(() => {
          this.brand = arr;
          if(this.brand.length != 0){
            let arr_list = [];
            let sum = null;
            this.$axios.get(`/api/model/search?brandId=${this.brand[0].id}`).then(function (res){
              sum = Math.ceil(res.data.data.list.length/20);
              for(let i = 0; i < sum; i++){
                let arr = res.data.data.list.splice(0,20);
                let obj = {flg : false};
                obj.content = arr;
                arr_list.push(obj);
                arr_list[0].flg = true;
              };
            }).catch(err => {
              console.log(err);
            });
            setTimeout(() => {
              this.list = arr_list;
              this.listLength = sum * 10;
            }, 200);
          }else{
            this.list = [];
          }

        },190);
      },
      changeList(id){
        let arr_list = [];
        let sum = null;
        this.$axios.get(`/api/model/search?brandId=${id}`).then(function (res){
          sum = Math.ceil(res.data.data.list.length/20);
          for(let i = 0; i < sum; i++){
            let arr = res.data.data.list.splice(0,20);
            let obj = {flg : false};
            obj.content = arr;
            arr_list.push(obj);
            arr_list[0].flg = true;
          };
        }).catch(err => {
          console.log(err);
        });
        setTimeout(() => {
          this.list = arr_list;
          this.listLength = sum * 10;
        },200);
      },
      jump(id){
        console.log(id);
      }
    },
    computed : {
      pia(){
        return this.list.length * 10;
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
  background-color #fff
.path
  div
    height 30px
    line-height 30px
    background-color #fff
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
.brand
  line-height 30px
  overflow hidden
.brand>li,.type>li
    color #333
    transition all .5s
.brand>>> .active,.type>>> .active
  color #42b983
.more
  button
    float right
    width 64px !important
    padding 10px 5px
.pga
  text-align center
.pdt_c>div
  display flex
  flex-wrap wrap
  justify-content space-between
@media screen and (max-width: 769px)
  .pdt_c>div>a
    width 49%
@media screen and (min-width: 769px) 
  .pdt_c>div>a
    width 32%
@media screen and (min-width: 1024px) 
  .pdt_c>div>a
    width 24%
.pdt_c>div>a
  display block
  margin-bottom 20px
  color #222
.pdt_c
  .card
    width 100%
    height 100%
    padding 40px 0
    background-color #ffffff
.pdt_c
  .card
    div
      width 50%
      height 70%
      margin 0 auto
.pdt_c
  .card
    div
      img
        width 100%
.pdt_c
  .card
    p
      height 30px
      line-height 30px
      margin-top 30px
      text-align center

.transition-box
  border 1px solid red
  background-color yellow
</style>