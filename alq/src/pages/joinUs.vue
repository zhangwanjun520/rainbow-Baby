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
    <div class="banner2"></div>
    <div class="banner3">
      <img src="../assets/joinbg3.jpg" alt />
    </div>
    <!-- 爱乐祺加盟提供“7+1”管家式服务支持 -->
    <div class="attentiveBox">
          <div class="attentive">
      <p>
        <img src="../assets/service.png" alt />
      </p>
      <p>
        爱乐祺加盟提供
        <br />“7+1”管家式服务支持
      </p>
      <!-- 筹备期支持，运营期支持 -->
      <div class="sup">
        <div class="sup1">
          <div class="title">筹备期支持</div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="选址装修支持" name="1">
              <div>—— 专业运营督导一对一指导场地的选址、评估、审核工作</div>
              <div>—— SI标准化装修手册，精细到厘米的装修材质标准，根据经营场址的特性免费设计场地功能区划分</div>
              <div>—— VI视觉规范系统，总部设计工程师提供CAD施工、效果图纸，确保环境细节的使用和规范</div>
            </el-collapse-item>
            <el-collapse-item title="市场靶向推广支持" name="2">
              <div>—— 国内行业信息、区域市场调研分析，靶向市场宣传投入获取目标客户</div>
              <div>—— 《市场推广手册》详细讲解客户形象定位、开业活动策划，异业同盟谈判技巧</div>
              <div>—— 全国专家巡回讲座，专业普及婴幼儿科学教养。</div>
            </el-collapse-item>
            <el-collapse-item title="师资招聘支持" name="3">
              <div>—— 《人力资源管理手册》全程指导团队建设</div>
              <div>—— 国内2大招聘平台，同时发布人员招聘信息</div>
              <div>—— 7个学前教育专业高校合作，保证师资的专业输出（含配送)</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>—— 体验式全员培训体系，每月开班，提升团队凝聚力、成员执行力、师资技能专业</div>
              <div>—— 《HOKIDS商学院年度培训框架表》月度定期常规培训、师资提升培训、市场销售培训、季度精英再造训练营时间规划；考核评估宽进严出，制定行业标准</div>
              <div>—— 发放“全国托育早教服务认证标准课题组”执业证书，全员持证上岗、证书公示、编码查询</div>
              <div>—— 明星讲师云端视频互动培训，系列课程不断升级，远程也能接触最先进的教学标准</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="sup2">
          <div class="title">运营期支持</div>
          <el-carousel trigger="click" indicator-position="none" id="sup2">
            <el-carousel-item class="sup2Content">
              <p class="img">
                <img src="../assets/run.jpg" alt />
              </p>
              <p>
                · 总部电话客服实时对接客户口碑，量化服务标准
                <br />· 客户成交报名，“爱乐祺客户管理系统”的合同录入24小时之内，致电客户欢迎新会员加入
                <br />· 会员开卡上课30天时，致电会员家长，增进客户粘度做满意度回访；提高单店课程出勤率
                <br />· 会员生日祝福、解决客诉、提醒会员续费等增值服务
              </p>
              <p class="subtitle">全国电话客服支持</p>
            </el-carousel-item>

            <el-carousel-item class="sup2Content">
              <p class="img">
                <img src="../assets/run2.jpg" alt />
              </p>
              <p>
                · 业绩经营指标分解，各部门岗位个人目标确定，全方位支持开业
                <br />· 预售活动策划，帮助单店市场预热，快速资金回笼
                <br />· 签订《业绩保障协议》总部督导下店支持，保障开业前期的招生数量和业绩收入
              </p>
              <p class="subtitle">开业经营支持</p>
            </el-carousel-item>

            <el-carousel-item class="sup2Content"  >
              <p class="img">
                <img src="../assets/run3.jpg" alt />
              </p>
              <p>
                · 微信营销平台线上集赞、砍价等营销活动，增加区域市场曝光度；并能实现近点约课、在线选课
                <br />· 年度大型“全国早教师节”“品牌周年庆”活动，多渠道宣传推广支撑，全员狂欢
                <br />· 总部官网开设专项招生页面，全面覆盖地方区域的线上宣传
              </p>
              <p class="subtitle">大市场运营支持</p>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="sup3">
          <div class="people">
            <p>
              12年直营单店的运营管理经验支持<br>
              “管家”式服务支持
            </p>

            <p><img src="../assets/people.png" alt="">
                        <p>督导一对一管家服务<br/>全程跟踪开业筹备、招生业绩、课程教学、会员管理服务</p>
