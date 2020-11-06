<template>
  <div id="attribute">
    <div class="faultInformation">
      <h2>基本选项</h2>
      <!-- {{ value.title }} -->
      <!-- {{ value.options[0].content }} -->

      <div
        class="faultContent"
        v-for="(value, indexOne) in problemList"
        :key="indexOne"
      >
        <div>
          <div class="faultTitle">
            {{ value.title }}
          </div>
          <div class="faultProblem">
            {{ value.options[0].content }}
          </div>
          <div class="modify" @click="displayMenu(indexOne)">
            <a>修改</a>
          </div>
        </div>

        <ul class="menu" :class="{ transitionHeight: judge }">
          <li
            @click="problemChange(indexOne, indexTwo)"
            v-for="(val, indexTwo) in value.options"
            :key="indexTwo"
            class="vvv"
          >
            {{ val.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "attribute",
  data() {
    return {
      value: "",
      activeNames: ["1"],
      judge: false,
      index: 1,
      problemList: []
    };
  },
  created() {
    this.findAll();
  },
  methods: {
    findAll() {
      this.$axios
        .get("/api/model/parameter/findAll")
        .then(res => {
          const objArr = res.data.data.list;
          objArr.map(element => {
            this.findParameterOption(element.id).then(res => {
              element.options = res.data.data.list;
              this.problemList.push(element);
            });
          });
        })
        .catch(arr => {
          console.log(arr);
        });
    },
    findParameterOption(id) {
      return this.$axios.get("/api/model/parameter/option/findAll", {
        params: {
          parentId: id
        }
      });
    },
    handleChange(val) {
      console.log(val);
    },
    problemChange(indexOne, indexTwo) {
      // 把下拉选项中的数据传递给父级
      var faultProblemContent = document.getElementsByClassName("faultProblem")[
        indexOne
      ];
      faultProblemContent.innerHTML = this.problemList[indexOne].options[
        indexTwo
      ].content;
      // 点击下拉选项收起菜单
      var menu = document.getElementsByClassName("menu");
      menu[indexOne].className = "menu";
      this.index++;
    },
    displayMenu(indexOne) {
      var menu = document.getElementsByClassName("menu");
      // 控制下拉菜单打开和收起
      if (this.index % 2 == 1) {
        menu[indexOne].className = "transitionHeight menu";
        this.index++;
      } else {
        menu[indexOne].className = "menu";
        this.index++;
      }
    }
  }
};
</script>

<style scoped lang="stylus">
#attribute
  background #fff
  width 100%
  padding 30px 5%
  box-sizing border-box
  border-radius 10px
  .faultInformation
    width 100%
    overflow hidden
    .faultContent
      width 100%
      .faultTitle
        width 29%
      .faultProblem
        width 58%
        color #f00
      .modify
        widht 13%
        a
          cursor pointer
      .faultTitle,
      .faultProblem,
      .modify
        float left
        line-height 50px
        user-select none
    .menu
      width 100%
      max-height 0px
      transition all 0.5s
      overflow hidden
      li
        float left
        height 40px
        line-height 40px
        text-align center
        width 46%
        margin 5px 2%
        border 1px solid #ccc
        cursor pointer
        border-radius 5px
      li:hover
        border 1px solid #83d838
        color #83d838
    .transitionHeight
      max-height 200px !important
      transition all 0.5s
</style>
