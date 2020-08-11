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
        <!-- <div
          class="news1"
          style="font-size:34px;padding-top:50px;color:#31bb7d;font-weight:550;padding-bottom:50px"
        >新闻资讯</div> -->
        <!-- <div class="tabTitle"> -->
          <!-- <div class="t1">
            <p @click="cur = 0" :style="{'color':(cur==0?'#31bb7d':'')}" style="font-size:18px">
              新闻动态
              <el-divider direction="vertical"></el-divider>
            </p>
            <p @click="getConnt2" :style="{'color':(cur==1?'#31bb7d':'')}" style="font-size:18px">
              活动预告
              <el-divider direction="vertical"></el-divider>
            </p>
            <p
              @click="getConnt3"
              :style="{'color':(cur==2?'#31bb7d':'')}"
              style="font-size:18px"
            >活动回顾</p>
          </div> -->
        <!-- </div> -->

        <div class="newsCon" v-if="cur == 0" style="padding-top:70px">
          <div class="noData" v-if="flag">
            <el-button :loading="true" style="border:none;background:#f7f7f7;color:gray">加载中</el-button>
          </div>
          <div
            v-for="titem in con"
            :key="titem.id"
            @click="goDetail(titem.newsId)"
          >
            <div class="con">
              <div>
                <img :src="titem.newsIndexImg" alt class="imgg" />
              </div>
              <div style="height:130px">
                    <p class="newsTit">{{titem.newsTitle}}</p>
              <p class="time">{{titem.createTimeStr}}</p>
              <!-- <p class="editor">作者:{{titem.newsEditor}}</p> -->
              <p class="subtit">{{titem.newsSubtitle}}</p>

              </div>

              <div class="more">
                <div>
                  {{titem.createTime}}
                </div>
                <div @click="goDetail(titem.newsId)">
                  更多>>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页 -->
          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
                  :current-page="currentPage"
              layout="prev, pager, next"
              :page-size="6"
              :total="totalCount"
            ></el-pagination>
          </div>
        </div>
        <!-- <div class="newsCon" v-if="cur == 1">
          <div class="noData" v-if="flag2">
            <el-button :loading="true" style="border:none;background:#f7f7f7">加载中</el-button>
          </div>
          <div
            v-for="titem in con2"
            :key="titem.id"
            @click="goDetail(titem.newsId)"
          >
               <div class="con">
              <div>
                <img :src="titem.newsIndexImg" alt class="imgg" />
              </div>
              <p class="newsTit">{{titem.newsTitle}}</p>
              <p class="time">{{titem.createTimeStr}}</p>

              <p class="subtit">{{titem.newsSubtitle}}</p>
            </div>







          </div>


      <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange2"
              @current-change="handleCurrentChange2"
                  :current-page="currentPage2"
              layout="prev, pager, next"
              :page-size="6"
              :total="totalCount2"
            ></el-pagination>
          </div>




        </div> -->

        <!-- <div class="newsCon" v-if="cur == 2">
          <div class="noData" v-if="flag3">
            <el-button :loading="true" style="border:none;background:#f7f7f7;">加载中</el-button>
          </div>
          <div
            v-for="titem in con3"
            :key="titem.id"
               @click="goDetail(titem.newsId)"
          >

           <div class="con">
              <div>
                <img :src="titem.newsIndexImg" alt class="imgg" />
              </div>
              <p class="newsTit">{{titem.newsTitle}}</p>
              <p class="time">{{titem.createTimeStr}}</p>

              <p class="subtit">{{titem.newsSubtitle}}</p>
            </div>



          </div>

          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange3"
              @current-change="handleCurrentChange3"
                :current-page="currentPage3"
              layout="prev, pager, next"
              :page-size="6"
              :total="totalCount3"
            ></el-pagination>
          </div>
        </div> -->
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
      pagesize: 1,
      flag: true,
      flag2: true,
      flag3: true,
      cur: 0,
      totalCount:null,
       currentPage2: 1,
      pagesize2: 1,
      totalCount2:null,
     currentPage3: 1,
      pagesize3: 1,
      totalCount3:null,

    };
  },
  methods: {
    // 分页
    handleSizeChange: function (size) {
      console.log(size)
      this.pagesize = size;
      this.getnews()
    },
    //当前页currentPage
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.getnews()
    },
    //     handleSizeChange2: function (size) {
    //   this.pagesize2 = size;
    //   this.getConnt2()
    // },
    // //当前页currentPage
    // handleCurrentChange2: function (currentPage) {
    //   this.currentPage2 = currentPage;
    //   this.getConnt2()
    // },


    //         handleSizeChange3: function (size) {
    //   this.pagesize3 = size;
    //   this.getConnt3()
    // },
    // //当前页currentPage
    // handleCurrentChange3: function (currentPage) {
    //   this.currentPage3 = currentPage;
    //   this.getConnt3()
    // },
    cli(ind) {
      this.num = ind;
    },
    // 新闻动态
    getnews() {
      let info = { pageSize: 6, pageNum: this.currentPage }
      getNews(info).then((res) => {
      this.con=res.rows
      this.totalCount=res.total
            this.flag = false;
      });
    },
    // 活动预告
    // getConnt2() {
    //    let info = { pageSize: 6, pageNum: this.currentPage2 }
    //   this.cur = 1;
    //   getNews2(info).then((res) => {
    //     this.con2 = res.rows;
    //           this.totalCount2=res.total
    //     this.flag2 = false;
    //   });
    // },
    // 活动回顾
//     getConnt3() {
//       let info = { pageSize: 6, pageNum: this.currentPage3 }
//       this.cur = 2;
//       getNews3(info).then((res) => {
//         this.con3 = res.rows;
//  this.totalCount3=res.total
//         this.flag3 = false;
//       });
//     },

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
.box {
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
.cl {
  clear: both;
}
.tabTitle {
  width: 80%;
  margin: 10px auto;
  font-weight: 550;
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
    height: 500px;
    margin-left: 15px;
    // border: 1px solid gainsboro; /*no*/
    // margin-top: 50px;
    margin-bottom: 70px;
    line-height: 30px;
    background-color: white;
    margin-bottom: 20px;
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
      font-weight: 550;
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
.more{
  width: 90%;
  font-size: 12px;
  margin: auto;

  div:nth-child(1){
   width:150px;
    float: left;
  }
    div:nth-child(2){
    width:50px;
    float: right;
    color: #31bb7d;
  }
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
    font-weight: 550;
    margin-right: 20px;
  }
}
.pagination {
  .el-pagination .btn-next .el-icon,
  .el-pagination .btn-prev .el-ico {
    background-color: #f7f7f7;

    font-size: 18px;
  }
  .el-pager li {
    font-size: 18px;
    background-color: #f7f7f7;
  }
  .el-pagination button:disabled {
    background-color: #f7f7f7;
    font-size: 18px;
  }
  .el-pagination .btn-next {
    background-color: #f7f7f7;
  }
  .el-pagination .btn-prev {
    font-size: 18px;

    background-color: #f7f7f7;
  }
  .el-pagination .btn-next .el-icon,
  .el-pagination .btn-prev .el-icon {
    font-size: 18px;
  }
}
</style>
