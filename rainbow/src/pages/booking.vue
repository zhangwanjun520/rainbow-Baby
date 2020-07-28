<template>
  <div class="booking">
    <!-- 免费预约体验课 -->
    <div class="bookingLesson">
      <div class="content">
        <div class="descr">
             乐享宝宝开学季--免费试听,安心之选
        </div>

        <div class="content2">
          <!-- 表单 -->

          <div class="left">
            <p style="text-align:center;font-weight:bold;font-size:20px;color:white">申请免费试听课程</p>
            <div class="leftCon">
              <p>
                <el-input placeholder="宝宝姓名" v-model="babyName"></el-input>
              </p>

              <p>
                <el-select v-model="by1" placeholder="宝宝生日/年" @change="by2" id="select">
                  <el-option v-for="item in baby" :key="item.id" :value="item"></el-option>
                </el-select>
              </p>
              <p>
                <el-select v-model="by3" placeholder="宝宝生日/月份" @change="by4" id="select">
                  <el-option v-for="item in baby2" :key="item.id" :value="item"></el-option>
                </el-select>
              </p>

              <p>
                <el-input placeholder="您的联系电话" v-model="phoneNumber"></el-input>
              </p>
              <p>
                <el-select v-model="value" placeholder="请选择省" @change="val" id="select">
                  <el-option
                    v-for="item in province"
                    :key="item.id"
                    :value="item"
                    @click.native="getProvinceId(item)"
                  ></el-option>
                </el-select>
              </p>
              <p>
                <el-select placeholder="请选择城市" v-model="cityValue" @change="cityVal">
                  <el-option
                    v-for="item in city"
                    :key="item.id"
                    :value="item"
                    @click.native="getCityId(item)"
                  ></el-option>
                </el-select>
              </p>

              <p>
                <el-select v-model="centerVal" placeholder="预约中心" id="select" @change="centerValue">
                  <el-option
                    v-for="item in center"
                    :key="item.id"
                    :value="item.name"
                    @click.native="stor(item.id)"
                  ></el-option>
                </el-select>
              </p>

              <p class="btnnn">
                <el-button type="warning" @click=" submitInfo">预约课程</el-button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getProvince,
  getCity,
  getCenter,
  submitBabyInfo,
} from "../api/request";
import qs from "qs";

