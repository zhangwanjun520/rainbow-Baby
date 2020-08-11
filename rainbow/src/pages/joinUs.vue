<template>
  <div>
    <!-- 加盟服务顾问banner -->
    <div class="banner4">
      <!-- 表单信息 -->
      <div class="personInfo">
        <p class="tit">申请加盟合作</p>
        <div class="one">
          <span class="type">姓名</span>
          <el-input v-model="name" placeholder="请输入姓名"></el-input>
        </div>
        <div class="two">
          <span class="type">意向省份</span>
          <el-select v-model="provinceValue" placeholder="请选择省/市" @change="selectProvimce" id="sel">
            <el-option
              v-for="(item,index) of provincearr"
              :key="index"
              :label="item.name"
              :value="item.id"

            ></el-option>
          </el-select>
        </div>

        <div class="two">
          <span class="type">意向城市</span>
          <el-select v-model="cityValue" placeholder="请选择城市" @change="selectcity" id="sel">
            <el-option
              v-for="(item,index) of cityarr"
              :key="index"
              :label="item.name"
              :value="item.id"

            ></el-option>
          </el-select>
        </div>

        <!-- <div class="two">
          <span class="type">意向县/区</span>
          <el-select placeholder="请选择县/区" v-model="RegionValue" id="sel">
            <el-option
              v-for="(item,index) of regionarr"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div> -->

        <div class="one">
          <span class="type">联系电话</span>
          <el-input v-model="phone" placeholder="请输入电话号码"></el-input>
          <p class="mistakeCon">{{mistakePhone}}</p>
        </div>

        <div class="btn">
          <p class="but">
            <el-button  @click=" submitInfo">立即申请</el-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 加盟我们下的介绍 -->
    <!-- <div class="titt" >我们的优势</div> -->
    <div class="intro">
      <div class="con">
        <el-col :span="8" v-for="item in content" :key="item.id">
          <el-card shadow="always">
            <p>
              <img :src="item.img" alt />
            </p>

            <p>{{item.name}}</p>
            <p>{{item.content}}</p>
          </el-card>
        </el-col>
      </div>
      <div class="cl"></div>
    </div>
  </div>
</template>
<script>
import { submitJoiner, getIntro } from "../api/request";
import { data, province, city } from "../api/city";

import qs from "qs";

