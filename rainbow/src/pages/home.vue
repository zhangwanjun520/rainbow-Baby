<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" id="carousel" @change="onchange" arrow="always">
        <el-carousel-item v-for="item in imgs" :key="item.id" class="ll">
          <div
            :style="{backgroundImage: 'url(' + item.img + ')', backgroundRepeat: 'no-repeat'}"
            style="width:100%;height:580px;backgroundPosition:center;background-size:cover;"
          ></div>
          <!-- <img :src="item.adr" :alt="item.desc" class="img1" style="margin:auto" /> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <section class="hokids-section">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <!-- 品牌介绍 -->
    <div class="box3">
      <p class="tit">
        品牌介绍
        <br />
        <span style="font-size:12px;">——— Brand Introduction ———</span>
      </p>
      <p v-html="html_decode(ppjs)">

      </p>
      <div class="promot" >
        <div class="nine-image1" v-for="item in idea" :key="item.id">
          <img :src="item.img" alt srcset />
          <div class="nine-image-title">{{item.name}}</div>
          <!-- 动画定位 -->
          <div class="nine-image-info">
            <p class="nine-image-info2">
              <!-- <span class="title">{{item.name}}</span> -->
              <span v-html="html_decode(item.content)"></span>
            </p>
          </div>
        </div>

        <!-- <div class="nine-image1">
          <img src="../assets/rain/brand2.jpg" alt srcset />
          <div class="nine-image-title">优质</div>

          <div class="nine-image-info">
            <p class="nine-image-info2">
              <span class="title">优质</span>

              <br />1.真正贴心,安全环保的教学环境；
              <br />2.真正关爱,青梅竹马的集体空间；
              <br />3.真正快乐,丰富多彩的主题活
            </p>
          </div>
        </div> -->

        <!-- <div class="nine-image1">
          <img src="../assets/rain/brand3.jpg" alt srcset />
          <div class="nine-image-title">便捷</div>

          <div class="nine-image-info">
            <p class="nine-image-info2" style="text-align:center">
              <span class="title">便捷</span>
              1.优质选址,小区专属大乐园；
              <br />2.配套齐全,停车买菜两不误；
              <br />3.餐食丰富,宝宝开心不挑食；
              <br />
            </p>
          </div>
        </div> -->

        <!-- <div class="nine-image1">
          <img src="../assets/rain/brand4.jpg" alt srcset />
          <div class="nine-image-title">专业</div>

          <div class="nine-image-info">
            <p class="nine-image-info2">
              <span class="title">专业</span>
              1.托育产业集团14年托育机构运营实践经验。
              <br />2.直营机构实操规范、实证研究成果面向全行业开放
              <br />3.为中国的托育行业赋能的惠普品牌
            </p>
          </div>
        </div> -->
      </div>
    </div>

    <!-- 课程体系 -->
    <div class="lesson">
      <div class="cont">
        <p class="tit">
          课程体系
          <br />
          <span style="font-size:12px;">——— Curriculum System ———</span>
        </p>
        <!-- <p>核心日托,照料中国育儿家庭刚性需求,金字塔结构课程体系,进阶式入园缓适班</p> -->
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
          <el-tab-pane :label="item.name" :name="String(index)"  v-for="(item,index) in lesson" :key="item.id" @click.native="ll(index)">
            <p id="img">
              <img :src="item.img" alt />
            </p>
            <p id="text" v-html="html_decode(item.content)">
            </p>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!-- 新闻中心 -->

    <div class="newscenter">
      <p class="tit" style="color:#31bb7d;font-size:36px">
        新闻动态
        <br />
        <span style="font-size:12px;">——— News ———</span>
      </p>

      <div class="newsCon">
             <div class="noData" v-if="flag">
            <el-button :loading="true" style="border:none;background:#f7f7f7;color:gray">加载中</el-button>
          </div>
        <div v-for="item in newsCon" :key="item.id" @click="goDetail(item.newsId)">
          <div class="con">
            <div class="image">
              <img :src="item.newsIndexImg" alt class="imgg" />
              <div class="contt" @click="goDetail(item.newsId)">
                <div
                  class="newsTit"
                  style="height:70px;line-height:50px;width:90%;margin:auto"
                >{{item.newsTitle}}</div>
                <p class="subtit">{{item.newsSubtitle}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="more">
        <el-button type="primary" @click="$router.push('/newCenter')">更多内容</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getLesson , getEntrepreneurs,getBanner,getAboutUs,getPPJS} from "../api/request";
