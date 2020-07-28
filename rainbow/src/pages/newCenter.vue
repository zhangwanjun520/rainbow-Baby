<template>
  <div class="newsCenter">
    <div class="banner1"></div>
    <section class="hokids-section">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <!-- 新闻中心 -->
    <div class="box">
         <div class="news">
      <div
        class="news1"
        style="font-size:34px;padding-top:50px;color:#31bb7d;font-weight:bold"
      >新闻资讯</div>
      <div class="tabTitle">
        <div class="t1">
          <p
            @click="cur = 0"
            :style="{'color':(cur==0?'#31bb7d':'')}"
            style="font-size:18px"
          >
            新闻动态
            <el-divider direction="vertical"></el-divider>
          </p>
          <p
            @click="getConnt2"
            :style="{'color':(cur==1?'#31bb7d':'')}"
            style="font-size:18px"
          >
            活动预告
            <el-divider direction="vertical"></el-divider>
          </p>
          <p
            @click="getConnt3"
            :style="{'color':(cur==2?'#31bb7d':'')}"
            style="font-size:18px"
          >活动回顾</p>
        </div>
      </div>

      <div class="newsCon" v-if="cur == 0">
        <div class="noData" v-if="flag">
          <el-button :loading="true" style="border:none;background:#f7f7f7">加载中</el-button>
        </div>
        <div
          v-for="titem in con.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="titem.id"
          @click="goDetail(titem.id)"
        >
          <div class="con">
            <div>
              <img :src="titem.img" alt class="imgg" />
            </div>
            <p class="newsTit">{{titem.title}}</p>
            <p class="time">{{titem.createTimeStr}}</p>
            <!-- <p class="editor">作者:{{titem.newsEditor}}</p> -->
            <p class="subtit">{{titem.intro}}</p>
          </div>
        </div>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="6"
            :total="con.length"
          ></el-pagination>
        </div>
      </div>
      <div class="newsCon" v-if="cur == 1">
        <div class="noData" v-if="flag2">
          <el-button :loading="true" style="border:none;background:#f7f7f7">加载中</el-button>
        </div>
        <div
          v-for="titem in con2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="titem.id"
          @click="goDetail(titem.id)"
        >
          <div class="con">
            <div>
              <img :src="titem.img" alt class="imgg" />
            </div>
            <p class="newsTit">{{titem.title}}</p>
            <p class="time">{{titem.createTimeStr}}</p>
            <!-- <p class="editor">作者:{{titem.newsEditor}}</p> -->
            <p class="subtit">{{titem.intro}}</p>
          </div>
        </div>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="6"
            :total="con2.length"
          ></el-pagination>
        </div>
      </div>

      <div class="newsCon" v-if="cur == 2">
        <div class="noData" v-if="flag3">
          <el-button :loading="true" style="border:none;background:#f7f7f7">加载中</el-button>
        </div>
        <div
          v-for="titem in con3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="titem.id"
          @click="goDetail(titem.id)"
        >
          <div class="con">
            <div>
              <img :src="titem.img" alt class="imgg" />
            </div>
            <p class="newsTit">{{titem.title}}</p>
            <p class="time">{{titem.createTimeStr}}</p>
            <!-- <p class="editor">作者:{{titem.newsEditor}}</p> -->
            <p class="subtit">{{titem.intro}}</p>
          </div>
        </div>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="6"
            :total="con3.length"
          ></el-pagination>
        </div>
      </div>
      <div class="cl"></div>
    </div>
    </div>

  </div>
</template>
<script>
import { getNews } from "../api/request";
import qs from "qs";