export default {
  data() {
    return {
      activeName: "1",
      // 表单姓名
      name: "",
      value: "",
      moneyValue: "",
      allProvince: [],
      allCity: [],
      phone: "",
      city: "",
      //  正则验证错误提示
      mistakePhone: "",
      flag: true,
      judgePhone: "",
      cityval: "",
      arr: [1, 3, 4],
      province: [],
      cityarr: [],
      regionarr: [],
      provinceValue: "",
      cityValue: "",
      RegionValue: "",
      content: [],
      provin:'',
      cityy:''
    };
  },
  methods: {
    val(e) {
      console.log(e);
      this.value = e;
    },
    money(e) {
      console.log(e);
      this.moneyValue = e;
    },

    selectProvimce(id) {
      this.cityarr = [];
      this.regionarr = [];
      this.cityValue = "";
      this.RegionValue = "";
      for (let item of this.provincearr) {
        if (id == item.id) {
          // console.log(item);
          this.cityarr = item.children;
        }
      }
    },

    selectcity(id) {
      this.regionarr = [];
      this.RegionValue = "";
      for (let item of this.cityarr) {
        if (id == item.id) {
          this.regionarr = item.children;
        }
      }
    },

    //表单加盟信息提交

    submitInfo() {
      let info = {
        name: this.name,
        phone: this.phone,
        province: this.provinceValue,
        city: this.cityValue,
      };
      if (
        this.name == "" &&
        this.provinceValue == "" &&
        this.phone == "" &&
       this.cityValue == ""
      ) {
        this.$message({
          message: "请填写您的信息",
          offset: 200,
          showClose: true,
        });
      } else if (this.judgePhone != true) {
        this.$message({
          message: "手机号错误",
          offset: 200,
          showClose: true,
        });
      } else if (this.judgePhone == true) {
        submitJoiner(info).then((res) => {
          if (res.msg == '操作成功') {
            this.$message({
              showClose: true,
              message: "您已提交成功,我们会尽快与您联系",
              type: "success",
              customClass: "mess",
              offset: 200,
            });
          }
            else if(res.code=1111){
           this.$message({
          message: res.meta.msg,
          offset: 200,
          showClose: true,
        });


          }
        });
      }
    },
    // 加盟我们下的品牌介绍
    // channel=league&moduleNum=1
    getintro() {

      getIntro().then((res) => {
      console.log(res)
      this.content=res.rows
      });
    },
  },
  created() {
    this.provincearr = province;

    this.getintro();
  },
  watch: {
    phone(newVal, oldVal) {
      if (
        !/^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/.test(
          newVal
        )
      ) {
        this.mistakePhone = "号码格式错误";
        this.judgePhone = false;
      } else {
        this.mistakePhone = "";
        this.judgePhone = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  // width: 800px;
  // height: 50px;
  line-height: 50px;
  background: red;
  color: #fff;
}
#sup2 /deep/.el-carousel__container {
  // background: #fff;
  height: 441px;
}
// 加盟服务顾问
.banner4 {
  width: 100%;
  height: 700px;
  background: url("../assets/rain/join.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .jiameng {
    padding-top: 50px;
    padding-left: 200px;
    font-size: 23px;
    color: white;
    font-weight: 550;
    .telphone {
      width: 189px;
      position: relative;
      img {
        width: 220px;
      }
      span {
        color: black;
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 50px;
      }
    }
  }
}
// 表单
.personInfo {
  width: 400px;
  height: 430px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);

  right: 100px;
  top: 195px;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  font-weight: 550;
  .tit {
    font-size: 22px;
    text-align: center;
    margin-top: 30px;
  }
}
.one {
  width: 90%;
  margin: auto;
  // border: 1px solid;
  // margin-left: 30px;
}
.two {
  width: 90%;
  margin: 30px auto;
  // margin-left: 65px;
}
.type {
  display: inline-block;
  width: 100px;
  margin-right: 12px;
  // border: 1px solid;
  text-align: right;
}
.type2 {
  display: inline-block;
  width: 100px;
  margin-right: 20px;
  // border: 1px solid;
  text-align: right;
  margin-bottom: 30px;
}
.btn {
  width: 60px;
  height: auto;
  // margin: auto;
  margin-top: 35px;
  margin-left: 140px;
  // background-color: rgb(1, 172, 202);
  margin-bottom: 20px;
}
.mistakeCon {
  font-size: 12px;
  font-weight: normal;
  margin-left: 130px;
}
.titt{
  width: 100%;
  text-align: center;
  margin-top: 70px;
  font-size: 36px;
    color:#31bb7d;
  font-weight: 550;
}
.intro {
  width: 100%;
  margin: 50px auto;
   background: url("../assets/rain/conb.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .cl {
    clear: both;
  }
  .con {
    width: 1200px;
    margin: auto;
    .el-col-8 {
      width: 280px;
      height: 320px;
      margin-left: 20px;
      margin-bottom: 20px;
      .el-card.is-always-shadow,
      .el-card.is-hover-shadow:focus,
      .el-card.is-hover-shadow:hover {
        width: 280px;

        height: 320px;
      }
    }
    p {
      width: 95%;
      margin: auto;
    }
    p:nth-child(1) {
      text-align: center;
      img {
        width: 90px;
      }
    }
    p:nth-child(2) {
      text-align: center;
      margin-top: 15px;
      margin-bottom: 10px;
      font-size: 17px;
      color: black;
      font-weight: 550;
    }
    p:nth-child(3) {
      font-size: 13px;
      color: #666666;
      line-height: 22px;
    }
  }
}
</style>
<style lang="scss">
/* //  <!-- 爱乐祺加盟提供“7+1”管家式服务支持 全局样式--> */

.sup1 {
  .el-collapse-item__header {
    background-color: rgb(1, 172, 202);
    height: 45px;
    font-size: 14px;
    color: white;
    font-weight: 550;
    text-indent: 1em;
  }
}

.el-collapse-item__content {
  font-size: 14px;
  height: 258px;
  overflow: auto;
}
.el-collapse-item__content > div {
  width: 95%;
  margin: 15px auto;
}
.one,
.two {
  .el-input__inner {
    width: 155px;
    height: 35px;
    font-size: 12px;
  }
}
.rad {
  margin-left: 15px;
}
.rad > span {
  color: white;
  font-size: 12px;
}
.one {
  .el-input {
    width: auto;
  }
}
.one {
  .el-textarea {
    width: 150px;
    height: 60px;
    .el-textarea__inner {
      width: 148px;
      height: 60px;
    }
  }
}
.btn {
  .el-button--primary {
    background-color: #f09a81;
    border-color: white;
  }
}
</style>
<style lang="scss">
.el-message__content {
  font-size: 20px;
}
.one .el-textarea {
  font-size: 12px;
}
.but {
  .el-button {
    background-color: #31bb7d;
    font-size: 12px;
    width: 150px;
    height: 35px;
    border: none;
    color: white;
    // border-radius: 8px;
    // margin-top: 20px;
  }
}
</style>

