<template>
  <div class="booking">
    <div class="banner1"></div>
    <section class="hokids-section">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <!-- 免费预约体验课 -->
    <div class="bookingLesson">
      <div class="content">
        <div class="content1">
          <img src="../assets/vip.jpg" alt />
        </div>
        <p class="desc">爱乐祺最大的优点，是我们只做托育早教，并且将托育早教的各个模块做到极致</p>
        <div class="content2">
          <!-- 表单 -->
          <div class="left">
            <div class="leftCon">
              <p>
                <el-input placeholder="宝宝姓名" v-model="babyName"></el-input>
              </p>
              <p>
                <el-input placeholder="宝宝生日" v-model="birthday"></el-input>
              </p>
              <p>
                <el-input placeholder="您的联系电话" v-model="phoneNumber"></el-input>
              </p>

              <p>
                <el-select
                  v-model="bookingValue"
                  placeholder="预约城市"
                  @change="bookingval"
                  id="select"
                >
                  <el-option v-for="item in allCity" :key="item.id" :value="item"></el-option>
                </el-select>
              </p>
              <p>
                <el-select v-model="objectVal" placeholder="课程选择" id="select" @change="objVal">
                  <el-option v-for="item in object" :key="item.id" :value="item"></el-option>
                </el-select>
              </p>
              <p>
                <el-input type="textarea" :rows="2" placeholder="留言" v-model="textarea"></el-input>
              </p>
              <p class="btnnn">
                <el-button type="warning" @click=" submitInfo">预约课程</el-button>
              </p>
            </div>
          </div>
          <!-- 图片 -->
          <div class="right">
            <img src="../assets/listenbg.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 深度打造托育早教。。。banner -->
    <div class="banner2"></div>
    <!-- 爱乐祺省市校区信息 -->
    <div class="schoolInfo">
      <div class="img">
        <img src="../assets/address.jpg" alt />
      </div>
      <div class="schoolContent">
        <p class="lookfor">查询校区信息</p>
        <div class="schoolContent1">
          <!-- 省 -->
          <span class="des">省份</span>
          <el-select v-model="value" placeholder="请选择省/市" @change="val" id="select">
            <el-option
              v-for="item in province"
              :key="item.id"
              :value="item.name"
              @click.native="getProvinceId(item.id)"
            ></el-option>
          </el-select>
          <!-- 市 -->
          <span class="des">城市</span>
          <el-select placeholder="请选择城市" v-model="cityValue" @change="cityVal">
            <el-option
              v-for="item in city"
              :key="item.id"
              :value="item.name"
              @click.native="getCityId(item.id)"
            ></el-option>
          </el-select>
          <!-- 中心 -->
          <span class="des">中心</span>
          <el-input placeholder="请输入中心名称" v-model="centerName"></el-input>
          <span class="des2">
            <el-button icon="el-icon-search" circle @click="getAlq"></el-button>
          </span>
        </div>
        <!-- 查询信息 -->
        <div class="searchInfo">
          <el-table :data="center" border style="width: 100%" id="tab" row-class-name="warning-row"   header-row-class-name="ff">
            <el-table-column prop="coreProvince" label="省份" width="180" header-row-class-name="ff"></el-table-column>
            <el-table-column prop="coreCity" label="城市" width="180"></el-table-column>
            <el-table-column prop="coreName" label="中心名称" width="180"></el-table-column>
            <el-table-column prop="coreAddress" label="地址"></el-table-column>
          </el-table>
        </div>
        <!-- 大中国地图 -->
        <div class="map">
          <div class="mapImg1">
            <img src="http://www.52alq.com/statics/images/map.png" alt />
            <div class="mapImg2">
              <img src="../assets/map.png" alt />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <!-- 所有校区信息 -->
    <div class="allSchool">
      <p class="lookfor2">所有校区信息</p>
      <div class="searchInfo">
        <el-table
          :data="allcenter"
          border
          style="width: 100%"
          id="tab"
          row-class-name="warning-row"
          header-row-class-name="ff"
        >
          <el-table-column prop="coreProvince" label="省份" width="180"  ></el-table-column>
          <el-table-column prop="coreCity" label="城市" width="180"></el-table-column>
          <el-table-column prop="coreName" label="中心名称" width="180"></el-table-column>
          <el-table-column prop="coreAddress" label="地址"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getProvince,
  getCity,
  getDetailAlq,
  submitBabyInfo
} from "../api/request";
export default {
  data() {
    return {
      // vip体验课程表单
      babyName: "",
      birthday: "",
      phoneNumber: "",
      bookingValue: "",
      allCity: [
        "北京市",
        "上海市",
        "天津市",
        "重庆市",
        "河北省",
        "山西省",
        "吉林省",
        "辽宁省",
        "黑龙江省",
        "陕西省",
        "甘肃省",
        "青海省",
        "山东省",
        "福建省",
        "浙江省",
        "河南省",
        "湖北省",
        "湖南省",
        "江西省",
        "江苏省",
        "安徽省",
        "广东省",
        "海南省",
        "四川省",
        "贵州省",
        "云南省",
        "台湾省",
        "内蒙古自治区",
        "新疆维吾尔自治区",
        "宁夏回族自治区",
        "广西壮族自治区",
        "西藏自治区",
        "香港特别行政区",
        "澳门特别行政区"
      ],
      object: ["基础课程", "核心课程", "提升课程"],
      objectVal: "",
      textarea: "",
      province: [],
      // v-model绑定的值
      value: "",
      provinceId: "",
      city: "",
      cityValue: "",
      centerName: "",
      center: [],
      allcenter: []
      // 学校信息表格
    };
  },
  methods: {
    bookingval(e) {
      this.bookingvalue = e;
    },
    objVal(e) {
      this.objectVal = e;
    },
    getProvinceInfo() {
      // 获取所有省份
      getProvince().then(res => {
        console.log(res);
        this.province = res.rows;
        this.$store.dispatch("adressInfo/Val", this.province);
      });
    },
    // 修改v-model绑定的值
    val(value) {
      console.log(value);
      this.value = value;
    },
    getProvinceId(id) {
      // console.log(id);
      this.provinceId = id;
      this.getCityInfo();
    },
    // 获取所有城市
    getCityInfo() {
      let info = {
        provinceId: Number(this.provinceId)
      };
      getCity(info).then(res => {
        this.city = res.rows;
        // 点击省份默认出现城市（获取默认城市名字和id）
        this.cityValue = this.city[0].name;
        this.cityId = this.city[0].id;
        // console.log(res);
      });
    },
    cityVal(value) {
      this.cityValue = value;
    },
    // 获取城市id
    getCityId(id) {
      this.cityId = id;
    },
    // 获取全部地址
    getAllAlq() {
      let info = {
        coreProvince: "",
        coreCity: ""
      };
      getDetailAlq(info).then(res => {
        console.log(res);
        this.allcenter = res.rows;
      });
    },
    // 查询地址
    getAlq() {
      let info = {
        coreProvince: this.provinceId,
        coreCity: this.cityId
      };
      console.log(info);
      getDetailAlq(info).then(res => {
        // console.log(res)
        this.center = res.rows;
      });
    },

    // 提交预约报名体验课程
    submitInfo() {
      let babyInfo = {
        babyName: this.babyName,
        babyBirthday: this.birthday,
        phone: this.phoneNumber,
        province: this.bookingValue,
        course: this.objectVal,
        remarks: this.textarea
      };
      if (
        this.babyName == "" &&
        this.birthday == "" &&
        this.phoneNumber == "" &&
        this.bookingValue == "" &&
        this.objectVal == "" &&
        this.textarea == ""
      ) {
        this.$message({
          message: "请填写您的信息",
          offset: 200,
          showClose: true
        });
      } else if (this.phoneNumber == "") {
        this.$message({
          message: "请填写您的手机号码",
          offset: 200,
          showClose: true
        });
      } else {
        submitBabyInfo(babyInfo).then(res => {
          if (res.msg == "操作成功") {
            this.$message({
              showClose: true,
              message: "您已提交成功",
              type: "success",
              customClass: "mess",
              offset: 200
            });
          }
        });
      }
    }
  },
  mounted() {

  },
  created() {
    this.getProvinceInfo();
       this.getAllAlq();
  }
};
</script>

