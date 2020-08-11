<template>
  <header :class="[isFixed?'active3':'']" class="header1">
    <div class="main">
      <div class="header-logo">
        <router-link tag="span" to="/home">
          <img :src="image" alt />
        </router-link>
      </div>
      <nav class="nav">
        <ul>
          <router-link
            tag="li"
            v-for="(item,index) in tablist"
            :key="index"
            :to="item.path"
            active-class="list"
          >
            <span>{{item.name}}</span>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import {getLogo} from '../api/request'
export default {
  data() {
    return {
      image:'',
      tablist: [
        { name: "首页", path: "/home" },
        { name: "关于我们", path: "/aboutUs" },
        { name: "课程体系", path: "/lessonIntroduce" },

        { name: "新闻动态", path: "/newCenter" },
        { name: "中心一览", path: "/explore" },
        { name: "课程预约", path: "/booking" },
        { name: "加盟合作", path: "/joinUs" },
      ],
      isFixed: false,
    };
  },
  methods: {
    handleScroll() {
      //获取滚动时的高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let to = document.querySelectorAll(".header1")[0].offsetTop;
      //
      // console.log(to);

      if (scrollTop > 80) {
        //  console.log(scrollTop)
        this.isFixed = true;
      } else if (to == 0) {
        this.isFixed = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  created(){
    getLogo().then(res=>{
      // console.log(res)
         this.image=res.data.img
    })


  }
};
</script>
<style lang="scss" scoped>
.header1 {
  width: 95%;
min-width: 1200px;
  height: 65px;
  margin: auto;
  background: rgba($color: white, $alpha: 0.8);
  color: black;
  position: fixed;
  z-index: 9999;
  top: 45px;
  left: 50%;
  margin-left: -47.5%;
  transition: top 0.3s;

  .main {
    // background-color: antiquewhite;
    display: flex;
    width: 1100px;

    // border: 1px solid;
    margin: auto;
    height: 65px;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    // border: 1px solid;
    // width: 33%;
    margin-left: 80px;
    // border: 1px solid;
    img {
      width: 130px;
    }
  }
  .nav {
    width: 850px;
    ul {
      font-size: 16px;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      // border: 1px solid;
      cursor: pointer;
      .list {
        width: auto;
        color: #31bb7d;
      }
    }
  }
}

.hokids-section {
  width: 100%;
  height: 7px;
  display: flex;
}
.active3 {
  top: 0px;
  transition: top 0.3s;
}
</style>