export default {
  data() {
    return {
      num: 0,
      title: ["全国中心活动", "创业者说"],
      con: [],
      con2: [],
      con3: [],
      currentPage: 1,
      pagesize: 6,
      flag: true,
      flag2: true,
      flag3: true,
      cur: 0,
    };
  },
  methods: {
    // 分页
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    //当前页currentPage
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
    cli(ind) {
      this.num = ind;
    },
    getnews() {
      let info = {
        channel: "ayjdt",
      };
      // 获取全国活动中心活动
      getNews(qs.stringify(info)).then((res) => {
        this.con = res.data.pageInfo.list;
        this.flag = false;
        this.con.forEach((item) => {
          item.img = "http://52chbaby.com/api/" + item.photo;
        });
      });
    },
    getConnt2() {
      this.cur = 1;
      let info = {
        channel: "hdyg",
      };
      getNews(qs.stringify(info)).then((res) => {
        this.con2 = res.data.pageInfo.list;
        this.flag2 = false;

        this.con2.forEach((item) => {
          item.img = "http://52chbaby.com/api/" + item.photo;
        });
      });
    },
    getConnt3() {
      this.cur = 2;
      let info = {
        channel: "hdhg",
      };
      getNews(qs.stringify(info)).then((res) => {
        this.con3 = res.data.pageInfo.list;
        this.flag3 = false;
        this.con3.forEach((item) => {
          item.img = "http://52chbaby.com/api/" + item.photo;
        });
      });
    },

    // 跳到详情页
    goDetail(id) {
      // console.log(id)
      this.$router.push({
        path: `/${id}`,
        query: {
          come: "1",
          newsId: id,
        },
      });
    },
  },
  created() {
    this.getnews();
  },
};
</script>
<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 580px;
  background: url("../assets/rain/ass.jpg");
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
// 新闻中心
.box{
  width: 100%;
height: auto;
  //     background: url("../assets/rain/conb.jpg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  background-color: #f7f7f7;


}
.news1 {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;


  img {
    width: 450px;
    margin: 80px 0 80px 0;
  }
}
.cl{
  clear: both;
}
.tabTitle {
  width: 80%;
  margin: 10px auto;
  font-weight: bold;
  // border: 1px dashed gainsboro; /*no*/
  font-size: 34px;
  .t1 {
    display: flex;
    width: 300px;
    margin: auto;
    // border: 1px solid;
    justify-content: space-around;
  }
}
.noData {
  width: 80%;
  height: 100px;
  margin: auto;
  // border: 1px dashed gainsboro; /*no*/
  text-align: center;
  color: #666666;
  line-height: 100px;
}
.newsCon {
  width: 1200px;
  margin: auto;

  // height: 1000px;
  // border: 1px dashed gainsboro; /*no*/
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .con {
    width: 380px;
    height: 540px;
  margin-left: 15px;
    // border: 1px solid gainsboro; /*no*/
    // margin-top: 50px;
    margin-bottom: 70px;
    line-height: 30px;
    background-color: white;
    p {
      width: 90%;
      margin: 30px auto;
    }
    .imgg {
      width: 100%;
      height: 280px;
    }

    .newsTit {
      font-size: 16px;
      line-height: 30px;
      font-weight: bold;
    }
    .newsTit:hover {
      color: #31bb7d;
      cursor: pointer;
    }
    .time,
    .editor,
    .subtit {
      font-size: 14px;
      margin-top: -20px;
    }
  }
}

.subtit {
  position: relative;
  line-height: 20px;
  max-height: 60px;
  overflow: hidden;
}
.subtit::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 40px;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}
.pagination {
  width: 90%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
<style lang="scss">
.btnn {
  .el-button {
    width: 180px;
    height: 60px;
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }
}
.pagination{
  .el-pagination .btn-next .el-icon,
.el-pagination .btn-prev .el-ico{
background-color: #f7f7f7;

  font-size: 18px;
}
.el-pager li {
  font-size: 18px;
background-color: #f7f7f7;

}
.el-pagination button:disabled{
background-color: #f7f7f7;
  font-size: 18px;


}
.el-pagination .btn-next{
background-color: #f7f7f7;

}
.el-pagination .btn-prev{
  font-size: 18px;

background-color: #f7f7f7;

}
.el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon{
  font-size: 18px;

}

}




</style>
