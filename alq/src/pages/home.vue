<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" id="carousel"  arrow='never'  @change='onchange' >
        <el-carousel-item v-for="item in imgs" :key="item.id" class="ll">
          <router-link tag="span" :to="item.path">
            <img :src="item.adr" :alt="item.desc" class="img1" />
          </router-link>
        </el-carousel-item>
        <!-- <ul class="point">
          <li v-for='item in 3' :key='item'  :style="{'background-color': (index+1==item ? 'orange':'')}"></li>
        </ul> -->
      </el-carousel>
    </div>
    <section class="hokids-section">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <!-- welcome to hokids  -->
    <div class="hokids-welcome">
      <img src="http://www.52alq.com/statics/images/welcome.png" alt class="mb20" />
      <p class="p0">
        教育不是为了上学做准备,
        <br />教育是为未来的生活做准备
      </p>
      <p class="p1">
        爱乐祺是一家专业从事托育早教的多元化集团发展公司,
        <br />2010年，全国第一个提出“托育早教”的园所教养模式
      </p>
      <p
        class="p1"
      >我们的托育早教园所，是欧美国家的“daycare”、日本的“保育园”这样社区式托儿所，中国传统托儿所的结合体教育养育一体化，主要针对0-6岁的婴幼儿及家庭，能够同时满足家庭的托管需求和早期专业教育的需求</p>
    </div>
    <!-- 三张图片 -->
    <div class="hokids-welcomeicon">
      <div>
        <router-link to="/aboutUs" tag="span">
          <p>健康</p>
        </router-link>
      </div>
      <div>
        <router-link to="/aboutUs" tag="span">
          <p>舒适</p>
        </router-link>
      </div>
      <div>
        <router-link to="/aboutUs" tag="span">
          <p>快乐</p>
        </router-link>
      </div>
    </div>
    <!-- 三大课程体系 -->
    <div class="hokids-system">
      <img src="http://www.52alq.com/statics/images/systembg.png" alt />
      <p class="p1">三大课程体系</p>
      <p class="p2">班级里的每一个孩子，都是爱乐祺的整个世界！更是一个家庭的整个世界！</p>
      <p class="p2">在健康、安全、舒适的基础之上，才能够有快乐的学习和成长；这是爱乐祺托育早教的核心！</p>
    </div>
    <!-- 招生年龄 -->
    <div class="box">
      <div class="hokids-recruit-content">
        <div class="recruitDiv" v-for="item in contents.info" :key="item.id">
          <div>
            <router-link tag="span" :to="item.path">
              <img :src="item.img" alt class="ageImg" />
            </router-link>
          </div>
          <div class="age" :style="{'background-color':item.color}">
            <span>招生年龄</span>
            <span>0-72个月</span>
          </div>
          <div class="course">
            <ul v-for="(sitem,sindex) in item.lesson" :key="sitem.id">
              <router-link
                tag="li"
                :to="item.path"
                :style="{'color': (sindex==0||sindex==1 ? item.color:'black'),'font-weight': (sindex==0||sindex==1 ? '600':'500')}"
              >{{sitem}}</router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 探索与发现 -->
    <div class="hokids-explore">
      <div class="hokids-explore-content">
        <router-link to="/explore" tag="button">探索与发现</router-link>
        <span>
          爱乐祺认为，教育是源自于对每一个生命个体的理解和尊重,
          <br />塑造每一个宝宝优良、完整的人格
        </span>
      </div>
    </div>
    <!-- 教育品牌优势 -->
    <div class="hokids-advantage"></div>
    <div class="picScroll-left">
      <div class="hd">
        <a class="next"></a>
        <a class="prev"></a>
      </div>
      <div class="info">
        <el-carousel trigger="click" class="picList" arrow="always" indicator-position='none'>
          <el-carousel-item class="list">
            <div class="leftList">
              <div>
                <img src="http://www.52alq.com/uploadfile/2018/1219/20181219055834483.jpg" alt />
              </div>
              <div>
                <p class="pp1">
                  <span>
                    <i>01</i>
                  </span>
                  <span class="sp">线上平台数据资源管理</span>
                </p>
                <p>
                  HOKIDS托育早教APP为全国爱乐祺托育早教园所提供数据统计和分析支持；
                  教学课件涵盖视频、图片、课程教案，保证了全国托育早教中心教学专业性和统一性。
                </p>
              </div>
            </div>
            <div class="leftList">
              <div>
                <img src="http://www.52alq.com/uploadfile/2018/1219/20181219055906637.jpg" alt />
              </div>
              <div>
                <p class="pp1">
                  <span style="color:#8dc63f">
                    <i>02</i>
                  </span>
                  <span class="sp">"7+1"管家模式</span>
                </p>
                <p>运营督导团队人员，全部由直营中心的精英团队组成；从选址开业、活动策划、课程安排、会员服务等各个方面，专业高效的为合作伙伴提供全套运营援助。</p>
              </div>
            </div>
          </el-carousel-item>

          <el-carousel-item class="list">
            <div class="leftList">
              <div>
                <img src="http://www.52alq.com/uploadfile/2018/1227/20181227045309323.png" alt />
              </div>
              <div>
                <p class="pp1">
                  <span>
                    <i>03</i>
                  </span>
                  <span class="sp">研发创新</span>
                </p>
                <p>自主研发的核心课程获得多项软件著作权和国家高新技术企业资质；中国教育学会重点课题实施组织单位。</p>
              </div>
            </div>
            <div class="leftList">
              <div>
                <img src="http://www.52alq.com/uploadfile/2018/1227/20181227045623446.png" alt />
              </div>
              <div>
                <p class="pp1">
                  <span style="color:#8dc63f">
                    <i>04</i>
                  </span>
                  <span class="sp">专业优势</span>
                </p>
                <p>拥有12年开设直营单店的经验；定期数据统筹分析帮助盟商伙伴强势招生和高效运营；开设直营店数较多，时间较长的机构；是可以提供托婴早教的机构。</p>
              </div>
            </div>
          </el-carousel-item>

          <el-carousel-item class="list">
            <div class="leftList">
              <div>
                <img src="http://www.52alq.com/uploadfile/2018/1227/20181227045755758.png" alt />
              </div>
              <div>
                <p class="pp1">
                  <span>
                    <i>05</i>
                  </span>
                  <span class="sp">品牌优势</span>
                </p>
                <p>商业模式解决行业痛点，周内场地使用率5倍提升；托育早教标准的制定者，重新定义婴幼儿科学教养模式。</p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 新闻中心 -->
    <p class="tit">NEWS</p>
      <p class="tit">新闻中心</p>
    <div class="newsCon">

       <div
          v-for="item in newsCon"
          :key="item.id"
          @click="goDetail(item.newsId)"
        >
          <div class="con">
            <div>
              <img :src="item.newsIndexImg" alt class="imgg" />
            </div>
            <p class="newsTit">{{item.newsTitle}}</p>
            <p class="time">{{item.createTime}}</p>
            <p class="editor">作者:{{item.newsEditor}}</p>
            <p class="subtit">{{item.newsSubtitle}}</p>
            <p class="rm" @click="goDetail(item.newsId)">READ MORE <i class="el-icon-right"></i></p>
          </div>
        </div>
    </div>

    <!-- 联合认证 -->
    <div class="hokids-authentication">
      <div class="hokids-authentication-l">
        <div>
          <img src="http://www.52alq.com/statics/images/authentication.jpg" alt class="im"/>
          <p class="pname">联合认证</p>
        </div>
        <div class="description">
          <p>国家“十二五”科研重点课题《进阶式入园缓适课程在早期教育中的实践研究》实验园</p>
          <p>国家“十一五”科研重点课题《0-3岁早期教育师资培训研究》实验基地</p>
          <p>全国托育早教服务机构认证标准课题组组长单位</p>
          <p>托育早教研究院组长单位</p>
        </div>
        <div>
          <img src="http://www.52alq.com/uploadfile/2018/1219/201904151808001.jpg" class="image"/>
        </div>
        <br />
      </div>
      <div class="rightImg">

      </div>
    </div>
  </div>