<p>HOKIDS托育早教管理系统提供统计收入确认、损益分析、签约提醒、销售跟踪、平台约课、定时视频监控等全方位的服务支持</p>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>


    <!-- 加盟流程 -->
    <div class="step">
      <div>
        <img src="../assets/joinin.jpg" alt />
      </div>
      <div>
        <img src="../assets/process.png" alt />
      </div>
    </div>
    <!-- 加盟服务顾问banner -->
    <div class="banner4">
      <div class="jiameng">
        <p>在线提交加盟申请</p>
        <p>或致电我们的加盟服务顾问</p>
        <div class="telphone">
          <img src="../assets/telphone.png" alt />
          <span>400-1000-161</span>
        </div>
      </div>
      <!-- 表单信息 -->
      <div class="personInfo">
        <p class="tit">“城市合伙人”招募计划</p>
         <div class="one">
           <span class="type">姓名</span> <el-input v-model="name" placeholder="请输入姓名"></el-input>

         </div>
         <div class="two">
           <span class="type">性别</span>
           <el-radio v-model="radio" label="1" class="rad">男</el-radio>
             <el-radio v-model="radio" label="2" class="rad">女</el-radio>

         </div>
         <div class="two">
            <span class="type">意向城市</span>  <el-select v-model="value" placeholder="请选择省/市" @change="val" id="sel">
             <el-option v-for="item in $store.state.adressInfo.provinceInfo" :key="item.id" :value="item.name" ></el-option>
        </el-select>
         </div>
            <div class="two">
            <span class="type">投资能力</span>  <el-select v-model="moneyValue" placeholder="请选择投资额度" @change="money" id="sel">
             <el-option v-for="item in moneyType" :key="item.id" :value="item" ></el-option>
        </el-select>
         </div>
           <div class="one">
           <span class="type">联系电话</span> <el-input v-model="phone" placeholder="请输入电话号码"></el-input>
           <p class="mistakeCon">{{mistakePhone}}</p>

         </div>
             <div class="one">
           <span class="type">邮箱</span> <el-input v-model="email" placeholder="请输入邮箱"></el-input>
           <p class="mistakeCon">{{mistakeEmail}}</p>

         </div>
               <div class="one">
           <span class="type2">留言</span><el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea">
