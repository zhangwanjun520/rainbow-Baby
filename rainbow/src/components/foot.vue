<template>
  <footer>
    <section class="content">
      <div class="img">
        <img src="../assets/rain/bottom-logo.png" alt="">
      </div>
      <div class="left">

        <p>地址：北京市东城区广渠门内大街45号雍贵中心</p>
               <p>
              <i class="el-icon-phone"></i>服务热线： 400-6677-870 &nbsp;&nbsp;&nbsp;&nbsp; <i class="el-icon-s-platform"></i>官方网站： www.52chbaby.com
            </p>
        <p>
          <router-link tag="span" to="/aboutUs">关于我们</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link tag="span" to="/explore">探索发现</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link tag="span" to="/booking">预约试听</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link tag="span" to="/joinUs">加盟合作</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link tag="span" to="/lessonIntroduce">课程介绍</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link tag="span" to="/newCenter">新闻中心</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <!-- <router-link tag="span" to="/joinUs">加盟我们</router-link>&nbsp;&nbsp;&nbsp;&nbsp; -->
          <!-- <router-link tag="span" to="/provicy">隐私条款</router-link> -->
        </p>

            <p>

            </p>
         <p>京ICP备20012741号 &nbsp;&nbsp; 时亦睿宝（北京）文化有限公司</p>

        <!-- <p>
          增值电信业务经营许可证：
          <a href="http://beian.miit.gov.cn/" style="color:white">京ICP备11016267号-1</a>
        </p>-->
      </div>


          <div class="left">



            <p>
              <i class="el-icon-location"></i>总部地址： 北京市东城区广渠门内大街45号雍贵中心
            </p>
            <p>
              <i class="el-icon-s-custom"></i>市场合作： 请将资料发送至邮箱：rainbowbaby001@163.com
            </p>
            <p>
              <i class="el-icon-s-cooperation"></i>职位申请： 请将资料发送至邮箱：rainbowbaby001@163.com
            </p>
                  <p class="wb">
              <span>
                <img src="../assets/rain/sina.png" alt style="width:15px" />
              </span>官方微博
              <a
                href="https://weibo.com/6502554934/manage"
                class="aa"
                style="color:white"
              >:https://weibo.com/6502554934/manage</a>&nbsp;&nbsp;&nbsp;&nbsp; <i class="el-icon-s-finance"></i>邮编地址： 100055
            </p>



        <!-- <p>
          增值电信业务经营许可证：
          <a href="http://beian.miit.gov.cn/" style="color:white">京ICP备11016267号-1</a>
        </p>-->
      </div>
      <!-- <div class="middle">
        <ul>
          <router-link tag="li" to="/aboutUs">关于我们</router-link>
          <router-link tag="li" to="/explore">探索发现</router-link>
          <router-link tag="li" to="/booking">预约试听</router-link>
          <router-link tag="li" to="/joinUs">联系我们</router-link>
        </ul>

        <ul>
          <router-link tag="li" to="/lessonIntroduce">课程介绍</router-link>
          <router-link tag="li" to="/newCenter">新闻中心</router-link>
          <router-link tag="li" to="/joinUs">加盟我们</router-link>
          <router-link tag="li" to="/provicy">隐私条款</router-link>
        </ul>
      </div>-->
      <!-- <div class="right">
        <p>
          <img src="http://www.52alq.com/statics/images/tel.png" alt /><br>
          <span style="font-size:34px;line-height:50px"> 400-1000-161</span>
        </p>

        <img src="http://www.52alq.com/statics/images/tel03.png" alt />
        <span style="font-size:22px;line-height:40px">
           010-53519528
          <span style="font-size:16px;line-height:40px">拨</span> 0
        </span>

        <p style="line-height:20px;font-size:10px;font-weight:normal">
          ( 工作时间 : 周一至周五 9:00至17:00 )
          <br />分公司所有投诉事宜请拨打总公司全国投诉热线
        </p>
      </div>-->
    </section>
    <!-- <div class="hokids-foot-content">

      <p>京ICP备20012741号 &nbsp;&nbsp; 时亦睿宝（北京）文化有限公司</p>
    </div> -->
  </footer>
</template>
<script>
import { submitMsg } from "../api/request";
export default {};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
ul > li {
  list-style: none;
}
* {
  box-sizing: border-box;
}
footer {
  width: 100%;

  background: url("../assets/rain/bottom.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 14px;
  width: 100%;
  height: 270px;

  display: flex;
  flex-direction: column;

  position: relative;
  .content {
        width: 1200px;
    height: 230px;
    // border: 1px solid white;

    margin: 30px auto;
    display: flex;
    justify-content: space-around;
    .img{
      margin-top: 40px;
    }

    div {

      float: left;
       margin-right: 50px;
      height: 160px;
      font-weight: 550;

    }
    .left {
      p {
        font-size: 14px;
        color: white;
        margin-top: 20px;
      }
      p:nth-child(1) {
        img {
          width: 160px;
        }
      }
    }

  }
}


.hokids-foot-content {
  // border: 1px solid;
  color: white;
  text-align: center;
  padding-top: 30px;
}
</style>