<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 380px;
  background: url("../assets/booking-banner.jpg");
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
.banner2 {
  width: 100%;
  height: 200px;
  background: url("../assets/listenbg2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
// 预约体验课
.bookingLesson {
  width: 100%;
  height: 80%;
  .content {
    width: 85%;
    height: 1000px;
    margin: auto;
    .desc {
      font-size: 20px;
      font-weight: 550;
    }
    .content1 {
      margin-top: 80px;
      img {
        width: 380px;
      }
    }
    .content2 {
      margin-top: 50px;
      border: 1px dashed grey;
      height: 700px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .right {
        margin-right: 50px;

        img {
          width: 450px;
        }
      }
      .left {
        margin-left: 50px;
        width: 400px;
        height: 600px;
        border: 1Px dashed #eb6100;

        .leftCon {
          width: 70%;
          margin: auto;
          p {
            margin-top: 40px;
          }
        }
      }
    }
  }
}

// 校区信息

.schoolInfo {
  height: auto;
  .img {
    width:80% ;
    margin:50px auto;
    img {
      width: 250px;
    }
  }
  .schoolContent {
    width: 80%;
    height: auto;
    margin: auto;
    border: 1Px dashed gainsboro;
    margin-bottom: 80px;


    .schoolContent1 {
      margin: 60px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

    }
  }
}
.des {
  width: 200px;
  margin-left: 50px;
  font-size: 14px;
  // margin-right: 20px;
}
.map {
  width: 600px;
  margin: 80px auto;
  img {
    display: inline-block;
    width: 600px;

  }
  .mapImg1 {
    position: relative;
  }
  .mapImg2 {
    position: absolute;
    bottom: 0px;
  }
}
.lookfor {
  width: 350px;
  margin-top: 30px;
  font-size: 26px;
  font-weight: bold;
  margin: 30px auto;
  text-align: center;
}
.lookfor2 {
  width: 350px;
  margin-top: 50px;
  font-size: 26px;
  font-weight: bold;
  margin: 50px auto;
  text-align: center;
}
.allSchool {
  width: 80%;
  height: auto;
  margin: auto;
  border: 1Px dashed gainsboro;
  margin-bottom: 50px;
  padding-bottom: 50px;
}

</style>
<style lang="scss">
.ff{
  th{
  background: #eb6100 !important;
  color: white;
  }

}
.schoolContent {
  .el-input__inner {
    width: 185px;
    height: 35px;
    font-size: 12px;
    border: 1Px solid gainsboro;
  }
}
.des2 {
  margin-right: 100px;
  .el-icon-search {
    font-size: 14px;
    font-weight: bold;
  }
}
#tab {
  text-align: center;
}
.has-gutter {
  font-size: 14px;
}

// .el-table th,
// .el-table tr {
//   background:  !important;
//   color: white;
//   height: 40px;
// }

.el-table__row {
  font-size: 12px;
  background-color: #eeeeee;
}
// vip课程体验
.left {
  .el-input__inner {
    width: 200px;
    height: 35px;
    font-size: 12px;
    border: 1Px solid gainsboro;
    // background-color: red;
  }
}
.leftCon {
  .el-textarea__inner {
    border: 1Px solid gainsboro;

    font-size: 12px;
    width: 200px;
    height: 60px;
  }
}
.btnnn {
  .el-button {
    background-color: #eb6100;
    font-size: 12px;
    width: 100px;
    height: 40px;
  }
}
#tab {
  .el-table__empty-text {
    font-size: 12px;
  }
}
.el-table .warning-row {
  background: white;
  color: gray;
}
.el-message__content {
  font-size: 12px;
}
.el-table--enable-row-transition .el-table__body td{
 border-bottom: 1Px solid gainsboro;
}
.el-table__empty-block{
 border-bottom: 1Px solid gainsboro;

}
</style>
