<template>
  <div class="main">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="旧机维修" name="first" class="tab">
              <div
                v-for="(item,index) in this.classify"
                :key="index"
                class="tabs"
              >
                <span :class="'iconfont icon icon-'+item.icon"></span>
                
                {{ item.classifyName }}
                
              </div>

              


              <div>
                <div class="tab_right">
                  <div>
                    <div
                      
                    >
                      <a href="#">
                        
                        <!-- {{ item.brands }} -->
                      </a>
                    </div>
                  </div>
                  <div>
                    <div
                      v-for="item in this.model"
                      :key="item.id">
                      {{ item.description }}
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        classify: [],
      };
    },
    created() {
      this.findAll();
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      queryBrand(classifyId){
          return this.$axios.get("/api/brand/findAll",{params : {classifyId}})
      },
      queryModel(brandId){
          let brands = []
          this.$axios.get("/api/model/findAll",{params: {brandId}})
          .then(res => {

            const list = res.data.data.list
            // TODO 循环list出错  not function

            for (let index = 0; index < list.length; index++) {
              const element = list[index];
              this.queryBrand(element.id)
              .then(res => {
                element.models = res.data.data.list
                brands.push(element)
              })
            }
          })
          return brands;
      },



      findAll(){
        this.$axios.get("/api/classify/findAll")
        .then(res => {
          // this.classify = res.data.data.list
          const list = res.data.data.list
          for (let index = 0; index < list.length; index++) {
            const element = list[index];
            element.brands = this.queryModel(element.id)
            this.classify.push(element)
          }
        })

        // this.$axios.get("/api/brand/findAll")
        // .then(res => {

        //   const obj = res.data.data.list
        //   for(let i = 0 ; i < 6 ; i ++){

        //     let brandObj = obj[i]
        //     this.queryModel(brandObj.id)
        //     .then(res => {
        //       brandObj.models = res.data.data.list
        //     })

        //   }

        //   // this.brand = res.data.data.list
        //   // // console.log(this.brand)
        //   // for (let i = 0; i < 6; i++) {
        //   //   brandarr.push(this.brand[i].brandName)

        //   // }
        //   // this.brand =  brandarr
        //   // console.log(this.brand)
        // })
      },
    }
  };
</script>

<style lang="stylus" scoped>
.grid-content >>> .el-tabs__item
  background #83D838
  color #fff
  width 200px
  text-align center
  font-size 16px
  border 0
.grid-content >>> .el-tabs__nav
  border 0
.grid-content >>> .el-tabs__header
  margin 0
.grid-content >>> .el-tabs__content
  overflow visible
  width 100%
  min-width 500px
  max-width 750px

.main
  background url('../../../assets/images/main_bg.png')  no-repeat
  background-position center 40px
  background-size cover

.tab
  position relative
  height 420px
  width 200px
  background rgba(0, 0, 0, .8)
  .tabs
    padding 23px 20px
    margin 0
    color #fff
    font-size 16px

.tab_right
  position absolute
  top 0
  left 200px
  background-color #fff
  height 480px
  width 100%
  min-width 500px
  max-width 750px
  div:first-child
    width 100%
    min-width 500px
    max-width 750px
    div
      padding 25px

.icon{
  font-size 22px
  display inline-block
  padding: 0 5px 0 0
}
</style>