import qs from "qs";

export default {
  data() {
    return {
      activeName: '0',
      index: "",
      newsCon: [],
      imgs: [],
      lesson:[],
      ppjs:'',
      idea:[],
      flag: true,
    };
  },
  methods: {
        // 转义标签
    html_decode(str) {
      var s = "";
      if (str.length == 0) return "";
      s = str.replace(/&amp;/g, "&");
      s = s.replace(/&lt;/g, "<");
      s = s.replace(/&gt;/g, ">");
      s = s.replace(/&nbsp;/g, " ");
      s = s.replace(/&#39;/g, "'");
      s = s.replace(/&quot;/g, '"');
      s = s.replace(/<br\/>/g, "\n");
      return s
      // this.content = s;
    },
    ll(ind){
      console.log(ind)
      this.activeName=ind
    },
    // 获取banner图
    getBannerImg() {
      getBanner().then((res) => {
        console.log(res)
        this.imgs = res.rows;

        console.log(this.imgs);
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onchange(e) {
      this.index = e;
    },
    getNews() {
      //获取创业者说
      getEntrepreneurs().then((res) => {
        console.log(res)
        this.newsCon = res.rows;
        this.flag = false;

      });
    },
    goDetail(id) {

      this.$router.push({
        path: `/${id}`,
        query: {
          come: "1",
          newsId: id,
        },
      });
    },
    // 课程体系
    getlesson(){



      getLesson().then((res) => {

        this.lesson = res.rows;

      });


    }
  },
  created() {
    this.getNews();
    this.getBannerImg();
    this.getlesson()
    getAboutUs().then(res=>{
      console.log(res)
      this.ppjs=res.data.ppjs
    }),
         getPPJS().then(res=>{
         this.idea=res.rows
      })
  },
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}
el-carousel {
  height: 480px;
  text-align: center;
}
.block {
  width: 100%;
  height: 580px;
  position: relative;
}
.point {
  position: absolute;
  z-index: 999;
  display: flex;
  bottom: 30px;
  left: 50%;
  margin-left: -100px;
  li {
    list-style: none;
    width: 30px;
    height: 30px;
    background-color: gainsboro;
    border-radius: 50%;
    margin-right: 20px;
  }
}
.img1 {
  width: auto;
  max-width: 1920px;
  text-align: center;
}

.hokids-section div:nth-child(1) {
  background: #8dc63f;
  flex: 1;
}
.hokids-section div:nth-child(2) {
  background: #ffb943;
  flex: 1;
}
.hokids-section div:nth-child(3) {
  background: #f07855;
  flex: 1;
}
.hokids-welcome {
  width: 1100px;
  margin: auto;
  // display: flex;
  // justify-content: space-around;
  // flex-direction: column;
  // align-items: center;
  text-align: center;
  p:last-child {
    margin-bottom: 50px;
  }
  img {
    width: 500px;
    margin-top: 100px;
  }
  .p0 {
    color: #1b1b1b;
    font-size: 36px;
    font-weight: 550;
  }
  .p1 {
    width: 70%;
    margin: auto;
    color: #1b1b1b;
    font-size: 18px;
    font-weight: 550;
    line-height: 24px;
  }
}

// 品牌介绍
// 提升课程
.box3 {
  width: 100%;
  // height: 600px;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .tit {
    width: 900px;
    margin: auto;
    text-align: center;
    font-size: 36px;
    font-weight: 550;
    color: #31bb7d;

    margin-top: 50px;
    margin-bottom: 40px;
  }
  p:nth-child(2) {
    width: 890px;
    margin: auto;
    text-align: center;
    font-size: 18px;
    font-weight: 550;
    line-height: 34px;
    margin-top: 50px;
    margin-bottom: 40px;
    color: #666666;
  }
}
.promot {
  width: 1200px;
  margin: 70px auto;
  // padding-top: 80px;
  // border: 1px solid;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.nine-image1 > img {
  width: 290px;
  height: 197px;

  // float: left;
}

.nine-image1 {
  height: auto;
  position: relative;
  transition: all 0.5s linear;
}

.nine-image-title {
  width: 290px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 3px;
  left: 0;
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  transition: all 0.5s linear;
}

.nine-image-info {
  width: 290px;
  height: 197px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.5s linear;
  // text-align: center;
}

.nine-image-info1 {
  font-weight: 500;
  color: white;
  font-size: 13px;

}

.nine-image-info2 {
  .title {
    display: inline-block;
    width: 100%;
    text-align: center;
    // border: 1px solid;
  }
  font-weight: 400;
  width: 80%;
  font-size: 14px;
  margin:  auto;
  color: white;
  line-height: 20px;
  // border: 1px solid;
  text-align: left;
  // font-weight: 550;
}

.nine-image1:hover > .nine-image-title {
  opacity: 0;
}

.nine-image1:hover > .nine-image-info {
  opacity: 1;
}
// 课程体系
.lesson {
  width: 100%;

  // height: 570px;
  // background: url("../assets/rain/lesson7.jpg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  background-color: #f6f6f6;
  .cont {
    width: 902px;
    margin: auto;
    height: 800px;
    .tit {
      width: 900px;

      text-align: center;
      padding-top: 50px;
      padding-bottom: 20px;
      font-size: 36px;
      font-weight: 550;
      color: #31bb7d;
    }
    p:nth-child(2) {
      text-align: center;
      padding-bottom: 20px;

      font-size: 18px;

      color: #666666;
    }
  }
}
#img {
  width: 600px;
  margin: 30px auto;
  img {
    width: 600px;
  }
}
#text {
  width: 700px;
  margin: 20px auto;
  line-height: 40px;
  font-size: 17px;
  text-align: center;
}
// 三张图片
.hokids-welcomeicon {
  margin: 51px auto;
  width: 900px;
  height: 200px;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  div {
    position: relative;
    width: 30%;
    // border: 1px solid;
    span {
      position: absolute;
      left: 50%;
      margin-left: -40px;
      top: 50%;
      // margin-top: -18px;
      font-size: 24px;
      color: white;
    }
  }
}
// .hokids-welcomeicon div:nth-child(1) {
//   // background: url(../assets/health.png) no-repeat;
//   width: 236px;
//   background-size: contain;
// }
// .hokids-welcomeicon div:nth-child(2) {
//   background: url(../assets/comfortable.png) no-repeat;
//   width: 236px;
//   background-size: contain;
// }
// .hokids-welcomeicon div:nth-child(3) {
//   background: url(../assets/happy.png) no-repeat;
//   width: 236px;
//   background-size: contain;
// }
// 三大课程体系
.hokids-system {
  margin: 0 auto;
  padding-top: 36px;
  width: 100%;
  // max-width: 1920px;
  height: 230px;
  text-align: center;
  color: #fff;
  // background: url(../assets/system.jpg) no-repeat center 0;
  background-size: cover;
  font-weight: 550;
  img {
    width: 250px;
  }
  .p1 {
    font-size: 36px;
    margin-top: 3px;
    margin-bottom: 12px;
    // font-weight: 550;
  }
  .p2 {
    font-size: 18px;
    line-height: 16px;
  }
}
// 招生年龄
.box {
  width: 100%;
  background: #f8f8f8;
  padding-top: 50px;
  padding-bottom: 30px;
}
.hokids-recruit-content {
  width: 1100px;
  margin: auto;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-around;
  .recruitDiv {
    width: 330px;
    font-size: 16px;
    background: #fff;
    border-radius: 8px;
  }
  .age {
    width: 200px;
    height: 35px;
    margin: -21px auto 0;
    position: relative;
    z-index: 1;
    background: #8dc63f;
    border-radius: 8px;
    display: flex;
    span {
      line-height: 35px;

      color: #fff;
      text-align: center;
      display: inline-block;
    }
    span:nth-child(1) {
      flex: 1;
      border-right: 1px solid #fff;
    }
    span:nth-child(2) {
      flex: 1;
    }
  }
  .course {
    background-color: white;

    .column {
      font-size: 20px;
      line-height: 25px;
      color: #8dc63f;
      margin-bottom: 12px;
    }
  }
}
.hokids-recruit-content .course ul {
  list-style: none;
  text-align: left;
}
.ageImg {
  width: 330px;
}
// 探索与发现
.hokids-explore {
  margin: 0 auto;
  width: 100%;
  height: 230px;
  color: #fff;
  // background: url(../assets/explore.jpg) no-repeat center 0;
  background-size: cover;
  .hokids-explore-content {
    width: 1200px;
    margin: 0 auto;
    min-width: 1200px;
    button {
      border: none;
      display: inline-block;
      width: 160px;
      height: 40px;
      margin-top: 120px;
      margin-left: 230px;
      background: #fff;
      border-radius: 8px;
      text-align: center;
      line-height: 20px;
      font-size: 20px;
      color: #31bb7d;
      // border: 1px solid black;
    }
    span {
      display: inline-block;
      width: 500px;
      // border: 1px solid black;
      text-align: left;
      font-size: 18px;
      font-weight: 550;
      margin-left: 220px;
      line-height: 30px;
    }
  }
}
// 教育品牌优势
.hokids-advantage {
  margin: 0 auto;
  width: 100%;
  height: 180px;
  color: #fff;
  // background: url(../assets/advantage.jpg) no-repeat center 0;
  background-size: cover;
  margin-bottom: 20px;
}
.info {
  width: 1000px;
  height: 200px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  // border: 1px solid;
}
.list {
  // border: 1px solid;
  margin: auto;
  // width: 80%;
  display: flex;
  justify-content: space-around;
  .leftList:nth-child(2) {
    margin-left: 100px;
  }
}

.leftList {
  width: 49%;
  height: 180px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  div {
    color: black;
    img {
      width: 100px;
      margin-left: -30px;
    }

    p {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 16px;
      line-height: 20px;
      .sp {
        font-size: 22px;
        font-weight: 550;
        color: black;
      }
      span {
        font-size: 40px;
        color: #fbcd0d;
      }
    }
  }
}
.rightList {
  width: 600px;
  height: 350px;
  background-color: red;
}
.el-carousel__arrow--left {
  background-color: #31bb7d;
}
.el-carousel__arrow--right {
  background-color: #31bb7d;
}

.hokids-authentication {
  display: flex;
  justify-content: space-between;
  // margin-bottom: 0px;
  width: 1000px;
  height: 550px;
  margin: 50px auto;
  padding-left: 70px;
}
.rightImg {
  width: 480px;
  // background: url(../assets/authenticationbg.jpg) no-repeat center;
  background-size: contain;
}
.hokids-authentication-l {
  width: 400px;
  color: #313131;
}
.hokids-authentication-l .pname {
  font-size: 36px;
  font-weight: 550;
  margin: 14px 0 15px;
}
.hokids-authentication-l .description {
  font-size: 18px;
  line-height: 30px;
  // margin-bottom: 28px;
}
.im {
  width: 400px;
}
.hokids-authentication-l li {
  margin-right: 80px;
  float: left;
}
.image {
  width: 400px;
}
#carousel /deep/ .el-carousel__container {
  // background: #fff;
  height: 580px;
}
// 新闻
.tit {
  font-size: 38px;
  font-weight: 550;
  width: 1100px;
  margin: auto;
  text-align: center;
  // line-height: 50px;
}
.newsCon {
  width: 1100px;
  margin: auto;
  // height: 1000px;
  // border: 1px dashed grey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .con {
    width: 350px;
    height: 250px;
    // border: 1px solid gainsboro;
    margin-top: 50px;
    margin-bottom: 40px;
    line-height: 24px;
    background-color: white;
    position: relative;
    transition: all 0.5s linear;
    p {
      width: 280px;
      margin: 30px auto;
    }
    .image {
      width: 100%;
      height: 250px;
      position: relative;
      // border: 1px solid;
      overflow: hidden;
      transition: all 0.5s linear;
      .imgg {
        width: 100%;
        height: 250px;
        transition: all 0.5s linear;
      }
      .contt {
        // border: 1px solid;
        width: 100%;
        height: 250px;
        position: absolute;
        top: 200px;
        color: white;
        background-color: rgba($color: black, $alpha: 0.6);
        text-align: center;
        transition: all 0.5s linear;
        line-height: 50px;
      }
    }
    .image:hover > .contt {
      position: absolute;
      top: 0px;
    }
    .newsTit {
      font-size: 18px;
      line-height: 22px;
      font-weight: 550;
      cursor: pointer;
      width: 90%;
      margin: auto;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .newsTit:hover {
      color: #31bb7d;
    }
    .time,
    .editor,
    .subtit {
      font-size: 14px;
      margin-top: -20px;
      line-height: 24px;
    }
  }
}
.subtit {
  position: relative;
  line-height: 20px;
  // height: 40px;
  // border: 1px solid;
  // max-height: 80px;
  // overflow: hidden;
}
// .subtit::after {
//   content: "...";
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   padding-left: 40px;
//   background: -webkit-linear-gradient(left, transparent, #fff 55%);
//   background: -o-linear-gradient(right, transparent, #fff 55%);
//   background: -moz-linear-gradient(right, transparent, #fff 55%);
//   background: linear-gradient(to right, transparent, #fff 55%);
// }
.rm {
  position: absolute;
  bottom: 10px;
  left: 30px;
  font-size: 14px;
  font-weight: 550;
  color: #475669;
  cursor: pointer;
}
.newscenter {
  background: rgba($color: gainsboro, $alpha: 0.2);

  p:nth-child(1) {
    padding-top: 50px;
  }
}
.more {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 50px;
  .el-button--primary {
    background-color: #31bb7d;
    border: 1px solid #31bb7d;
  }
}
.noData {
  width: 80%;
  height: 100px;
  margin: auto;
  // border: 1px dashed gainsboro; /*no*/
  text-align: center;
  color: #666666;
  line-height: 100px;
}
</style>
<style lang="scss">
.block {
  .el-carousel__button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;

    /* top: 200px; */
  }
}
.info {
  .el-carousel__container {
    height: 200px;
  }
}
.cont {
  .el-tabs__item {
    width: 151px;
  }
  .el-tabs__content{
    height: 580px;
    font-size: 15px;
  }
}
.cont {
  .el-tabs--border-card > .el-tabs__header .el-tabs__item {
    text-align: center;
    background-color: #31bb7d;
    color: white;
    font-size: 17px;

  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    text-align: center;
    background-color: rgba($color: #31bb7d, $alpha: 0.6);
    color: white;
  }
}
.cont {
  .el-tabs--border-card {
    background-color: rgba($color: white, $alpha: 0.4);
    border: none;
  }
}
</style>