export default {
  data() {
    return {
      // vip体验课程表单
      babyName: "",
      birthday: "",
      baby: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
      by1: "",
      baby2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      by3: "",
      phoneNumber: "",

      textarea: "",
      province: [],
      // v-model绑定的值
      value: "",
      provinceId: "",
      cityValue: "",
      city: "",
      centerName: "",
      center: [],
      allcenter: [],
      centerVal: "",
      cityName: "",
      store: "",
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
    by2(e) {
      this.by1 = e;
    },
    by4(e) {
      this.by3 = e;
    },
    getProvinceInfo() {
      // 获取所有省份
      getProvince().then((res) => {
        this.province = res.data.obj;
      });
    },
    // 修改v-model绑定的值
    val(value) {
      this.value = value;
    },
    getProvinceId(name) {
      // console.log(id);
      this.provinceId = name;
      this.getCityInfo();
    },
    // 获取所有城市
    getCityInfo() {
      let info = {
        province: this.provinceId,
      };
      getCity(qs.stringify(info)).then((res) => {
        console.log(res);
        this.city = res.data.obj;
        // 点击省份默认出现城市（获取默认城市名字和id）
        // this.cityValue = this.city[0];
      });
      this.getAlq();
    },
    cityVal(value) {
      this.cityValue = value;
    },
    // 获取城市id
    getCityId(name) {
      this.cityName = name;
    },

    // 查询地址
    getAlq() {
      let info = {
        province: this.provinceId,
        city: this.cityName,
      };
      console.log(info);
      getCenter(qs.stringify(info)).then((res) => {
        console.log(res);
        this.center = res.data.obj;
      });
    },
    centerValue(e) {
      this.centerVal = e;
    },
    // 提交预约报名体验课程

    stor(id) {
      this.store = id;
    },

    submitInfo() {
      let babyInfo = {
        appointmentProvince: this.provinceId,
        appointmentCity: this.cityName,
        babyBirthMonth: this.by3,
        telephone: this.phoneNumber,
        babyName: this.babyName,
        babyBirthYear: this.by1,
        appointmentStore: this.store,
      };
      if (
        this.provinceId == "" &&
        this.cityName == "" &&
        this.by3 == "" &&
        this.phoneNumber == "" &&
        this.babyName == "" &&
        this.by1 == "" &&
        this.store == ""
      ) {
        this.$message({
          message: "请填写您的信息",
          offset: 200,
          showClose: true,
        });
      } else if (this.phoneNumber == "") {
        this.$message({
          message: "请填写您的手机号码",
          offset: 200,
          showClose: true,
        });
      } else {
        submitBabyInfo(babyInfo).then((res) => {
          if (res.meta.msg == "addApplyTest success") {
            this.$message({
              showClose: true,
              message: "您已提交成功,我们会尽快与您联系",
              type: "success",
              customClass: "mess",
              offset: 200,
            });
          }else if(res.meta.success == false){
              this.$message({
          message:res.meta.msg ,
          offset: 200,
          showClose: true,
        });

          }
        });
      }
    },
  },
  mounted() {},
  created() {
    this.getProvinceInfo();
  },
};
</script>

<style lang="scss" scoped>
// 预约体验课
.bookingLesson {
  width: 100%;
  height: 740px;
  background: url("../assets/rain/nn2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    width: 1400px;
    height: 700px;
    margin: auto;
 position: relative;
    // border: 1px solid;
    .descr{

      font-size: 30px;
      font-weight: 550;
      color: white;
      position: absolute;
      top: 120px;
      left: 760px;
    }
    .content1 {
      img {
        width: 430px;
      }
    }
    .content2 {
      height: 700px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .right {
        margin-right: 50px;

        img {
          width: 550px;
        }
      }
      .left {
        margin-top: 180px;
        margin-left: 600px;
        width: 400px;
        height: 500px;
        // border: 1px dashed #31bb7d;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 20px;

        .leftCon {
          width: 70%;
          margin: auto;
          margin-left: 100px;
        }
      }
    }
  }
}

// 校区信息

.schoolInfo {
  height: auto;
  .img {
    width: 1100px;
    margin: 50px auto;
    img {
      width: 300px;
    }
  }
  .schoolContent {
    width: 1100px;
    height: auto;
    margin: auto;
    border: 1px dashed gainsboro;
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
  font-size: 18px;
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
  width: 1100px;
  height: auto;
  margin: auto;
  border: 1px dashed gainsboro;
  margin-bottom: 50px;
  padding-bottom: 50px;
}
</style>
<style lang="scss">
.ff {
  th {
    background: #31bb7d !important;
    color: white;
  }
}
.schoolContent {
  .el-input__inner {
    width: 185px;
    height: 35px;
    font-size: 12px;
    border: 1px solid gainsboro;
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
  font-size: 16px;
}

// .el-table th,
// .el-table tr {
//   background:  !important;
//   color: white;
//   height: 40px;
// }

.el-table__row {
  font-size: 15px;
  background-color: #eeeeee;
}
// vip课程体验
.left {
  .el-input__inner {
    width: 200px;
    height: 35px;
    font-size: 12px;
    border: 1px solid gainsboro;
    // background-color: red;
  }
}
.leftCon {
  .el-textarea__inner {
    border: 1px solid gainsboro;

    font-size: 12px;
    width: 200px;
    height: 60px;
  }
}
.btnnn {
  margin-left: 50px;
  .el-button {
    background-color: #31bb7d;
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
.el-table--enable-row-transition .el-table__body td {
  border-bottom: 1px solid gainsboro;
}
.el-table__empty-block {
  border-bottom: 1px solid gainsboro;
}
</style>
