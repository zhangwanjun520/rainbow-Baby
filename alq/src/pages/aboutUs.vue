<template>
<section>
  <!-- banner图 -->
  <div class="about"></div>
  <!-- about hokids -->
  <div class="hokids">
     <p>
      <img src="http://www.52alq.com/statics/images/about.jpg" alt="">
    </p>
    <p>北京爱乐祺文化发展股份有限公司是一家专业从事托育早教的多元化集团发展公司</p>
     <p>2010年，提出“托育早教”的园所教养模式</p>
     <p class="des">我们的托育早教园所，是欧美国家的“daycare”、日本的“保育园”这样社区式托儿所
       ，中国传统托儿所的结合体教育养育一体化，主要针对0-6岁的婴幼儿及家庭，能够同时满足家庭的托管需求和早期专业教育的需求
爱乐祺是北京爱乐祺文化发展股份有限公司旗下品牌。爱乐祺托育早教中心由北京爱乐祺文化发展股份有限公司运营</p>
  </div>
  <!-- 第二张黄色banner图 -->
  <div class="banner2"></div>

</section>

</template>
<script>
export default {

}
</script>
<style lang="scss" scope>
.about{
  width: 100%;
  height: 564px;
  background: url('http://www.52alq.com/statics/images/banner5.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
 .hokids{
    width: 1200px;
    // height: 400px;
    margin: auto;
    // border: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // line-height: 30px;
    p{
      font-size: 24px;
      img{
        width: 405px;

      }
    }
    .des{
      margin-top: 30px;
      text-align: center;
      line-height: 40px;
      margin-bottom: 50px;
    }
  }
.banner2{
  width: 100%;
  height: 348px;
  background: url('http://www.52alq.com/statics/images/aboutbg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
