<template>
  <header>
    <div class="main">
      <div class="header-logo">
        <router-link tag='span' to='/home'>
           <img src="http://www.52alq.com/statics/images/logo.jpg" alt />
        </router-link>

      </div>
      <nav class="nav">
        <ul>
         <router-link tag="li" v-for="(item,index) in tablist" :key="index" :to="item.path" active-class="list">
          <span>{{item.name}}</span>
        </router-link>
        </ul>
      </nav>
    </div>

  </header>
</template>
<script>
export default {
  data(){
    return{
       tablist: [
               { name: "首页", path: "/home" },
        { name: "关于我们", path: "/aboutUs" },
        { name: "课程介绍", path: "/lessonIntroduce" },
        { name: "探索发现", path: "/explore" },
          { name: "新闻中心",path: "/newCenter" },
        { name: "预约试听", path: "/booking" },
        { name: "加盟我们", path: "/joinUs" },
      ],

    }
  }
};
</script>
<style lang="scss" scope>
header {
  width: 100%;
  height: 126px;
  .main {
    // background-color: antiquewhite;
    display: flex;
    width: 1600px;/*px*/
    min-width: 1200px;/*px*/
    margin: auto;
    height: 126px;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    width: 33%;
    // border: 1px solid;
    img {
      width: 368px;
    }
  }
  .nav {
    width: 70%;
    ul {
      font-size: 22px;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-left: 20px;
      cursor: pointer;
      .list{
        width: auto;
  color: orange;
}
    }
  }
}

.hokids-section {
    width: 100%;
    height: 7px;
    display: flex;
}

</style>