</template>
<script>
import { getEntrepreneurs} from '../api/request'
export default {
  data() {
    return {
      index:'',
      imgs: [
        {
          adr: require("../assets/home1.jpg"),
          desc: "爱乐祺0-3岁托育早教领导品牌",
          path: "/aboutUs"
        },
        {
          adr: require("../assets/home3.jpg"),
          desc: "爱乐祺中国托育早教领导者",
          path: "/lessonIntroduce"
        },
        {
          adr: require("../assets/home2.jpg"),
          desc: "爱乐祺-托育早教领跑未来",
          path: "/joinUs"
        }
      ],
      // 招生年龄
      contents: {
        info: [
          {
            title: "招生年龄",
            age: "0-72个月",
            img:
              "http://www.52alq.com/uploadfile/2018/1219/20181219051506742.jpg",
            color: "#8dc63f",
            path: "/lessonIntroduce",
            lesson: [
              "基础课程",
              "Basic Course",
              "水中早教",
              "亲子育动课",
              "民族主题大厅"
            ]
          },
          {
            title: "招生年龄",
            age: "2-36个月",
            img:
              "http://www.52alq.com/uploadfile/2018/1219/20181219051539745.jpg",
            color: "#fb9505",
            path: "/lessonIntroduce",
            lesson: [
              "核心课程",
              "Core Course",
              "托育早教课程A",
              "托育早教课程B",
              "托育早教课程C"
            ]
          },
          {
            title: "招生年龄",
            age: "18-72个月",
            img:
              "http://www.52alq.com/uploadfile/2018/1219/20181219051558411.jpg",
            color: "#f76930",
            path: "/lessonIntroduce",
            lesson: [
              "提升课程课程",
              "Promote Course",
              "音乐提升",
              "创艺提升",
              "运动提升",
              "蒙氏特色提升"
            ]
          }
        ]
      },
      newsCon:[]
    };
  },
  methods:{
    onchange(e){
      this.index=e
    },
    getNews() {
      let info = {
        pageNum: "",
        pageSize: ""
      };
      //获取创业者说
      getEntrepreneurs(info).then(res => {
        console.log(res.rows)
         this.$store.dispatch("news/Val", res.rows);
       this.newsCon=res.rows.slice(0,3)
      });
      // 分页
    },
    goDetail(id){
      this.$router.push({
        path:`/${id}`,
        query:{
          come:'1'
        }
      })
    },
  },
  created(){
     this.getNews()

  }
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}
el-carousel{
  height: 400px;
  text-align: center;
}
.block {
  height: 400px;
  position: relative;
}
.point{
  position: absolute;
  z-index:999;
  display: flex;
  bottom: 30px;
  left: 50%;
  margin-left: -100px;
  li{
    list-style: none;
    width: 30px;
    height: 30px;
    background-color: gainsboro;
    border-radius: 50%;
    margin-right: 20px;
  }
}
.img1 {
  width: 100%;
  height: 410px;

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
  width: 1200px;
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
    width: 300px;
    margin-top: 100px;
  }
  .p0 {
    color: #1b1b1b;
    font-size: 18px;
    font-weight: bold;
  }
  .p1 {
    width: 70%;
    margin: auto;
    color: #1b1b1b;
    font-size: 14px;
    font-weight: 550;
    line-height: 24px;
  }
}
// 三张图片
.hokids-welcomeicon {
  margin: 51px auto;
  width: 75%;
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
.hokids-welcomeicon div:nth-child(1) {
  background: url(../assets/health.png) no-repeat;
  width: 236px;
  background-size: contain;
}
.hokids-welcomeicon div:nth-child(2) {
  background: url(../assets/comfortable.png) no-repeat;
  width: 236px;
  background-size: contain;
}
.hokids-welcomeicon div:nth-child(3) {
  background: url(../assets/happy.png) no-repeat;
  width: 236px;
  background-size: contain;
}
// 三大课程体系
.hokids-system {
  margin: 0 auto;
  padding-top: 28px;
  width: 100%;
  // max-width: 1920px;
  height: 180px;
  text-align: center;
  color: #fff;
  background: url(../assets/system.jpg) no-repeat center 0;
  background-size: cover;
  font-weight: bold;
  img {
    width: 250px;
  }
  .p1 {
    font-size: 18px;
    margin-top: 3px;
    margin-bottom: 12px;
    font-weight: bold;
  }
  .p2 {
    font-size: 14px;
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
  width: 80%;
  margin: auto;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-around;
  .recruitDiv {
    width: 280px;
    font-size: 12px;
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
  width: 280px;
}
// 探索与发现
.hokids-explore {
  margin: 0 auto;
  width: 100%;
  height: 180px;
  color: #fff;
  background: url(../assets/explore.jpg) no-repeat center 0;
  background-size: cover;
  .hokids-explore-content {
    width: 90%;
    margin: 0 auto;

    button {
      border: none;
      display: inline-block;
      width: 160px;
      height: 40px;
      margin-top: 100px;
      margin-left: 200px;
      background: #fff;
      border-radius: 8px;
      text-align: center;
      line-height: 20px;
      font-size: 20px;
      color: #ff6f3c;
      // border: 1px solid black;

    }
    span {
      display: inline-block;
      width: 500px;
      // border: 1px solid black;
      text-align: left;
      font-size: 16px;
      font-weight: bold;
      margin-left: 220px;
      line-height: 30px;


    }
  }
}
// 教育品牌优势
.hokids-advantage {
  margin: 0 auto;
  width: 100%;
  height: 150px;
  color: #fff;
  background: url(../assets/advantage.jpg) no-repeat center 0;
  background-size: contain;
  margin-bottom: 20px;
}
.info {
  width: 80%;
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
  .leftList:nth-child(2){
    margin-left: 140px;
  }
}

.leftList {
  width: 48%;
  height: 180px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  div {
    color: black;
    img {
      width: 100px;
      margin-left: -30px;
    }

    p {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 12px;
      line-height: 20px;
      .sp {
        font-size: 22px;
        font-weight: bold;
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
  background-color: #ff6f3c;
}
.el-carousel__arrow--right {
  background-color: #ff6f3c;
}

.hokids-authentication{
  display: flex;
  justify-content: space-between;
    // margin-bottom: 0px;
    width: 70%;
    height:550px;
    margin:  50px auto ;
    padding-left: 70px;

}
.rightImg{
  width: 380px;
  background: url(../assets/authenticationbg.jpg) no-repeat center;
  background-size: contain;

}
.hokids-authentication-l{
    width: 400px;
    color: #313131;
}
.hokids-authentication-l .pname{
    font-size: 18px;
    font-weight:bold;
    margin:14px 0 15px;
}
.hokids-authentication-l .description{
    font-size: 16px;
    line-height: 30px;
    // margin-bottom: 28px;
}
.im{
  width: 300px;
}
.hokids-authentication-l li{
    margin-right: 80px;
    float: left;
}
.image{
  width: 400px;
}
#carousel /deep/ .el-carousel__container{
// background: #fff;
  height: 400px;

}
// 新闻
  .tit{
    font-size: 38px;
    font-weight: bold;
    width: 80%;
  margin: auto;
  text-align: center;
  line-height: 60px;

  }
.newsCon {
  width: 90%;
  margin: auto;
  // height: 1000px;
  // border: 1px dashed grey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .con {
    width: 350px;
    height: 480px;
    border: 1Px solid gainsboro;
    margin-top: 50px;
    margin-bottom: 40px;
    line-height: 18px;
    p {
      width: 280px;
      margin: 30px auto;
    }
    .imgg {
      width: 100%;
      height: 190px;
    }

    .newsTit {
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
      cursor: pointer;
    }
    .newsTit:hover {
      color: orange;

    }
    .time,
    .editor,
    .subtit {
      font-size: 12px;
      margin-top: -20px;
    }
  }
}
.rm{
  font-size: 14px;
  font-weight: bold;
  color: #475669;
  cursor: pointer;
}
</style>
<style lang="">
.el-carousel__button{
width: 20px;
height: 20px;
border-radius: 50%;
background-color: orange;
/* top: 200px; */
}
.el-carousel__container{
  height: 200px;
}
</style>



