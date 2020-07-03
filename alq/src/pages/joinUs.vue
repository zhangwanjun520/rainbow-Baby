<template>
  <div>
    <div class="banner1"></div>

    <section class="hokids-section">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <!-- welcome to hokids  -->
    <div class="hokids-welcome">
      <img src="http://www.52alq.com/statics/images/brand.jpg" alt class="mb20" />

      <p class="p1">
        我们只做托育早教，所以我们有单店的系统化模型；
        从直营起家，所以我们更懂得经营一家托育早教中心，需要什么；
        常说进入托育早教行业是需要情怀；可是到了一定的阶段，是需要转化为以市场为导向的情怀；
        在这里，我们只是想把我们走过的路，摔过的坑，站立起来后收获的掌声和鲜花，真实而详细的展示给您！
      </p>
    </div>
    <!-- banner -->
     <div class="banner2"> </div>
     <div class="banner3">
       <img src="../assets/joinbg3.jpg" alt="">
     </div>
     <!-- 爱乐祺加盟提供“7+1”管家式服务支持 -->
     <div></div>
     <!-- 加盟流程 -->
     <div class="step">
       <div><img src="../assets/joinin.jpg" alt=""></div>
       <div><img src="../assets/process.png" alt=""></div>
     </div>
     <!-- 加盟服务顾问banner -->
     <div class="banner4">
       <div class="jiameng">
                <p>在线提交加盟申请</p>
                <p>或致电我们的加盟服务顾问</p>
                <div class="telphone">
                  <img src="../assets/telphone.png" alt="">
                    <span>400-1000-161</span>
                </div>
            </div>
     </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 564px;
  background: url("../assets/joinbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p:last-child {
    margin-bottom: 50px;
  }
  img {
    width: 575px;
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .p1 {
    color: #1b1b1b;
    font-size: 20px;
    font-weight: 550;
    line-height: 40px;
  }
}
.banner2{
 width: 100%;
  height: 348px;
  background: url("../assets/joinbg2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner3{
  width: 836px;
  height: 881px;
  margin:50px auto;
  img{
  width: 836px;

  }
}




// 加盟流程
.step{
  display: flex;
  flex-direction: column;
  align-items: center;
  div:nth-child(1){
    margin-top: 50px;
    img{
      width: 374px;
    }
  }
  div:nth-child(2){
    margin-top: 50px;
    margin-bottom: 50px;
    img{
      width: 1051px;
    }
  }
}
// 加盟服务顾问
.banner4{
 width: 100%;
  height: 695px;
  background: url("../assets/recruitbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .jiameng{
    padding-top: 100px;
    padding-left: 300px;
    font-size: 30px;
    color: white;
    font-weight: 550;
    .telphone{
      // border: 1px solid;
        width: 369px;

      position: relative;
      img{
        width: 369px;
      }
      span{
        color: black;
        display: inline-block;
        position: absolute;
        top: 20px;
        left: 80px;
      }
    }
  }
}
</style>
