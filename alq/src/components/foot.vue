<template>
  <footer>
    <section class="content">
      <div class="left">
        <p>
          <img src="http://www.52alq.com/statics/images/logoz.png" alt />
        </p>
        <p>地址：北京市东城区广渠门内大街45号雍贵中心D座</p>
        <p>
          增值电信业务经营许可证：
          <a href="http://beian.miit.gov.cn/" style="color:white">京ICP备11016267号-1</a>
        </p>
      </div>
      <div class="middle">
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
      </div>
      <div class="right">
        <p>
          <img src="http://www.52alq.com/statics/images/tel.png" alt />
        </p>
        <p>400-1000-161</p>
        <img src="http://www.52alq.com/statics/images/tel03.png" alt />
        <p class="pp">
          010-53519528
          <span>拨</span> 0
        </p>
        <p>( 工作时间 : 周一至周五 9:00至17:00 )</p>
        <p>分公司所有投诉事宜请拨打总公司全国投诉热线</p>
      </div>
    </section>
  </footer>
</template>
<script>
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
  font-size: 12px;
  width: 100%;
  height: 500px;
  background: #ffaa18;
  display: flex;
  .content {
    width: 1400px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    div {
      // width: 30%;
      display: flex;
      flex-direction: column;
      // background: wheat;
      height: 400px;
      // justify-content: space-around;
      font-weight: 550;
      // margin-top: 50px;
    }
    .left {
      p {
        font-size: 20px;
        color: white;
      }
      p:nth-child(1) {
        img {
          width: 297px;
        }
      }
    }
    .middle {
      // width: 350px;
      display: flex;
      font-size: 18px;
      flex-direction: row;
      ul {
        // border: 1px solid;
        line-height: 50px;
        color: white;
        li {
          width: 100px;
          cursor: pointer;
          // border: 1px solid;
        }
      }
    }
  }
}
.right {
  color: white;
  margin-left: 50px;

  img {
    width: 225px;
  }
  p:nth-child(1) {
    img {
      width: 225px;
    }
  }
  p:nth-child(2) {
    font-size: 34px;
  }
  .pp {
    font-size: 28px;
  }
}
</style>
