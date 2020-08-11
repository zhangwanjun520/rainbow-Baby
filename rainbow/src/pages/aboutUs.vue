<template>
  <section>
    <!-- banner图 -->
    <div class="about">
      <div class="name">
        <!-- ——— 彩红贝贝 ———
        <br />
        <span style="font-size:18px">CaiHong Baby</span>-->
        <img src="../assets/rain/tit.png" alt />
      </div>
    </div>
    <!-- about hokids -->
    <div class="intro">
      <div class="hokids">
        <p>
企业介绍

          <br />
          <span style="font-size:12px;color:#31bb7d">——— Company Profile ———</span>
        </p>
        <p v-html=" html_decode(content)"></p>
      </div>
    </div>

    <!--品牌理念 -->

    <!-- release of policy effect -->
    <div class="brand">
      <div class="release">
        <div class="right">
          <p class="size36">
            品牌理念
            <br />
            <span style="font-size:12px;color:#31bb7d">——— Brand Concept ———</span>
          </p>

          <!-- <p class="size18">彩红贝贝,专注于为0-6岁婴幼儿提供“科学教养”“专业看护”一体化的综合服务,致力于成为中国普惠托育早教行业的倡导者和托育行业民族品牌的践行者。</p>

          <p class="size18">当下,由于3岁以下婴幼儿照料的政策体系不够完善,机构运营风险压力大等困难,托育机构发展缓慢,服务供给不足,3岁以下婴幼儿面临入托困难这一难题。</p>-->
          <p class="size18" v-html="html_decode(brand)"></p>
        </div>
      </div>
    </div>

    <!-- 发展目标 -->
    <div class="brand active">
      <div class="release">
        <div class="right">
          <p class="size36">
            发展目标
            <br />
            <span style="font-size:12px;color:#31bb7d">——— Development Goals ———</span>
          </p>
          <!-- <p
            class="size18"
          >自2019年开始,彩红贝贝托育园区已遍及在北京、福建,贵州,云南,广西,江苏,浙江,新疆,青海,甘肃,安徽,山东,山西,吉林,湖北,湖南,河北等30多个城市,计划未来3年彩红贝贝普惠型园区将遍及中国的每一个城市,为全国的宝宝提供专业的托育和早教社区配套服务,真正的做到每一个人每一个家庭都上得起的托育早教品牌。真正的做到“爱有标准,爱无距离”。</p>-->

          <p class="size18" v-html="html_decode(development)"></p>
        </div>
      </div>
    </div>

    <!-- 师资力量 -->

    <div class="brand active2">
      <div class="release">
        <div class="right">
          <p class="size36">
            师资力量
            <br />
            <span style="font-size:12px;color:color:#31bb7d">——— Teacher Resources ———</span>
          </p>

          <p class="size18" v-html="html_decode(teacher)"></p>
        </div>
      </div>
    </div>
    <!-- 专家团队 -->
    <div class="teacher">
      <div>
        行业标准
        <br />
        <span style="font-size:12px; color:#31bb7d;">——— Operation Standard ———</span>
      </div>
      <div class="info">
        <div>
          <video height="400px" controls="controls">
            <source src="../assets/rain/vid.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <video height="400px" controls="controls" style="margin-top:70px">
            <source src="../assets/rain/vid2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>

    <!-- 荣誉资质 -->
    <div class="hon">
      <p class="honour">
        荣誉资质
        <br />
        <span style="font-size:12px;color:#31bb7d">——— Honorary Certificate ———</span>
      </p>
      <div class="block">
        <el-carousel trigger="click" id="caro" arrow="always" type="card">
          <el-carousel-item v-for="item in honour" :key="item.id" class="ll">
            <div style="text-align:center">
              <img :src="item.img" :alt="item.name" class="img1" style="margin:auto;" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 联系我们 -->
    <!-- <div class="hon active4">
      <div class="honour">
        联系我们
        <br />
        <span style="font-size:12px;color:#666666">——— Connect Us ———</span>
      </div>
      <div class="lastCon">
        <el-col :span="8">
          <el-card shadow="always">

            <p class="wb">
              <span>
                <img src="../assets/rain/weibo.png" alt style="width:15px" />
              </span>官方微博
              <a
                href="https://weibo.com/6502554934/manage"
                class="aa"
              >:https://weibo.com/6502554934/manage</a>
            </p>
            <p>
              <i class="el-icon-s-finance"></i>邮编地址： 100055
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" style="width:460px;margin-top:20px">
            <p>
              <i class="el-icon-location"></i>总部地址： 北京市东城区广渠门内大街45号雍贵中心
            </p>
            <p>
              <i class="el-icon-s-custom"></i>市场合作： 请将资料发送至邮箱：rainbowbaby001@163.com
            </p>
            <p>
              <i class="el-icon-s-cooperation"></i>职位申请： 请将资料发送至邮箱：rainbowbaby001@163.com
            </p>
          </el-card>
        </el-col>
      </div>
    </div>-->
  </section>
