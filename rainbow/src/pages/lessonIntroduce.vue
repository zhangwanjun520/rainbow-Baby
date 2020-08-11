<template>
  <div>
    <section>
      <!-- banner图 -->
      <div class="about"></div>
      <!-- 六大课程金字塔体系 -->
      <div class="lesson">
        <!-- <div class="main-tit">6大课程金字塔支持体系</div> -->
        <div class="imgd">
          <img src="../assets/rain/ll.png" alt="">
        </div>
        <!-- <div class="lesson1">
          <div v-for="item in content" :key="item.id" class="box">
            <div>
              <img :src="item.img" alt />
            </div>
            <div class="tit">{{item.title}}</div>
          </div>
        </div> -->
        <div class="boxx">
          <!-- <div
            class="intro"
          >14年的实践研发国家级课程体系进阶式入园缓适课程,专注0-3岁脑思维、专注力、性格行为习惯养成。根据生理、心理以及敏感期发展特点来指导和培养；通过朗诵,让孩子掌握演讲技巧；通过角色扮演激发孩子想象力和创造力；实现思维灵活度和创造力的全面提升；课程丰富：逻辑思维、大运动感统、五感音乐、创意手工、外教英语、绘本阅读、国学启蒙等,全面涵盖0-6岁宝宝所需！</div> -->
        </div>

        <div class="clear"></div>
      </div>

      <!-- 奇幻民族之旅 -->
      <div class="fanstic">
        <div class="fan">
            <p class="tit">七大课程体系支持</p>
          <img :src="image" alt="">
          <!-- <img :src="image" alt=""> -->


          <!-- <div class="fan1">
            <ul
              v-for="(item,index) in info"
              :key="item.id"
              :class="{active:num==index}"
              @click="getNum(index)"
            >
              <li
                :style="{'background':(num==index)?'#31bb7d':'','color':(num==index)?'white':''}"
              >{{item.agePeriod}}</li>
            </ul>
          </div> -->

          <!-- <div class="tabCon">
            <div v-for="(itemCon,ind) in info" v-if="ind == num" :key="ind">
              <p>
                <img :src="itemCon.img" alt />
              </p>
              <p>{{itemCon.content}}</p>
            </div>
          </div> -->
        </div>
      </div>

      <!-- 核心托育入园缓适 -->
      <div class="course" >
        <div class="title" style="width:1100px;margin:auto;margin-bottom:40px"> 进阶式入园缓适课程</div>
        <div class="subTitle" style="text-align:left;width:1100px;margin:auto">
          进阶入园缓适课程帮助幼儿解决入园分离焦虑问题,实现家庭教育与幼儿园教养方式顺利对接的专利课程。 通过课程训练,满足孩子的心理需求,健全孩子的安全感,让孩子从亲子陪伴顺利过渡到独立上课,增强幼儿间的协作社交能力。 从而解决入园期分离焦虑问题。并且引导家长掌握正确的指导方法,入园后成为教师的合作伙伴,实现家庭与幼儿园教养方式的对接。
         <p style="margin:20px auto;text-align:left;font-size:14px;">
           ※ 彩红贝贝教研团队自主研发《进阶式入园缓适课程,荣获中国教育学会“十一五”“十二五”“十三五”规划教育重点课题;
          <br />※ 荣获国家高新技术认证,具有业内唯一性;
          <br />※ 填补了国内早教中心和幼儿园之间的市场空白;
          <br />※ 实验表明,上过此课程比没上过的幼儿,早适应幼儿园生活三个月;
          <br />