</el-input>

         </div>
         <div class="btn">
             <el-button type="primary">提交</el-button>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      // 表单姓名
      name:'',
      // 表单性别
       radio: '1',
       value:'',
       moneyValue:'',
       moneyType:[
         "50万以下",
         '50万-100万',
         '100万-150万',
         '150万-200万',
         '200万以上'
       ],
       phone:'',
       email:'',
       textarea:'',
      //  正则验证错误提示
       mistakePhone:'',
       mistakeEmail:''

    };

  },
  methods:{
     val(e) {
      console.log(e);
      this.value = e;
    },
     money(e) {
      console.log(e);
      this.moneyValue = e;
    },
  },
  created() {
    console.log(this)
  },
  watch:{
    // phone(newVal,oldVal){
    // if(!(/^1[3456789]\d{9}$/.test(newVal))){
    //     this.mistakePhone='手机号格式错误'
    //     return false;
    // } else{
    //   this.mistakePhone=''
    //     return true;

    // }
    // },
    //     email(newVal,oldVal){
    // if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(newVal))){
    //     this.mistakeEmail='邮箱格式错误'
    //     return false;
    // } else{
    //   this.mistakeEmail=''
    //     return true;
    // }
    // }
  }
};
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
    font-size: 24px;
    font-weight: 550;
    line-height: 40px;
  }
}
.banner2 {
  width: 100%;
  height: 348px;
  background: url("../assets/joinbg2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner3 {
  width: 836px;
  height: 881px;
  margin: 50px auto;
  img {
    width: 836px;
  }
}

//  <!-- 爱乐祺加盟提供“7+1”管家式服务支持 -->
.attentiveBox{
  width: 100%;
  height: auto;
  background-color: #eee;
  padding-bottom: 100px;
}
.attentive {
  width: 1700px;
  display: flex;
  flex-direction: column;

  margin: auto;
  // border: 1px solid;
  img {
    width: 497px;
    margin-bottom: -40px;
  }
  p {
    text-align: center;
    font-size: 34px;
    font-weight: bold;
  }
}
.sup {
  display: flex;
  justify-content: space-around;
  .title {
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-weight: bold;
    color: white;
    background-color: #f07855;
    font-size: 24px;
  }
  .sup1,
  .sup2,
  .sup3 {
    width: 550px;
    height: 700px;
    // border: 1px solid;
  }
}
.swiper-container {
  width: 100%;
  height: 620px;
  // background-color: red;
}

.sup2Content {
  background-color: white;
  p {
    img {
      width: 100%;
      margin-top: -20px;
    }
  }
  p {
    font-size: 20px;
    text-align: left;

    font-weight: normal;
  }
  p:nth-child(2) {
    width: 95%;
    margin: 60px auto;
    line-height: 36px;
  }
  p:nth-child(1) {
    position: relative;
  }
  .subtitle {
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: rgba($color: #000000, $alpha: 0.4);
    top: 250px;
    text-align: center;
    line-height: 60px;
    font-weight: 550;
    color: white;
    font-size: 22px;
  }
}
.sup3{
  background:#f07855 ;
  p:nth-child(1){
    font-size: 28px;
  }
  p{
    font-size: 28px;
color: white;
font-weight: 550;;
    img{
      width: 151px;
    }
  }
   p:nth-child(3){
    font-size: 24px;
    font-weight: 500;
line-height: 40px;
    margin-top: 80px;
  }
  p:nth-child(4){
    font-size: 24px;
    font-weight: 500;
line-height: 40px;


  }
}
// 加盟流程
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  div:nth-child(1) {
    margin-top: 80px;
    img {
      width: 374px;
    }
  }
  div:nth-child(2) {
    margin-top: 50px;
    margin-bottom: 50px;
    img {
      width: 1051px;
    }
  }
}
#sup2 /deep/.el-carousel__container {
  // background: #fff;
  height: 620px;
}
// 加盟服务顾问
.banner4 {
  width: 100%;
  height: 800px;
  background: url("../assets/recruitbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .jiameng {
    padding-top: 100px;
    padding-left: 300px;
    font-size: 30px;
    color: white;
    font-weight: 550;
    .telphone {
      // border: 1px solid;
      width: 369px;
      position: relative;
      img {
        width: 369px;
      }
      span {
        color: black;
        display: inline-block;
        position: absolute;
        top: 20px;
        left: 80px;
      }
    }
  }
}
// 表单
.personInfo{
  width: 650px;
  height: 800px;
  position: absolute;
  background: #f07855;
  right: 150px;
  top: -50px;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-weight: 550;
  .tit{
    font-size: 30px;
    text-align: center;
    margin-top: 30px;
  }
}
.one{
  width: 90%;
  margin: 20px auto;
  margin-left: 65px;
}
.two{
  width: 90%;
  margin: 20px auto;
  margin-left: 65px;

}
.type{
  display: inline-block;
  width: 100px;
  margin-right: 20px;
  // border: 1px solid;
  text-align: right;
}
.type2{
  display: inline-block;
  width: 100px;
  margin-right: 20px;
  // border: 1px solid;
  text-align: right;
  margin-bottom: 100px;
}
.btn{
  width: 60px;
  height: auto;
  margin:  auto;
  background-color: #f09a81;
  margin-bottom: 20px;

}
.mistakeCon{
  font-size: 14px;
  font-weight: normal;
  margin-left: 130px;
}
</style>
<style lang="scss">
/* //  <!-- 爱乐祺加盟提供“7+1”管家式服务支持 全局样式--> */

.el-collapse-item__header {
  background-color: #f09a81;
  height: 67px;
  font-size: 20px;
  color: white;
  font-weight: 550;
  text-indent: 1em;
}

.el-collapse-item__content {
  font-size: 20px;
  height: 350px;
  overflow: auto;
}
.el-collapse-item__content > div {
  width: 95%;
  margin: 15px auto;
}
.one,.two{
  .el-input__inner{
    width: 280px;
    height: 50px;
        font-size: 18px;
  }
}
.rad{
  margin-left: 15px;
}
.rad>span{
  color: white;
  font-size: 20px;
}
.one{
  .el-input {
    width: auto;

  }
}
.one{
  .el-textarea{
    width: 280px;
    height: 200px;
    .el-textarea__inner{
      width: 285px;
      height: 180px;
    }
  }

}
.btn{
  .el-button--primary{
     background-color: #f09a81;
     border-color: white;
  }

}
</style>

