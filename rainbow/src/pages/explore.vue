<template>
  <div class="con">
    <section>
      <!-- 第一张banner图 -->
      <div class="banner1">
        <div class="bg"></div>
      </div>
      <!-- 查询 -->
      <div class="search1">
        <div class="search2">
          <div class="left">全国早教中心>{{currentValue}}早教中心</div>
          <div class="right">
            <el-select placeholder="请选择省份" v-model="provinceValue" @change="selectProvince">
              <el-option
                v-for="item in province"
                :key="item.id"
                :value="item"
                @click.native="getCurrentprovince(item)"
              ></el-option>
            </el-select>

             <el-select placeholder="请选择城市" v-model="cityValue" @change="cityVal">
                  <el-option
                    v-for="item in city"
                    :key="item.id"
                    :value="item"
                    @click.native="getCityId(item)"
                  ></el-option>
                </el-select>
          </div>
        </div>
        <div class="search-con">
          <div class="banner"></div>
          <div class="con" v-for="item in center" :key="item.id">
            <div class="left">
              <img src="../assets/rain/brand4.jpg" alt="">
            </div>
            <div class="right">
              <p class="name">{{item.name}}</p>
              <p>地址：{{item.address}}</p>
              <p>联系方式：{{item.phone}}</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getProvince,getCity ,  getCenter} from "../api/request";
import qs from "qs";

export default {
  data() {
    return {
      province: [],
      provinceValue: "",
      currentValue: "",
      detail:[],
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
    };
  },
  methods: {
    getprovince() {
      getProvince().then((res) => {
        console.log(res);
        this.province = res.data.obj;
      });
    },
    selectProvince(value) {
      console.log(value);
      this.provinceValue = value;
    },
    getCurrentprovince(name) {
      this.currentValue = name;
        this.getCityInfo();
    },
        // 获取所有城市
    getCityInfo() {
      let info = {
        province: this.currentValue,
      };
      getCity(qs.stringify(info)).then((res) => {
        this.city = res.data.obj;
      });

    },
     cityVal(value) {
      this.cityValue = value;
    },
    getCityId(name){
      this.cityName=name
      this.getcenter()
    },
    // 查询地址
    getcenter() {
      console.log(this.cityName)
      let info = {
        province: this.currentValue,
        city: this.cityName,
      };

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
  },
  created() {
    this.getprovince();
this.currentValue='北京市'
      let info = {
        province: '北京市',
        city: '市辖区',
      };

      getCenter(qs.stringify(info)).then((res) => {
        console.log(res);
        this.center = res.data.obj;
      });

  },
};
</script>
<style lang="scss" scoped>
.banner1 {
  height: 530px;
  background: url("../assets/rain/aa.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.search1 {
  // height: 500px;
  background-color: #f7f7f7;
  .search2 {
    width: 1000px;
    height: 80px;
    // border: 1px solid;
    margin:  auto;
    // padding-top: 30px;
    line-height: 80px;

    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
  .search-con {
    width: 1000px;
    height: auto;
    margin: auto;
    border: 1px dashed #ebe9e9;


    .banner {
      height: 230px;
      background: url("../assets/rain/new.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .con{
      width: 1000px;
      height: 170px;
      border-bottom: 1px solid #f6f6f6;
      background-color: white;


      .left{
        float: left;
        img{
          width: 200px;
        margin-top: 10px;

        }
      }
      .right{
        float: left;
        margin-left: 30px;
        margin-top: 20px;
        font-size: 14px;
        p:nth-child(1){
          font-size: 19px;
          color: #31bb7d;
          font-weight: 550;
        }
      }
    }

  }
}
</style>
