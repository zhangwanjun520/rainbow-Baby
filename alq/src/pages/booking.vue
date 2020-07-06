<template>
  <div class="booking">
    <div class="banner1"></div>
    <section class="hokids-section">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <!-- 免费预约体验课 -->
    <div></div>
    <!-- 深度打造托育早教。。。banner -->
    <div class="banner2"></div>
    <!-- 爱乐祺省市校区信息 -->
    <div class="schoolInfo">
      <div class="schoolContent">
        <!-- 省 -->
        <el-select v-model="value" placeholder="请选择省份" @change="val" id="select">
          <el-option v-for="item in province" :key="item.id" :value="item.name"></el-option>
        </el-select>
        <!-- 市 -->
        <el-select placeholder="请选择城市" @focus="getCityInfo" v-model="value">
          <el-option v-for="item in city" :key="item.id" :value="item.name" @click="vale(item)"></el-option>
        </el-select>
        <!-- 中心 -->
        <!-- <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
        </el-select>-->
      </div>
    </div>
  </div>
</template>
<script>
import { getProvince, getCity } from "../api/request";
export default {
  data() {
    return {
      province: [],
      // v-model绑定的值
      value: "",
      index: "",
      city:''
    };
  },
  methods: {
    getProvinceInfo() {
      // 获取所有省份
      getProvince().then(res => {
        console.log(res);
        this.province = res.rows;
      });
    },
    // 修改v-model绑定的值
    val(e) {
      console.log(e);
      this.value = e;
    },
    vale(it){
      console.log(it)
    },
    // 获取所有城市
    getCityInfo() {
      this.province.forEach(item=>{
        this.index=item.id
      })
      let info = {
       provinceId: Number(this.index)
      };
      getCity(info).then(res => {
        this.city=res.rows
        // console.log(res);

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
// 校区信息

.schoolInfo {
  height: 600px;
  .schoolContent {
    width: 1400px;
    height: 600px;

    margin: auto;
    border: 1px solid;
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
</style>
