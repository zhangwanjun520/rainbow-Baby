<template>
  <section>
    <!-- banner图 -->
    <div class="about"></div>
    <!-- about hokids -->
    <div class="hokids">
      <p>
        <img src="http://www.52alq.com/statics/images/about.jpg" alt />
      </p>
      <p>
        北京爱乐祺文化发展股份有限公司是一家专业从事托育早教的多元化集团发展公司
        <br />2010年，提出“托育早教”的园所教养模式
      </p>

      <p class="des">
        我们的托育早教园所，是欧美国家的“daycare”、日本的“保育园”这样社区式托儿所
        ，中国传统托儿所的结合体教育养育一体化，主要针对0-6岁的婴幼儿及家庭，能够同时满足家庭的托管需求和早期专业教育的需求
        爱乐祺是北京爱乐祺文化发展股份有限公司旗下品牌。爱乐祺托育早教中心由北京爱乐祺文化发展股份有限公司运营
      </p>
    </div>
    <!-- 第二张黄色banner图 -->
    <div class="banner2"></div>
    <!-- release of policy effect -->
    <div class="release">
      <div>
        <img src="http://www.52alq.com/statics/images/aboutbg2.jpg" alt="生育政策效应释放托育早教行业市场优先获益" />
      </div>
      <div class="right">
        <p>
          <img src="http://www.52alq.com/statics/images/effect.jpg" alt="生育政策效应释放托育早教行业市场优先获益" />
        </p>
        <p class="size36">生育政策效应释放</p>
        <p class="size36">托育早教行业市场优先获益</p>
        <p class="size18">庞大的基数、稳定的增长与更新，奠定了坚实的客户基础数量</p>
        <p class="size18">国家从2013年十八届三中全会“单独二孩”至2016年“全面二孩”的生育政策效应释放，人口红利显现，而这其中，托育早教行业市场优先获益</p>
        <p class="size18">2017年全国新出生（新增）婴儿数为1758万人（城市新生人口约600万/年）占世界同龄人口的五分之一；其中二孩占比超过50%</p>
      </div>
    </div>
    <!-- 发展历程banner -->
    <div class="banner3">
      <div class="banner3Content">
        <img src="http://www.52alq.com/statics/images/development.png" alt="发展历程" title="发展历程" />
        <img src="http://www.52alq.com/statics/images/aboutbg3.png" alt="发展历程" />
      </div>
    </div>
    <!-- 官方认证 -->
    <div class="offical">
      <p>Authentication</p>
      <p>官方认证</p>
      <p>国家“十二五”科研重点课题《进阶式入园缓适课程在早期教育中的实践研究》实验园</p>
      <p>国家“十一五”科研重点课题《0-3岁早期教育师资培训研究》实验基地</p>
      <p>全国托育早教服务机构认证标准课题组组长单位</p>
      <p>托育早教研究院组长单位</p>
      <p>
        <img src="http://www.52alq.com/statics/images/renzheng.jpg" alt />
      </p>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 350px;
  background: url("http://www.52alq.com/statics/images/banner5.jpg");
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
  text-align: center;
  // line-height: 36px;
  // font-weight: 550;
  p {
    font-size: 16px;
    img {
      width: 250px;
    }
  }
  .des {
    width: 90%;
    margin: auto;
    margin-top:0px;
    text-align: center;
    line-height: 26px;
    margin-bottom: 50px;
  }
}
.banner2 {
  width: 100%;
  height: 200px;
  background: url("http://www.52alq.com/statics/images/aboutbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.release {
  width: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  // border: 1px solid;

  justify-content: space-around;
  div {
    // border: 1px solid;

    img {
      width: 400px;
    }
  }
  .right {
    width: 580px;

    display: flex;
    flex-direction: column;
    // border: 1px solid;
    p:nth-child(1) {
      img {
        width: 450px;
      }
    }
  }
}
.size36 {
  font-size: 18px;
  font-weight: bold;
  line-height: 10px;
}
.size18 {
  font-size: 14px;
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
.offical {
  width: 80%;
  margin: 60px auto;
  text-align: center;
  p {
    font-size: 16px;
  }
  p:nth-child(1) {
    font-size: 30px;
    font-weight: bold;

  }
  p:nth-child(2) {
    font-size: 24px;
    font-weight: bold;
  }
  p:last-child {
    img {
      width: 400px;
    }
  }
}
</style>
