<template>
  <div id="app">
    <headList></headList>
    <router-view></router-view>
    <!-- <booking></booking> -->
    <foot></foot>
   <!-- <message></message> -->
    <rightContent></rightContent>
    <!-- <alertImg></alertImg> -->
  </div>
</template>
<script>
import headList from "./components/headList";
import booking from "./components/booking";
import foot from "./components/foot";
import message from "./components/message";
import rightContent from "./components/rightSide";
import alertImg from "./components/alertImg";

export default {
  components: { headList, booking, message,foot, rightContent, alertImg },
  data() {
    return {
      // screenWidth: "",
      // screenHeight: ""
    };
  },
  methods: {},
  // mounted() {
  //   this.screenWidth = document.body.clientWidth;
  //   this.screenHeight = document.body.clientHeight;
  //   window.onresize = () => {
  //     return (() => {
  //       this.screenWidth = document.body.clientWidth;
  //       this.screenHeight = document.body.clientHeight;
  //     })();
  //   };
  // },
//   watch: {
// // 解决ie浏览器缓存页面,样式混乱
//     screenWidth() {
//       this.$forceUpdate();
//       console.log("宽度变化了");
//     },
//     screenHeight() {
//       this.$forceUpdate();
//       // console.log("高度变化了");
//     }
//   }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1920px;
  margin: auto;
}
#app {
  min-width: 1200px;
  overflow-x: hidden;
}
* {
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
a{
  text-decoration: none;
  cursor: pointer;
}
.el-button--warning{
  border: none;
}
</style>
