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
                  <el-option v-for="item in province" :key="item.id" :value="item.name"></el-option>
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
              <p class="btnn">
                <el-button type="warning">预约课程</el-button>
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
          <el-table :data="center" border style="width: 100%" id="tab" row-class-name="warning-row">
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
      </div>
    </div>
  </div>
</template>
<script>
import { getProvince, getCity, getDetailAlq } from "../api/request";
export default {
  data() {
    return {
      // vip体验课程表单
      babyName: "",
      birthday: "",
      phoneNumber: "",
      bookingValue: "",
      object: ["基础课程", "核心课程", "提升课程"],
      objectVal: "",
      textarea: "",
      province: [],
      // v-model绑定的值
      value:"",
      provinceId: "",
      city: "",
      cityValue: "",
      centerName: "",
      center: ""
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

        console.log(res);
      });
    },
    cityVal(value) {
      this.cityValue = value;
    },
    // 获取城市id
    getCityId(id) {
      this.cityId = id;
    },
    // 获取具体地址
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
    }
  },
  created() {
    this.getProvinceInfo();
  }
};
</script>

<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 564px;
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
  height: 348px;
  background: url("../assets/listenbg2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
// 预约体验课
.bookingLesson {
  width: 100%;
  height: 1200px;
  .content {
    width: 85%;
    height: 1100px;
    margin: auto;
    .desc {
      font-size: 30px;
      font-weight: 550;
    }
    .content1 {
      margin-top: 80px;
      img {
        width: 635px;
      }
    }
    .content2 {
      margin-top: 50px;
      border: 1px dashed grey;
      height: 840px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        margin-right: 50px;

        img {
          width: 741px;
        }
      }
      .left {
        margin-left: 50px;
        width: 600px;
        height: 760px;
        border: 1px dashed #eb6100;

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
    margin: 80px 0px 50px 260px;
    img {
      width: 434px;
    }
  }
  .schoolContent {
    width: 1400px;
    height: auto;
    margin: auto;
    border: 1px dashed grey;
    margin-bottom: 80px;

    .schoolContent1 {
      margin: 80px auto;
      // border: 1px solid;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
.des {
  width: 200px;
  margin-left: 50px;
  font-size: 20px;
  // margin-right: 20px;
}
.map {
  width: 944px;
  margin: 180px auto;
  img {
    display: inline-block;
    width: 944px;
  }
  .mapImg1 {
    position: relative;
  }
  .mapImg2 {
    position: absolute;
    bottom: 0px;
  }
}
</style>
<style lang="scss">
.schoolContent {
  .el-input__inner {
    width: 300px;
    height: 60px;
    font-size: 20px;
    // background-color: red;
  }
}
.des2 {
  margin-right: 100px;
  .el-icon-search {
    font-size: 30px;
    font-weight: bold;
  }
}
#tab {
  text-align: center;
}
.has-gutter {
  font-size: 24px;


}


.el-table th,
.el-table tr {
  background: #eb6100;
  color: white;
  height: 60px;
}
.el-table__row {
  font-size: 22px;
  background-color: #eeeeee;
}
// vip课程体验
.left {
  .el-input__inner {
    width: 400px;
    height: 60px;
    font-size: 20px;
    border: 1px solid gray;
    // background-color: red;
  }
}
.leftCon {
  .el-textarea__inner {
    border: 1px solid gray;

    font-size: 20px;
    width: 400px;
    height: 100px;
  }
}
.btnn{
  .el-button{
    background-color:#eb6100 ;
    font-size: 18px;
    width: 140px;
    height: 50px;
  }
}
#tab{
  .el-table__empty-text{
    font-size: 20px;
  }
}
  .el-table .warning-row {
    background: white;
    color: gray;
  }
</style>
