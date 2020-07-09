<template>
  <div>
    <div class="banner1"></div>
    <p class="deta">详情:</p>
    <div v-html="content" class="detail"></div>
    <!-- 上一篇和下一篇 -->
    <div class="arrow">
      <p @click="goLast(cont.lastNewsId)" v-if="cont.hasOwnProperty('lastNewsTitle')==true">
        <span>
          <i class="el-icon-arrow-left"></i>
        </span>
        上一篇：{{cont.lastNewsTitle}}
      </p>
      <p v-else>已经是第一篇了</p>
      <p @click="goNext(cont.nextNewsId)" v-if="cont.hasOwnProperty('nextNewsTitle')==true">
        下一篇：{{cont.nextNewsTitle}}
        <span>
          <i class="el-icon-arrow-right"></i>
        </span>
      </p>
      <p v-else>已经是最后一篇了</p>
    </div>
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
      let newId = this.$route.params.id;
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
  height: 564px;
  background: url("../assets/news-banner1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.deta {
  width: 1200px;
  margin: 80px auto;
  font-size: 36px;
  font-weight: bold;
}
.detail {
  // border: 1px dashed gainsboro;
  width: 1400px;
  margin: auto;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
  line-height: 36px;
}
.arrow {
  display: flex;
  // border: 1px solid;
  width: 1600px;
  margin: auto;
  justify-content: space-between;
  margin-top: -80px;
  margin-bottom: 80px;
  color: grey;
  font-size: 18px;

  p {
    cursor: pointer;
    span {
      height: 60px;
      display: inline-block;
      // border: 1px solid;
    }
  }
}
</style>
<style lang="scss">
[class*=" el-icon-"],
[class^="el-icon-"] {
  font-size: 26px;
}
</style>