</template>
<script>
import { getUs, getHonour, getAboutUs } from "../api/request";
import qs from "qs";
export default {
  data() {
    return {
      content: "",
      honour: [],
      companyIntro: "",
      // 品牌理念
      brand: "",
      development: "",
      teacher: "",
    };
  },
  methods: {
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
    getaboutus() {
      getAboutUs().then((res) => {
        this.content = res.data.qyjs;
        this.brand = res.data.ppln;
        this.development = res.data.fzmb;
        this.teacher = res.data.szll;
      });
    },

    // 获荣誉资质
    gethonour() {
      getHonour().then((res) => {
        console.log(res);
        this.honour=res.rows

      });
    },
  },
  created() {
    this.getaboutus();
    this.gethonour();

  },
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 570px;
  background: url("../assets/rain/news.jpg");
  background-position: center -40px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .name {
    width: 600px;
    height: 160px;
    font-size: 38px;
    padding-top: 30px;
    font-weight: 550;
    // background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    color: white;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -300px;
    text-align: center;
    position: absolute;
    img {
      width: 600px;
    }
  }
}
.intro {
  width: 100%;
  height: auto;

  color: #666666;
}

.hokids {
  font-weight: 550;

  width: 1200px;
  // height: 400px;
  margin: auto;

  text-align: center;
  p:nth-child(1) {
    font-size: 36px;
    margin-top: 40px;
    color: #31bb7d;
  }
  p:nth-child(2) {
    margin-bottom: 50px;
  }

  p {
    font-size: 20px;
    line-height: 40px;
  }
}
// 品牌理念
.brand {
  width: 100%;
  height: auto;
  background: url("../assets/rain/pinpai.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 30px;
  padding-bottom: 50px;
}
.release {
  width: 90%;
  margin: auto;
  // border: 1px solid;
  padding-top: 50px;

  margin-bottom: 30px;
  display: flex;

  div {
    img {
      width: 400px;
    }
  }
  .right {
    width: 480px;
    margin-left: 60%;
    p:nth-child(1) {
      img {
        width: 450px;
      }
    }
  }
}
.size36 {
  width: auto;
  text-align: center;
  font-size: 36px;
  font-weight: 550;
  margin-top: 40px;
  color: #31bb7d;
  // color: #666666;
}
.size18 {
  font-size: 16px;
  color: #666666;
}

// 发展目标
.active {
  background: url("../assets/rain/city.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  .right {
    margin-left: 0px;
  }
}

// 师资力量
.active2 {
  background: url("../assets/rain/teacher.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  .right {
    width: 600px;
    margin-left: 60%;
    margin-top: -50px;
    .size18 {
      font-size: 16px;
      line-height: 30px;
    }
  }
}

// 专家团队
.teacher {
  // background: url("../assets/rain/conb2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #31bb7d;
  div:nth-child(1) {
    width: 100%;
    // color: #666666;
    text-align: center;
    padding-top: 50px;
    // margin-bottom: 50px;
    font-size: 36px;
    font-weight: 550;
  }
  .info {
    width: 1200px;
    // height: 300px;
    margin: auto;
    div {
      width: 100%;
      text-align: center;
    }
    // border: 1px solid;
    // video {
    //   float: left;
    //   margin-left:50px;
    // }
    // border: 1px solid;
  }
}
// 荣誉资质
.hon {
  width: 100%;
  height: 600px;
  // background: url("../assets/rain/conb.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.honour {
  width: 100%;
  text-align: center;
  padding-top: 70px;
  margin-bottom: 50px;
  font-size: 36px;
  font-weight: 550;
  color: #31bb7d;
}
.block {
  width: 900px;
  margin: auto;
  height: 400px;
}

.banner3 {
  width: 100%;
  // height: 728px;
  background: #eee;
  .banner3Content {
    margin: auto;
    width: 1000px;
    display: flex;
    flex-direction: column;
    img:nth-child(1) {
      width: 350px;
      margin-top: 100px;
    }
    img:nth-child(2) {
      width: 1000px;
      margin-top: 50px;
      margin-bottom: 120px;
    }
  }
}

// 联系我们
.active4 {
  width: 100%;
  height: 500px;
  background: url("../assets/rain/conb.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  font-size: 14px;
}
.lastCon {
  width: 1100px;
  margin: auto;
  height: 400px;
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
  p:hover {
    cursor: pointer;
    color: #31bb7d;
  }

  .el-card {
    width: 400px;
  }
}
.wb {
  .aa {
    color: #303133;
  }
}
.wb:hover {
  .aa {
    color: #31bb7d;
  }
}
</style>
<style lang="scss">
#caro {
  .el-carousel__container {
    height: 300px;
  }
}
</style>