※ 20万家庭受益于本课程。
           </p>
        </div>
        <div class="box">
          <div class="content">
            <div class="img">
              <div class="imgg">
                <img src="../assets/rain/cou1.png" alt />
              </div>
            </div>
            <div class="info">
              <p class="p1">进阶缓适乳乳班  （ 6个月- 12个月）</p>
              <p>1.三位一体的教学形式：教师教－家长学－宝宝模仿小班授课,最多不超15人；</p>
              <p>2.上午班提供一餐一点,即营养早餐和营养间点。下午班提供两餐一点,即营养午餐、间点、营养晚餐；</p>
              <p>3.亲子陪同适应环境、老师、常规作息；</p>
            </div>
          </div>
          <!-- 课程二 -->

          <div class="content">
            <div class="info2">
              <p class="p1">进阶缓适彩红班  （12个月- 24个月）</p>
              <p>1.培养宝宝独立、自主、良好的生活习惯；</p>
              <p>2.分为上午班、下午班；</p>
              <p>3.从亲子依恋到师生依恋,让宝宝独立、自主、充满关爱；</p>
            </div>
            <div class="img">
              <img src="../assets/rain/cou2.png" alt />
            </div>
          </div>
          <!-- 课程三 -->
          <div class="content">
            <div class="img">
              <img src="../assets/rain/cou3.png" alt />
            </div>

            <div class="info3">
              <p class="p1">进阶缓适贝贝班   （24个月- 36个月）</p>
              <p>1.让宝宝在情感上接受伙伴、体验共享与分享的氛围。培养宝宝良好的生活习惯,为顺利入园打下良好基础；</p>
              <p>2.小班授课,提供三餐两点；</p>
              <p>3.从师生依恋到同伴依恋,学会分享、共享,从家庭走入集体；</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 提升课程 -->
      <div class="box3">
        <div class="title">提升课程</div>
        <div class="promot">
          <div class="nine-image1" v-for="item in content" :key="item.id">
            <img :src="item.img" alt srcset />
            <div class="nine-image-title">{{item.name}}</div>

            <div class="nine-image-info">
              <p
                class="nine-image-info2"
              >{{item.content}}</p>
            </div>
          </div>






        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getLesson2,getImg } from "../api/request";
import qs from "qs";

export default {
  data() {
    return {
      content: [],
      info: [],
      num: 0,
      image:''
    };
  },
  methods: {
    getlesson() {


      getLesson2().then((res) => {
        this.content = res.rows;

      });
    },
    // channel=course&moduleNum=2
    // gettravel() {
    //   let info = {
    //     channel: "course",
    //     moduleNum: "2",
    //   };

    //   getTravel(qs.stringify(info)).then((res) => {
    //     this.info = res.data.ageCourseList;
    //     this.info.forEach((item) => {
    //       item.img = "http://52chbaby.com/api/" + item.picUrl;
    //     });
    //   });
    // },
    getNum(index) {
      this.num = index;
    },
  },
  created() {
    this.getlesson();
    // this.gettravel();
    getImg().then(res=>{
      console.log(res)
      this.image=res.data.img
    })
  },
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 600px;
  background: url("../assets/rain/vv.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.hokids {
  width: 80%;
  // height: 400px;
  margin: auto;
  // border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // line-height: 30px;
  p {
    font-size: 18px;
    img {
      width: 500px;
      margin-top: 50px;
    }
    .circle {
      width: 400px;
      margin-bottom: 30px;
    }
  }
}
// 六大课程体系
.lesson {
  width: 100%;
  width: 100%;
  // height: 00px;
  // background: url("../assets/rain/lesson7.jpg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  .main-tit {
    padding-top: 70px;
    // padding-bottom: 50px;
    font-size: 34px;
    color: #666666;
    text-align: center;
    font-weight: 550;
  }
  .imgd{
    width: 1000px;
    margin: auto;
    img{
      width: 1000px;
    }
  }
  .lesson1 {
    width: 1200px;
    margin: auto;

    display: flex;
    .box {
      float: left;
      margin-left: 20px;
      height: 400px;
      // border: 1px solid;

      div:nth-child(1) {
        width: 260px;
        height: 286px;
        position: relative;
        background-color: white;
        // border: 1px solid;
        text-align: center;

        img {
          width: 200px;
          height: 270px;
          padding-top: 20px;
          // border: 1px solid;
        }
      }
      .tit {
        margin-left: 0px;
        font-weight: 550;
        position: absolute;
        color: white;
        text-align: center;
        line-height: 40px;
        width: 260px;
        height: 40px;
        background-color: rgba(253, 115, 74, 0.8);
      }
    }
  }
  .clear {
    clear: both;
  }
}
.boxx {
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.2);
}
.intro {
  width: 1000px;
  margin: auto;
  text-align: center;
  color: white;
  padding-bottom: 50px;
  padding-top: 40px;
  font-size: 17px;
  line-height: 36px;
}
// 奇幻民族之旅
.fanstic {
  width: 100%;
  // height: 1050px;
  // border: 1px solid;
  .fan {
    width: 1100px;
    // height: 1000px;
    margin:  auto;
    // border-radius: 300px;
    // box-shadow: rgb(248, 245, 230) 0px 0px 40px 40px;
    img{
    width: 1100px;


    }
  }
  .tit {
    width: 100%;
    text-align: center;
    font-size: 34px;
    font-weight: 550;
    padding-top: 80px;
   color: #31bb7d;
  }
  .fan1 {
    width: 1100px;
    margin: auto;
    height: 150px;

    ul {
      margin-top: 50px;
      li {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        float: left;
        border: 2px solid #31bb7d;
        text-align: center;
        line-height: 100px;
        color: #31bb7d;
        font-size: 17px;
        margin-left: 40px;
      }
    }
  }
  .tabCon {
    width: 1100px;
    margin: auto;
    div:nth-child(1) {
      p {
        width: 400px;
        height: 300px;
        // border: 1px solid;/
        float: left;
        margin-left: 30px;
      }
      p:nth-child(2) {
        width: 600px;
        font-size: 18px;
        line-height: 36px;
        padding-top: 40px;
      }
    }
  }
}

