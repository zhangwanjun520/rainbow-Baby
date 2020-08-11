<template>
  <div>
    <div class="banner1"></div>
    <p class="deta">当前位置:新闻动态>{{cont.newsTitle}}</p>
    <p class="tit">{{cont.newsTitle}}</p>
    <p class="time">{{cont.createTime}}</p>

    <div v-html="content" class="detail"></div>
      <!-- 上一篇和下一篇 -->
    <!-- <div class="arrow">
      <p
        @click="goLast(cont.lastNewsId)"
        v-if="cont.hasOwnProperty('lastNewsTitle')==true"
        class="left"
      >
        <span>
          <i class="el-icon-arrow-left"></i>
        </span>
        上一篇：{{cont.lastNewsTitle}}
      </p>
      <p v-else>已经是第一篇了</p>
      <p
        @click="goNext(cont.nextNewsId)"
        v-if="cont.hasOwnProperty('nextNewsTitle')==true"
        class="right"
      >
      <span class="right-tex">
            下一篇：{{cont.nextNewsTitle}}
      </span>

        <span>
          <i class="el-icon-arrow-right"></i>
        </span>
      </p>
      <p v-else>已经是最后一篇了</p>
    </div> -->
  </div>
</template>
<script>
import { getDetailNews } from "../api/request";
export default {
  data() {
    return {
      content: "",
      cont: ""
    };
  },
  methods: {
    getDetail() {
      let newId = this.$route.query.newsId;
      getDetailNews(newId).then(res => {
        this.html_decode(res.data.newsContent);
        this.cont = res.data;
      });
    },
    // 转义标签
    html_decode(str) {
      var s = "";
      if (str.length == 0) return "";
      s = str.replace(/&amp;/g, "&");
      s = s.replace(/&lt;/g, "<");
      s = s.replace(/&gt;/g, ">");
      s = s.replace(/&nbsp;/g, " ");
      s = s.replace(/&#39;/g, "'");
      s = s.replace(/&quot;/g, '"');
      s = s.replace(/<br\/>/g, "\n");
      this.content = s;
    },
    goLast(id) {
      this.$router.push(`/${id}`);
      this.getDetail();
    },
    goNext(id) {
      this.$router.push(`/${id}`);
      this.getDetail();
    }
  },
  created() {
    if (this.$route.query.come == 1) {
      this.getDetail();
    }
  }
};
</script>
<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 480px;
  background: url("../assets/rain/new.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.tit {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 550;
  color: #31bb7d;
  margin-top: 30px;
  margin-bottom: 20px;
}
.time {
  width: 100%;
  text-align: center;
  color: #666666;
}
.deta {
  width: 80%;
  margin: 80px auto;
  font-size: 14px;
  color: #666666;
  font-weight: 550;
}

.detail {
  // border: 1px dashed gainsboro;
  width: 1000px;
  height: auto;
  text-align: center;
  margin: auto;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  line-height: 30px;
}

</style>
<style lang="scss">
[class*=" el-icon-"],
[class^="el-icon-"] {
  font-size: 20px;
}
</style>
