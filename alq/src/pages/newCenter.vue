<template>
  <div class="newsCenter">
    <div class="banner1"></div>
    <section class="hokids-section">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <!-- 新闻中心 -->
    <div class="news">
      <div class="news1">
        <img src="../assets/news.jpg" alt />
      </div>
      <div class="tabTitle">
        <div class="t1">
          <p @click="cur = 0" >
            <el-button plain :style="{'color':(cur==0?'#2CAEFF':'')}">全国中心活动</el-button>
          </p>
          <p @click="cur = 1">
            <el-button plain :style="{'color':(cur==1?'#2CAEFF':'')}">创业者说</el-button>
          </p>
        </div>
      </div>

      <div class="newsCon" v-if="cur == 0">
         <div class="noData" v-if="flag"><el-button  :loading="true">加载中</el-button></div>
        <div
          v-for="titem in con.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="titem.id"
          @click="goDetail(titem.newsId)"
        >
          <div class="con">
            <div>
              <img :src="titem.newsIndexImg" alt class="imgg" />
            </div>
            <p class="newsTit">{{titem.newsTitle}}</p>
            <p class="time">{{titem.createTime}}</p>
            <p class="editor">作者:{{titem.newsEditor}}</p>
            <p class="subtit">{{titem.newsSubtitle}}</p>
          </div>
        </div>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="4"
            :total="con.length"
          ></el-pagination>
        </div>
      </div>
      <div class="newsCon" v-if="cur == 1">
        <div
          v-for="titem in con2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :key="titem.id"
          @click="goDetail(titem.newsId)"
        >
          <div class="con">
            <div>
              <img :src="titem.newsIndexImg" alt class="imgg" />
            </div>
            <p class="newsTit">{{titem.newsTitle}}</p>
            <p class="time">{{titem.createTime}}</p>
            <p class="editor">作者:{{titem.newsEditor}}</p>
            <p class="subtit">{{titem.newsSubtitle}}</p>
          </div>
        </div>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="4"
            :total="con2.length"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getEntrepreneurs,
  getProvince,
  getAllCenterActivities
} from "../api/request";
export default {
  data() {
    return {
      num: 0,
      title: ["全国中心活动", "创业者说"],
      con: [],
      con2: [],
      currentPage: 1,
      pagesize: 4,
      flag: true,
      cur: 0
    };
  },
  methods: {
    // 分页
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    //当前页currentPage
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    cli(ind) {
      this.num = ind;
    },
    getNews() {
      let info = {
        pageNum: "",
        pageSize: ""
      };
      // 获取全国活动中心活动
      getAllCenterActivities(info).then(res => {

        this.con = res.rows;
          this.flag = false;

      });
    },
    getConnt2() {
      let info = {
        pageNum: "",
        pageSize: ""
      };
      getEntrepreneurs(info).then(res => {
        this.cur == 1;

        this.con2 = res.rows;
        this.flag = false;
          console.log(this.con2.length);
      });
    },

    // 跳到详情页
    goDetail(id) {
      // console.log(id)
      this.$router.push({
        path: `/${id}`,
        query: {
          come: "1"
        }
      });
    }
  },
  created() {
    this.getNews();
    this. getConnt2()

  }
};
</script>
<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 380px;
  background: url("../assets/news-banner1.jpg");
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
.news1 {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 300px;
    margin: 80px 0 80px 0;
  }
}
.tabTitle {
  width: 80%;
  margin: 10px auto;
  font-weight: bold;
  border: 1px dashed gainsboro; /*no*/
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
  width: 80%;
  margin: auto;
  // height: 1000px;
  border: 1px dashed gainsboro; /*no*/
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .con {
    width: 400px;
    height: 540px;
    border: 1px solid gainsboro; /*no*/
    margin-top: 50px;
    margin-bottom: 70px;
    line-height: 30px;
    p {
      width: 90%;
      margin: 30px auto;
    }
    .imgg {
      width: 100%;
      height: 220px;
    }

    .newsTit {
      font-size: 14px;
      line-height: 26px;
      font-weight: bold;
    }
    .newsTit:hover {
      color: orange;
      cursor: pointer;
    }
    .time,
    .editor,
    .subtit {
      font-size: 13px;
      margin-top: -20px;
    }
  }
}

.subtit {
  position: relative;
  line-height: 20px;
  max-height: 100px;
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

.el-pagination .btn-next .el-icon,
.el-pagination .btn-prev .el-icon {
  font-size: 16px;
}
.el-pager li {
  font-size: 16px;
}
</style>