// ABC核心课程
.course {
  width: 100%;
  height: 1400px;
  background: url("../assets/rain/course.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.box {
  width: 1200px;
  margin: auto;
  overflow: hidden;
  // border: 1px solid;
  // border: 1px solid;
}
.title {
  text-align: center;
  margin: auto;
  font-weight: 550;
  font-size: 36px;
  padding-top: 85px;
  color: #666;
  color: #31bb7d;
}
.subTitle {
  // width: 1000px;
  // border: 1px solid;
  text-align: center;
  margin: auto;
  margin-top: 40px;
  line-height: 30px;
  font-size: 17px;
}
.content {
  border: 1px solid;
  margin: auto;
  display: flex;
  align-items: center;

  margin-top: 50px;
  color: white;

  .img {
    width: 650px;
    position: relative;
    height: 250px;
  }

  div {
    width: 667px;
    height: 300px;
    img {
      height: 250px;
      width: 667px;
    }
  }
  .info {
    width: 550px;
    height: 250px;
    background-color: #8dc63f;
    p {
      margin-left: 40px;
    }
  }
  .info2 {
    width: 550px;
    height: 250px;
    background-color: #f07855;
  }
  .info3 {
    width: 550px;
    height: 250px;
    background-color: #ffb943;
    p:nth-child(3) {
      line-height: 28px;
    }
  }
  p {
    margin-left: 40px;
    // font-weight: 550;
    font-size: 15px;
  }
  .p1 {
    font-size: 26px;
    font-weight: 550;
    border-left: 2px solid white;
    text-indent: 0.5em;
  }
}

// 基础课程
.box2 {
  width: 100%;
  height: 600px;
  // background: url("../assets/bg1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .intro {
    width: 1200px;
    display: flex;
    justify-content: space-around;
    margin: 50px auto;

    .intro1 {
      width: 380px;
      height: 470px;
      background-color: white;
      // border: 1px solid;
      color: rgba(0, 0, 0, 0.8);
      text-align: center;
      border-radius: 10px;
      overflow: hidden;
      font-size: 16px;
      // font-weight: 550;
      position: relative;

      img {
        width: 100%;
        margin-top: -20px;
      }
      p:nth-child(1) {
        height: 50px;
        background-color: #8dc63f;
        margin-top: 0px;
        line-height: 50px;
        color: white;
      }
      p:nth-child(3) {
        width: 90%;
        margin: auto;
      }
      .btm {
        width: 100%;
        bottom: -20px;
        // border: 1px solid;
        position: absolute;
        height: 50px;
        display: flex;
        justify-content: space-around;
        margin-top: 60px;
        background-color: #8dc63f;
        line-height: 50px;
        color: white;
        font-size: 16px;
      }
    }
  }
}
// 提升课程
.box3 {
  width: 100%;
  // height: 600px;
  background: url("../assets/rain/promot.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.promot {
  width: 1200px;
  margin:  auto;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.nine-image1 > img {
  width: 270px;
  // float: left;
}

.nine-image1 {
  height: auto;
  position: relative;
  transition: all 0.5s linear;
  margin-top: 30px;
}

.nine-image-title {
  width: 270px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 4px;
  left: 0;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  transition: all 0.5s linear;
}

.nine-image-info {
  width: 270px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.5s linear;
  text-align: center;
}

.nine-image-info1 {
  font-weight: 500;
  color: white;
  font-size: 14px;
}

.nine-image-info2 {
  font-weight: 400;
  width: 250px;
  font-size: 14px;
  margin: 50px auto;
  color: white;
  line-height: 18px;
  // font-weight: 550;
}

.nine-image1:hover > .nine-image-title {
  opacity: 0;
}

.nine-image1:hover > .nine-image-info {
  opacity: 1;
}
</style>
